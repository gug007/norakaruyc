import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Language from "./language/Language";

function Header({ district, onChangeDistrict, districts }) {
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
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
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
