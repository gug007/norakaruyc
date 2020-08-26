import React, { useMemo, useState } from "react";
import useFetch from "use-http";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import districts from "../../constants/districts";
import useStatus from "../../hooks/useStatus";
import List from "./List";
import Map from "./Map";
import Header from "./Header";
import Nav, { GRID, LIST } from "./Nav";

function Buildings() {
  const [value, setValue] = useState("Կենտրոն");
  const [status, setStatus] = useStatus();
  const location = useLocation();
  const view = qs.parse(location.search).view || GRID;

  const {
    loading,
    data = [],
  } = useFetch(`http://localhost:5000?district_select=${value}`, {}, [value]);

  const buildings = useMemo(
    () =>
      status.length ? data.filter((v) => status.includes(v.status)) : data,
    [data, status]
  );

  return (
    <>
      <Header
        district={value}
        onChangeDistrict={setValue}
        districts={districts}
      />
      <Divider />
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
              <List buildings={buildings} />
            </Container>
          ) : (
            <Map buildings={buildings} />
          )}
        </>
      )}
    </>
  );
}

export default Buildings;
