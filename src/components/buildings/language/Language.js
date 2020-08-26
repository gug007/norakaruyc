import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import amIcon from "./am.svg";
import ruIcon from "./ru.svg";
import usIcon from "./us.svg";

const languages = [
  ["am", amIcon],
  ["ru", ruIcon],
  ["en", usIcon],
];

function Language() {
  const history = useHistory();
  const { i18n } = useTranslation();
  const selectedIcon = languages.find(([lng]) => lng === i18n.language)[1];

  return (
    <PopupState variant="popover" popupId="add-filter">
      {(popupState) => (
        <React.Fragment>
          <IconButton {...bindTrigger(popupState)}>
            <img src={selectedIcon} height={32} alt="" />
          </IconButton>
          <Box mt={1} />
          <Menu {...bindMenu(popupState)}>
            {languages.map(([lng, icon]) => (
              <MenuItem
                key={lng}
                selected={lng === i18n.language}
                onClick={() => {
                  history.push({
                    pathname: lng,
                    search: window.location.search,
                  });
                  i18n.changeLanguage(lng);
                  popupState.close();
                }}
              >
                <img src={icon} height={32} alt="" />
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Language;
