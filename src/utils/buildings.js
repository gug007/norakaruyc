export const getBuildings = (list) =>
    list.map((building) => ({
        ...building,
        district: building.district,
        address: building.address,
        developer: building.constructors,
        status: building.status,
        startDate: building.permit_start_dt,
        endDate: building.permit_end_dt,
    }));
