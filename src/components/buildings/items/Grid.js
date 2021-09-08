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
import useFormatDate from "../../../hooks/useFormatDate";

function GridComponent({ buildings, displayDistrict = false }) {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  return (
    <Grid container spacing={1}>
      {buildings.map((building, i) => {
        return (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Box component={Paper} boxSizing="border-box" height="100%">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={400}
                bgcolor="#f1f1f1"
              >
                {building.sketch && (
                  <Box maxWidth="100%" maxHeight="100%" clone>
                    <img
                      src={`http://qhvv.yerevan.am:8080${building.sketch}`}
                    />
                  </Box>
                )}
              </Box>
              <Box p={2}>
                <Typography variant="h3">{building.address}</Typography>
                <Box mr={1.5} />
                {displayDistrict && (
                  <Box mt={1.5} display="flex">
                    <Tooltip title={t("district")}>
                      <MapOutlinedIcon />
                    </Tooltip>
                    <Box mr={1} />
                    <Typography>{building.district}</Typography>
                  </Box>
                )}
                <Box mt={1.5} display="flex">
                  <Tooltip title={t("developer")}>
                    <ApartmentOutlinedIcon color="action" />
                  </Tooltip>
                  <Box mr={1} />
                  <Typography>{building.developer}</Typography>
                </Box>
                <Box mt={1.5} display="flex">
                  <Tooltip title={t("status")}>
                    <BlurOnOutlinedIcon color="action" />
                  </Tooltip>
                  <Box mr={1} />
                  <Typography>{t(`statuses.${building.status}`)}</Typography>
                </Box>
                <Box mt={1.5} display="flex">
                  <Tooltip title={t("startDate")}>
                    <QueryBuilderOutlinedIcon color="action" />
                  </Tooltip>
                  <Box mr={1} />
                  <Typography>{formatDate(building.startDate)}</Typography>
                  <Box mr={1} />
                  <Tooltip title={t("endDate")}>
                    <CheckCircleOutlineOutlinedIcon color="action" />
                  </Tooltip>
                  <Box mr={1} />
                  <Typography>{formatDate(building.endDate)}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default React.memo(GridComponent);
