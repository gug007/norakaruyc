import React, { useState } from "react";
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
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import IconButton from "@material-ui/core/IconButton";

const LIST = "list";
const MAP = "map";

function Buildings() {
  const [value, setValue] = useState("Կենտրոն");
  const [view, setView] = useState(LIST);
  const {
    loading,
    data = [],
  } = useFetch(`http://localhost:5000?district_select=${value}`, {}, [value]);

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
          <Box display="flex">
            <IconButton onClick={() => setView(LIST)}>
              <ReorderSharpIcon color={view === LIST ? "primary" : "default"} />
            </IconButton>
            <IconButton onClick={() => setView(MAP)}>
              <RoomOutlinedIcon color={view === MAP ? "primary" : "default"} />
            </IconButton>
            <Language />
          </Box>
        </Container>
      </Box>
      <Divider />
      <Box mt={2} />
      <Container>
        {loading ? (
          "loading..."
        ) : (
          <>{view === LIST ? <List data={data} /> : <Map data={data} />}</>
        )}
      </Container>
    </>
  );
}

export default Buildings;
