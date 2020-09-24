import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Language from "./language/Language";
import districts from "../../constants/districts";
import Filter from "./Filter";

function Header({
  district,
  buildings,
  status,
  onChangeStatus,
  onChangeDistrict,
}) {
  const { i18n } = useTranslation();

  const options = useMemo(
    () => districts.map((d) => [d.name_en, d[`name_${i18n.language}`]]),
    [i18n.language]
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
        <Filter
          district={district}
          districts={options}
          buildings={buildings}
          status={status}
          onChangeDistrict={onChangeDistrict}
          onChangeStatus={onChangeStatus}
        />
        <Box>
          <Language />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
