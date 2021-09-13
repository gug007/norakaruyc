const fs = require("fs");
const axios = require("axios");
const sharp = require("sharp");
const fetch = require("isomorphic-fetch");
const ids = require("./src/constants/buildings/ids.json");

const API = "https://www.yerevan.am/permit";
const IMAGE_URL = "http://qhvv.yerevan.am:8080";

const districts = [
  ["Աջափնյակ", "Ajapnyak"],
  ["Արաբկիր", "Arabkir"],
  ["Ավան", "Avan"],
  ["Դավթաշեն", "Davitashen"],
  ["Էրեբունի", "Erebuni"],
  ["Քանաքեռ-Զեյթուն", "Kanaker-Zeytun"],
  ["Կենտրոն", "Kentron"],
  ["Մալաթիա-Սեբաստիա", "Malatia-Sebastia"],
  ["Նոր Նորք", "Nor Nork"],
  ["Նորք-Մարաշ", "Nork-Marash"],
  ["Նուբարաշեն", "Nubarashen"],
  ["Շենգավիթ", "Shengavit"],
];

async function download(url, dest) {
  axios({ url: url, responseType: "arraybuffer" }).then((res) => {
    console.log(`Resizing Image!`);
    // console.log(url, res.data)
    const buffer = Buffer.from(res.data, "binary");
    return sharp(buffer).resize(1200).toFile(dest);
  });
}

const getBuildingsByDistrict = (district) => {
  const body = {
    district_select: district,
    typeObjectValue: "Բնակելի շինություններ",
    "building_subtype[]": "Բազմաբնակարան բնակելի շենքի կառուցում",
  };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: Object.entries(body)
      .map(([key, val]) => `${key}=${val}`)
      .join("&"),
  };
  return fetch(API, options);
};

(async () => {
  await Promise.all(
    districts.map(async ([am, en]) => {
      const response = await getBuildingsByDistrict(am);
      const data = await response.json();
      console.log(en, data.length);

      const list = data.map((v) => {
        const uniqId = `${v.x}-${v.y}`;
        if (!ids.some((id) => id === uniqId)) {
          ids.push(uniqId);
        }

        const id = ids.findIndex((id) => id === uniqId);

        if (v.sketch) {
          const dir = `./public/images/${en}/`;
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }

          download(`${IMAGE_URL}${v.sketch}`, `${dir}/${id}.jpg`);
        }

        return {
          id,
          image: v.sketch ? `/images/${en}/${id}.jpg` : undefined,
          ...v,
        };
      });
      return fs.writeFileSync(
        `src/constants/buildings/${en}.json`,
        JSON.stringify(list, null, 2)
      );
    })
  );

  fs.writeFileSync(
    `src/constants/buildings/ids.json`,
    JSON.stringify(ids, null, 2)
  );
})();
