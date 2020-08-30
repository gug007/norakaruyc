import React, { useMemo, useState } from "react";
import { SuspenseWithPerf } from "reactfire";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import districts from "../../constants/districts";
import useStatus from "../../hooks/useStatus";
import Grid from "./Grid";
import List from "./List";
import Map from "./Map";
import Header from "./Header";
import Nav, { GRID, LIST } from "./Nav";
import allBuildings from "../../constants/buildings";
import { useTranslation } from "react-i18next";

function Buildings() {
  const { t } = useTranslation();
  const [value, setValue] = useState("Kentron");
  const [status, setStatus] = useStatus();
  const location = useLocation();
  const view = qs.parse(location.search).view || GRID;

  const loading = false;
  const data = allBuildings[value];

  const buildings = useMemo(() => {
    const list = status.length
      ? data.filter((v) => status.includes(v.status))
      : data;
    return list.map((building) => ({
      ...building,
      district: building.district,
      address: building.address,
      developer: building.constructors,
      status: building.status,
      startDate: building.permit_start_dt,
      endDate: building.permit_end_dt,
    }));
  }, [data, status]);

  return (
    <SuspenseWithPerf
      fallback={<p>loading burrito status...</p>}
      traceId={"load-burrito-status"}
    >
      <Header
        district={value}
        onChangeDistrict={setValue}
        districts={districts}
      />
      <Divider />
      <Box
        p={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        bgcolor="primary.main"
      >
        <Typography variant="h1">
          {t("newBuildings")} {t("yerevan")}
        </Typography>
      </Box>
      {loading ? (
        <Container>loading...</Container>
      ) : (
        <>
          <Nav
            buildings={data}
            view={view}
            status={status}
            onChangeStatus={setStatus}
          />
          {view === LIST ? (
            <Container>
              <List buildings={buildings} />
            </Container>
          ) : view === GRID ? (
            <Container>
              <Grid buildings={buildings} />
            </Container>
          ) : (
            <Map buildings={buildings} />
          )}
        </>
      )}
    </SuspenseWithPerf>
  );
}

export default Buildings;
