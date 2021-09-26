import orderBy from "lodash/orderBy";

export const getBuilding = (building) => ({
  ...building,
  district: building.district,
  address: building.address,
  developer: building.constructors,
  status: building.status,
  startDate: building.permit_start_dt,
  endDate: building.permit_end_dt,
});

export const getBuildings = (list) =>
  orderBy(list, (v) => !!v.sketch, "desc").map(getBuilding);
