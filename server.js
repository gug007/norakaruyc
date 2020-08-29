const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("isomorphic-fetch");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const API = "https://www.yerevan.am/permit";

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

const getBuildingsByDistrict = (district) => {
  const body = {
    district_select: district,
    typeObjectValue: "Բնակելի շինություններ",
    building_subtype: "Բազմաբնակարան բնակելի շենքի կառուցում",
  };
  return fetch(API, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: Object.entries(body)
      .map(([key, val]) => `${key}=${val}`)
      .join("&"),
  });
};

app.get("*", async (req, res) => {
  const { district_select } = req.query;
  console.log(req.query);

  // const response = await getBuildingsByDistrict(district_select);

  districts.map(async ([am, en]) => {
    const response = await getBuildingsByDistrict(am);
    fs.writeFile(
      `src/constants/buildings/${en}.json`,
      JSON.stringify(await response.json(), null, 2),
      (err) => {
        console.log(err);
      }
    );
  });

  res.send([]);
  // res.send(await response.json());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const r = `
district_select: Կենտրոն
address: 
builder: 
typeObjectValue: Բնակելի շինություններ | Հասարակական շինություններ | Արտադրական շինություններ
building_subtype: Բազմաբնակարան բնակելի շենքի կառուցում
`;

const building_subtype = [
  "Բազմաֆունկցիոնալ բնակելի համալիրի կառուցում",
  "Ավտոտնակի կառուցում",
  "Կցակառույցի կառուցում",
  "Բնակելի տան ընդլայնում",
  "Բազմաբնակարան բնակելի շենքի կառուցում",
  "Բնակելի տարածքի վերակառուցում",
  "Բնակելի տան կառուցում",
  "Ձեղնահարկի կառուցում",
  "Բազմաֆունկցիոնալ հասարակական համալիրի կառուցում",
  "Բազմաֆունկցիոնալ բնակելի շենքի կառուցում",
  "Պատշգամբի կառուցում",
  "Բնակելի տարածքում մուտքի կազմակերպում",
  "Պարսպի կառուցում",
  "Նախամուտքի կառուցում",
  "Վերնահարկի կառուցում",
  "Օժանդակ կառույցի կազմակերպում",
  "Բնակարանի վերակառուցում",
  "Բնակելի տան վերակառուցում",
  "Բնակելի և հասարակական շինության կառուցում",
  "Բնակելի և հասարակական շինության վերակառուցում",
  "Բնակելի տան հարկի ավելացում",
  "Հասարակական տարածքը բնակելիի վերակառուցում",
];
