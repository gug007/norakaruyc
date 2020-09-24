import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import qs from "query-string";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export const GRID = "grid";
export const LIST = "list";
export const MAP = "map";

function Nav({ view }) {
  const history = useHistory();

  const handleChangeView = useCallback(
    (event, value) => {
      const data = qs.parse(window.location.search);
      history.push({ search: qs.stringify({ ...data, view: value }) });
    },
    [history]
  );

  return (
    <Box
      height={70}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      clone
    >
      <Container>
        <Box display="flex">
          <ToggleButtonGroup value={view} exclusive onChange={handleChangeView}>
            <ToggleButton value={GRID} classes={{}}>
              <AppsOutlinedIcon />
            </ToggleButton>
            <ToggleButton value={LIST}>
              <ReorderSharpIcon />
            </ToggleButton>
            <ToggleButton value={MAP}>
              <PlaceOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Container>
    </Box>
  );
}

export default Nav;
