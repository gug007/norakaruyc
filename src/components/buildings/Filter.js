import React, { useMemo } from "react";
import groupBy from "lodash/groupBy";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const groupBuildingsBy = (buildings, filter) => {
  const statuses = groupBy(buildings, filter);
  return Object.entries(statuses);
};

function Filter({ buildings, status, onChangeStatus }) {
  const { t } = useTranslation();
  const options = useMemo(
    () =>
      groupBuildingsBy(buildings, "status").map(([key, val]) => [
        key,
        `${t(`statuses.${key}`)} (${val.length})`,
      ]),
    [buildings, t]
  );

  return (
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
                      variant={status.includes(key) ? "contained" : "outlined"}
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
  );
}

export default Filter;
