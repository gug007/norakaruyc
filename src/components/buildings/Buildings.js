import React, { useMemo, useState } from "react";
import useFetch from "use-http";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import districts from "../../constants/districts";
import List from "./List";
import Map from "./Map";
import Language from "./language/Language";
import Nav, { GRID, LIST } from "./Nav";

function Buildings() {
  const [value, setValue] = useState("Կենտրոն");
  const [status, setStatus] = useState("");
  const [view, setView] = useState(GRID);
  const {
    loading,
    data = [],
  } = useFetch(`http://localhost:5000?district_select=${value}`, {}, [value]);

  const buildings = useMemo(
    () => (status ? data.filter((v) => v.status === status) : data),
    [data, status]
  );

  return (
    <>
      <Box
        my={1.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        clone
      >
        <Container>
          <FormControl variant="outlined">
            <InputLabel>Select district</InputLabel>
            <Select value={value} onChange={(v) => setValue(v.target.value)}>
              {districts.map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Language />
          </Box>
        </Container>
      </Box>
      <Divider />
      {loading ? (
        <Container>loading...</Container>
      ) : (
        <>
          <Nav
            buildings={data}
            view={view}
            onChangeView={setView}
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
