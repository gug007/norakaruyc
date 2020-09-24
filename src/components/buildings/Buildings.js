import React, { useMemo } from "react";
import { SuspenseWithPerf } from "reactfire";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import useList from "../../hooks/useList";
import Grid from "./Grid";
import List from "./List";
import Map from "./Map";
import Header from "./Header";
import Nav, { GRID, LIST } from "./Nav";
import allBuildings from "../../constants/buildings";
import { getBuildings } from "../../utils/buildings";

function Buildings() {
  const { t } = useTranslation();
  const [value, setValue] = useList(["Kentron"]);
  const [status, setStatus] = useList();

  const location = useLocation();
  const view = qs.parse(location.search).view || GRID;

  const loading = false;
  const data = value.flatMap((key) => allBuildings[key]);

  const buildings = useMemo(() => {
    const list = status.length
      ? data.filter((v) => status.includes(v.status))
      : data;
    return getBuildings(list);
  }, [data, status]);

  return (
    <SuspenseWithPerf
      fallback={
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      }
      traceId={"load-burrito-status"}
    >
      <Header
        district={value}
        buildings={data}
        status={status}
        onChangeStatus={setStatus}
        onChangeDistrict={setValue}
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
          <Nav view={view} />
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
