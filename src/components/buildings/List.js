import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";

function List({ data }) {
  const { t } = useTranslation();

  return (
    <Grid container spacing={1}>
      {data.map((building, i) => {
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
            <Box component={Paper} p={2}>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Typography color="textSecondary">
                    {t("district")}:
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">{district}</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography color="textSecondary">{t("address")}:</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">{address}</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography color="textSecondary">
                    {t("developer")}:
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">{constructors}</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography color="textSecondary">{t("status")}:</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">
                    {t(`statuses.${status}`)}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography color="textSecondary">
                    {t("permit_start_dt")}:
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">{permit_start_dt}</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography color="textSecondary">
                    {t("permit_end_dt")}:
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography component="span">{permit_end_dt}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default List;
