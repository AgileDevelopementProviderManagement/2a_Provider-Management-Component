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
import AddIcon from "@mui/icons-material/Add";
import { ProviderType } from "./types";
import { Domain } from "../../types";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "left" | "right" | "center" | "inherit" | "justify" | undefined;
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: "providerId", label: "ID", minWidth: 50,format: (value: number) => value.toFixed(2) },
  { id: "providerName", label: "Provider Name", minWidth: 170 },
  {
    id: "experienceLevel",
    label: "Experience Level",
    minWidth: 170,
    align: "left",
  },
  {
    id: "technologyLevel",
    label: "Technology Level",
    minWidth: 170,
    align: "left",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2)
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
const rows: ProviderType[] = [
  {
    providerId: 1,
    providerName: "Marsiella",
    experienceLevel: "Construction Worker",
    technologyLevel: "Procurement Outsourcing",
    price: 41,
    domains: [{domainId: "AF", domainName: "AF"}],
  },
  {
    providerId: 2,
    providerName: "Deeanne",
    experienceLevel: "Construction Manager",
    technologyLevel: "CQI",
    price: 78,
    domains: [{domainId: "AF", domainName: "AF"}],
  },
  {
    providerId: 3,
    providerName: "Janessa",
    experienceLevel: "Electrician",
    technologyLevel: "TDI",
    price: 6,
    domains: [{domainId: "AF", domainName: "AF"}],
  },
  {
    providerId: 4,
    providerName: "Maiga",
    experienceLevel: "Engineer",
    technologyLevel: "Power Utilities",
    price: 67,
    domains: [{domainId: "AF", domainName: "AF"}],
  },
  {
    providerId: 5,
    providerName: "Shaina",
    experienceLevel: "Construction Worker",
    technologyLevel: "Data Modeling",
    price: 84,
    domains: [{domainId: "AF", domainName: "AF"}],
  },
];
const Providers: FunctionComponent = () => {
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" component="div" mb={2}>
          Providers
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Providers
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
                      key={row.providerId}
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

export default Providers;
