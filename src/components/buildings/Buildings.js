import React, { useState } from "react";
import useFetch from "use-http";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import districts from "../../constants/districts";
import List from "./List";
import Language from "./language/Language";

function Buildings() {
  const [value, setValue] = useState("Կենտրոն");
  const {
    loading,
    data = [],
  } = useFetch(`http://localhost:5000?district_select=${value}`, {}, [value]);

  return (
    <>
      <Box
        my={1.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        clone
      >
        <Container>
          <FormControl variant="outlined">
            <InputLabel>Select district</InputLabel>
            <Select value={value} onChange={(v) => setValue(v.target.value)}>
              {districts.map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Language />
        </Container>
      </Box>
      <Divider />
      <Box mt={2} />
      <Container>{loading ? "loading..." : <List data={data} />}</Container>
    </>
  );
}

export default Buildings;
