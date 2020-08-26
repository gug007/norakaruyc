import React, { useMemo } from "react";
import groupBy from "lodash/groupBy";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ReorderSharpIcon from "@material-ui/icons/ReorderSharp";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import IconButton from "@material-ui/core/IconButton";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useHistory } from "react-router-dom";
import qs from "query-string";

export const GRID = "grid";
export const LIST = "list";
export const MAP = "map";

const groupBuildingsBy = (buildings, filter) => {
  const statuses = groupBy(buildings, filter);
  return Object.entries(statuses);
};

function Nav({ buildings, view, status, onChangeStatus }) {
  const history = useHistory();
  const { t } = useTranslation();
  const options = useMemo(
    () =>
      groupBuildingsBy(buildings, "status").map(([key, val]) => [
        key,
        `${t(`statuses.${key}`)} (${val.length})`,
      ]),
    [buildings, t]
  );

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
          <PopupState variant="popover">
            {(popupState) => (
              <Box>
                <IconButton {...bindTrigger(popupState)}>
                  <FilterListOutlinedIcon color="action" />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Box p={2} maxWidth={800}>
                    <Typography variant="h4">{t("status")}</Typography>
                    <Box pt={2} m={-0.5} display="flex" flexWrap="wrap">
                      {options.map(([key, val]) => (
                        <Box key={key} m={0.5}>
                          <Button
                            variant={
                              status.includes(key) ? "contained" : "outlined"
                            }
                            onClick={() => onChangeStatus(key)}
                          >
                            {val}
                          </Button>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Popover>
              </Box>
            )}
          </PopupState>
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
