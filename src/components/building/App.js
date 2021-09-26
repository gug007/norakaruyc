import React from "react";
import { FacebookProvider, Comments } from "react-facebook";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import BlurOnOutlinedIcon from "@material-ui/icons/BlurOnOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import useFormatDate from "../../hooks/useFormatDate";
import { getBuilding } from "../../utils/buildings";
import allBuildings from "../../constants/buildings";

const facebookAppId = "4500269623357357";

function Building() {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const params = useParams();

  const building = getBuilding(
    Object.entries(allBuildings)
      .flatMap((v) => v[1])
      .find((v) => v.id.toString() === params.id)
  );

  return (
    <Container>
      <Box display="flex" mt="60px" height={400}>
        <Box maxWidth={300} maxHeight="100%" clone>
          <img src={building.image} alt="" />
        </Box>
        <Box ml={5}>
          <Typography variant="h3">{building.address}</Typography>
          <Box mr={1.5} />
          <Box mt={1.5} display="flex">
            <Tooltip title={t("district")}>
              <MapOutlinedIcon />
            </Tooltip>
            <Box mr={1} />
            <Typography>{building.district}</Typography>
          </Box>
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
      <Box py={3}>
        <Divider />
      </Box>
      <FacebookProvider appId={facebookAppId}>
        <Comments
          width="100%"
          href={`https://karucapatoxic.am/b/${params.id}`}
        />
      </FacebookProvider>
    </Container>
  );
}

export default Building;
