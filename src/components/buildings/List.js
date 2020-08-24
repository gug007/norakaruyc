import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import BlurOnOutlinedIcon from "@material-ui/icons/BlurOnOutlined";
import { useTranslation } from "react-i18next";
import useFormatDate from "../../hooks/useFormatDate";

function List({ buildings, displayDistrict = false }) {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  return (
    <Grid container spacing={1}>
      {buildings.map((building, i) => {
        const {
          district,
          address,
          constructors,
          status,
          permit_start_dt,
          permit_end_dt,
        } = building;

        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Box
              component={Paper}
              p={2}
              boxSizing="border-box"
              height="100%"
              border="1px solid rgba(0, 0, 0, 0.12)"
            >
              <Typography variant="h3">{address}</Typography>
              <Box mr={1.5} />
              {displayDistrict && (
                <Box mt={1.5} display="flex">
                  <Tooltip title={t("district")}>
                    <MapOutlinedIcon />
                  </Tooltip>
                  <Box mr={1} />
                  <Typography>{district}</Typography>
                </Box>
              )}
              <Box mt={1.5} display="flex">
                <Tooltip title={t("developer")}>
                  <ApartmentOutlinedIcon color="action" />
                </Tooltip>
                <Box mr={1} />
                <Typography>{constructors}</Typography>
              </Box>
              <Box mt={1.5} display="flex">
                <Tooltip title={t("status")}>
                  <BlurOnOutlinedIcon color="action" />
                </Tooltip>
                <Box mr={1} />
                <Typography>{t(`statuses.${status}`)}</Typography>
              </Box>
              <Box mt={1.5} display="flex">
                <Tooltip title={t("permit_start_dt")}>
                  <QueryBuilderOutlinedIcon color="action" />
                </Tooltip>
                <Box mr={1} />
                <Typography>{formatDate(permit_start_dt)}</Typography>
                <Box mr={1} />
                <Tooltip title={t("permit_end_dt")}>
                  <CheckCircleOutlineOutlinedIcon color="action" />
                </Tooltip>
                <Box mr={1} />
                <Typography>{formatDate(permit_end_dt)}</Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default React.memo(List);
