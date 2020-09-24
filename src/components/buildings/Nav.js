import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import qs from "query-string";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import Filter from "./Filter";
import { useTranslation } from "react-i18next";
import districts from "../../constants/districts";

export const GRID = "grid";
export const LIST = "list";
export const MAP = "map";

function Nav({
  view,
  district,
  buildings,
  status,
  onChangeStatus,
  onChangeDistrict,
}) {
  const history = useHistory();
  const { i18n } = useTranslation();

  const options = useMemo(
    () => districts.map((d) => [d.name_en, d[`name_${i18n.language}`]]),
    [i18n.language]
  );

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
      justifyContent="space-between"
      clone
    >
      <Container>
        <Box display="flex">
          <Filter
            district={district}
            districts={options}
            buildings={buildings}
            status={status}
            onChangeDistrict={onChangeDistrict}
            onChangeStatus={onChangeStatus}
          />
        </Box>
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
