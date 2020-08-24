import React, { useMemo } from "react";
import uniq from "lodash/uniq";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import IconButton from "@material-ui/core/IconButton";
import Select from "../common/Select";
import { useTranslation } from "react-i18next";

export const GRID = "grid";
export const LIST = "list";
export const MAP = "map";

function Nav({ buildings, view, onChangeView, status, onChangeStatus }) {
  const { t } = useTranslation();
  const options = useMemo(
    () =>
      [["", "All Statuses"]].concat(
        uniq(buildings.map((v) => v.status)).map((v) => [v, t(`statuses.${v}`)])
      ),
    [buildings, t]
  );
  console.log(1, status, options);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      clone
    >
      <Container>
        <Box>
          <Select
            label="Status"
            value={status}
            onChange={(v) => onChangeStatus(v.target.value)}
            options={options}
          />
        </Box>
        <Box display="flex" py={1.5}>
          <IconButton onClick={() => onChangeView(GRID)}>
            <AppsOutlinedIcon color={view === GRID ? "primary" : "action"} />
          </IconButton>
          <IconButton onClick={() => onChangeView(LIST)}>
            <ReorderSharpIcon color={view === LIST ? "primary" : "action"} />
          </IconButton>
          <IconButton onClick={() => onChangeView(MAP)}>
            <PlaceOutlinedIcon color={view === MAP ? "primary" : "action"} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Nav;
