import React, { useMemo } from "react";
import Container from "@material-ui/core/Container";

import Grid from "./Grid";
import List from "./List";
import Map from "./Map";
import { GRID, LIST } from "../Nav";
import allBuildings from "../../../constants/buildings";
import { getBuildings } from "../../../utils/buildings";
import useQuery from "../../../hooks/useQuery";

export default function Buildings({ districts, status }) {
  const query = useQuery();

  const view = query.view || GRID;
  const data = districts.flatMap((key) => allBuildings[key]);

  const buildings = useMemo(() => {
    const list = status.length
      ? data.filter((v) => status.includes(v.status))
      : data;
    return getBuildings(list);
  }, [data, status]);

  return view === LIST ? (
    <Container>
      <List buildings={buildings} />
    </Container>
  ) : view === GRID ? (
    <Container>
      <Grid buildings={buildings} />
    </Container>
  ) : (
    <Map buildings={buildings} />
  );
}
