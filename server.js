const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("isomorphic-fetch");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const API = "https://www.yerevan.am/permit";

app.get("*", async (req, res) => {
  const { district_select } = req.query;
  console.log(req.query);
  const body = {
    district_select,
    typeObjectValue: "Բնակելի շինություններ",
    building_subtype: "Բազմաբնակարան բնակելի շենքի կառուցում",
  };
  const response = await fetch(API, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: Object.entries(body)
      .map(([key, val]) => `${key}=${val}`)
      .join("&"),
  });
  res.send(await response.json());
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
