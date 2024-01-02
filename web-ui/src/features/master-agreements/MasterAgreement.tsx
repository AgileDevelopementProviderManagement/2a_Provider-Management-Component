import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { Domain, MasterAgreementType } from "./types";
import AddIcon from '@mui/icons-material/Add';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: "masterAgreementTypeId", label: "ID", minWidth: 50 },
  { id: "masterAgreementTypeName", label: "Agreement Name", minWidth: 170 },
  {
    id: "validFrom",
    label: "Valid From",
    minWidth: 170,
    align: "right",
  },
  {
    id: "validUntil",
    label: "Valid Until",
    minWidth: 170,
    align: "right",
  },
  {
    id: "dailyrateIndicator",
    label: "Daily Rate Indicator",
    minWidth: 170,
    align: "right",
  },
  {
    id: "deadline",
    label: "Deadline",
    minWidth: 120,
    align: "right",
  },
  {
    id: "teamdeadline",
    label: "Team Deadline",
    minWidth: 170,
    align: "right",
  },
  {
    id: "workscontractdeadline",
    label: "Contract Deadline",
    minWidth: 170,
    align: "right",
  },
  {
    id: "domains",
    label: "Domains",
    minWidth: 170,
    align: "right",
    format: (domains: Domain[]) =>
      domains
        ?.map((domain) => domain.domainId + "-" + domain.domainName)
        .join(","),
  },
];

const rows: MasterAgreementType[] = [
  {
    masterAgreementTypeId: "5",
    masterAgreementTypeName: "Chevrolet",
    validFrom: "1/10/2023",
    validUntil: "8/17/2023",
    dailyrateIndicator: "44",
    deadline: "8/21/2023",
    teamdeadline: "12/22/2023",
    workscontractdeadline: "8/2/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "2",
    masterAgreementTypeName: "Saturn",
    validFrom: "10/30/2023",
    validUntil: "5/22/2023",
    dailyrateIndicator: "95",
    deadline: "3/8/2023",
    teamdeadline: "7/6/2023",
    workscontractdeadline: "6/7/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "3",
    masterAgreementTypeName: "Ford",
    validFrom: "2/17/2023",
    validUntil: "6/27/2023",
    dailyrateIndicator: "74",
    deadline: "9/26/2023",
    teamdeadline: "3/20/2023",
    workscontractdeadline: "9/20/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "4",
    masterAgreementTypeName: "Chevrolet",
    validFrom: "2/28/2023",
    validUntil: "2/21/2023",
    dailyrateIndicator: "1",
    deadline: "4/7/2023",
    teamdeadline: "8/11/2023",
    workscontractdeadline: "12/6/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "5",
    masterAgreementTypeName: "Mitsubishi",
    validFrom: "3/8/2023",
    validUntil: "9/14/2023",
    dailyrateIndicator: "85",
    deadline: "1/28/2023",
    teamdeadline: "8/3/2023",
    workscontractdeadline: "3/29/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "6",
    masterAgreementTypeName: "Saab",
    validFrom: "11/10/2023",
    validUntil: "2/2/2023",
    dailyrateIndicator: "15",
    deadline: "6/5/2023",
    teamdeadline: "11/17/2023",
    workscontractdeadline: "8/9/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "7",
    masterAgreementTypeName: "Nissan",
    validFrom: "6/12/2023",
    validUntil: "2/22/2023",
    dailyrateIndicator: "77",
    deadline: "5/7/2023",
    teamdeadline: "6/7/2023",
    workscontractdeadline: "10/14/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "8",
    masterAgreementTypeName: "Oldsmobile",
    validFrom: "4/4/2023",
    validUntil: "9/26/2023",
    dailyrateIndicator: "21",
    deadline: "5/9/2023",
    teamdeadline: "9/22/2023",
    workscontractdeadline: "3/7/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "9",
    masterAgreementTypeName: "Toyota",
    validFrom: "12/25/2023",
    validUntil: "9/17/2023",
    dailyrateIndicator: "95",
    deadline: "11/24/2023",
    teamdeadline: "7/1/2023",
    workscontractdeadline: "12/5/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
  {
    masterAgreementTypeId: "10",
    masterAgreementTypeName: "Hyundai",
    validFrom: "10/29/2023",
    validUntil: "4/14/2023",
    dailyrateIndicator: "41",
    deadline: "5/6/2023",
    teamdeadline: "9/16/2023",
    workscontractdeadline: "1/20/2023",
    domains: [{ domainId: "23", domainName: "D1" }],
  },
];

const MasterAgreement: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" component="div" mb={2}>
          Master Agreements
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Master Agreement
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.masterAgreementTypeId}
                    >
                      {columns.map((column) => {
                        const value = (row as any)[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default MasterAgreement;
