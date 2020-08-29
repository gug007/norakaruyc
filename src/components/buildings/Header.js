import React, { useMemo } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Language from "./language/Language";
import { useTranslation } from "react-i18next";

function Header({ district, onChangeDistrict }) {
  const { i18n } = useTranslation();
  const districtsRef = useFirestore().collection("districts");
  const districts = useFirestoreCollectionData(districtsRef);
  const options = useMemo(
    () => districts.map((d) => [d.name_en, d[`name_${i18n.language}`]]),
    [districts, i18n.language]
  );

  return (
    <Box
      height={64}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      clone
    >
      <Container>
        <FormControl variant="outlined">
          <InputLabel>Select district</InputLabel>
          <Select
            value={district}
            onChange={(v) => onChangeDistrict(v.target.value)}
          >
            {options.map(([key, val]) => (
              <MenuItem key={key} value={key}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <Language />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
