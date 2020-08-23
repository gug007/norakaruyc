import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";
import amIcon from "./am.svg";
import ruIcon from "./ru.svg";
import usIcon from "./us.svg";

function Language() {
  const { i18n } = useTranslation();

  return (
    <Box>
      {[
        ["am", amIcon],
        ["ru", ruIcon],
        ["us", usIcon],
      ].map(([lng, icon]) => (
        <IconButton
          key={lng}
          onClick={() => {
            i18n.changeLanguage(lng);
          }}
        >
          <img src={icon} height={32} alt="" />
        </IconButton>
      ))}
    </Box>
  );
}

export default Language;
