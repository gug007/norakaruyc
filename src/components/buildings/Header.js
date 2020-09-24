import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Language from "./language/Language";

function Header() {
  return (
    <Box
      height={64}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      clone
    >
      <Container>
        <Box />
        <Box>
          <Language />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
