import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import qs from "query-string";
import Filter from "./Filter";

export const GRID = "grid";
export const LIST = "list";
export const MAP = "map";

function Nav({ buildings, view, status, onChangeStatus }) {
  const history = useHistory();

  const handleChangeView = (value) => {
    const data = qs.parse(window.location.search);
    history.push({ search: qs.stringify({ ...data, view: value }) });
  };

  return (
    <Box
      height={64}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      clone
    >
      <Container>
        <Box display="flex">
          <Filter
            buildings={buildings}
            status={status}
            onChangeStatus={onChangeStatus}
          />
        </Box>
        <Box display="flex">
          <IconButton onClick={() => handleChangeView(GRID)}>
            <AppsOutlinedIcon color={view === GRID ? "primary" : "action"} />
          </IconButton>
          <IconButton onClick={() => handleChangeView(LIST)}>
            <ReorderSharpIcon color={view === LIST ? "primary" : "action"} />
          </IconButton>
          <IconButton onClick={() => handleChangeView(MAP)}>
            <PlaceOutlinedIcon color={view === MAP ? "primary" : "action"} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Nav;
