import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useList from "../../hooks/useList";
import Header from "./Header";
import Nav, { GRID } from "./Nav";
import allBuildings from "../../constants/buildings";
import useQuery from "../../hooks/useQuery";
import Buildings from "./items/Buildings";

function BuildingsPage() {
  const query = useQuery();
  const { t } = useTranslation();
  const [value, setValue] = useList(["Kentron"]);
  const [status, setStatus] = useList();

  const view = query.view || GRID;
  const loading = false;
  const data = value.flatMap((key) => allBuildings[key]);

  return (
    <>
      <Header />
      <Divider />
      <Box
        p={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        style={{ background: "linear-gradient(to left top, #81c784, #4caf50)" }}
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
            view={view}
            district={value}
            buildings={data}
            status={status}
            onChangeStatus={setStatus}
            onChangeDistrict={setValue}
          />
          <Buildings districts={value} status={status} />
        </>
      )}
    </>
  );
}

export default BuildingsPage;
