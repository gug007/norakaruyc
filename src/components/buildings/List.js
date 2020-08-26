import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";
import useFormatDate from "../../hooks/useFormatDate";

function GridComponent({ buildings, displayDistrict = false }) {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("address")}</TableCell>
            <TableCell>{t("developer")}</TableCell>
            <TableCell>{t("status")}</TableCell>
            <TableCell>{t("startDate")}</TableCell>
            <TableCell>{t("endDate")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buildings.map((building, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {building.address}
              </TableCell>
              <TableCell>{building.developer}</TableCell>
              <TableCell>{t(`statuses.${building.status}`)}</TableCell>
              <TableCell>{formatDate(building.startDate)}</TableCell>
              <TableCell>{formatDate(building.endDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(GridComponent);
