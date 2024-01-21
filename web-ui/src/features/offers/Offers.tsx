import {
  Box,
  Button,
  Collapse,
  IconButton,
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
import {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Offer } from "./types";
import { useAxios } from "../../app-providers/AxiosProvider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "left" | "right" | "center" | "inherit" | "justify" | undefined;
  format?: (value: any) => ReactNode;
}

const columns: readonly Column[] = [
  { id: "toggle", label: "", minWidth: 30 },
  { id: "id", label: "ID", minWidth: 30 },
  { id: "roleName", label: "Role", minWidth: 170 },
  {
    id: "experienceLevel",
    label: "Experience Level",
    minWidth: 170,
    align: "left",
  },
  {
    id: "technologiesCatalog",
    label: "Catalog",
    minWidth: 170,
    align: "left",
  },
  {
    id: "domainName",
    label: "Domain",
    minWidth: 120,
    align: "left",
  },
  {
    id: "masterAgreementTypeName",
    label: "Master Agreement",
    minWidth: 120,
    align: "left",
  },
];

const Row = (props: { row: Offer }) => {
  const { row } = props;
  const [open, setOpen] = useState(true);

  const providersByCycle = row.provider.reduce((acc, item) => {
    if (acc.has(item.cycle)) {
      acc.get(item.cycle)?.push(item);
    } else {
      acc.set(item.cycle, [item]);
    }
    return acc;
  }, new Map<number, Offer["provider"]>());

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns
          .filter((c) => c.id !== "toggle")
          .map((column) => {
            const value = (row as any)[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format ? column.format(value) : value}
              </TableCell>
            );
          })}
      </TableRow>
      <TableRow>
        <TableCell
          sx={() => ({ paddingBottom: 0, paddingTop: 0 })}
          colSpan={columns.length}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={() => ({ paddingBottom: 2, paddingTop: 2 })}
          >
            <Typography variant="h6" gutterBottom component="div">
              Providers
            </Typography>
            {Array.from(providersByCycle.entries())
              .sort((a, b) => a[0] - b[0])
              .map(([c, providers]) => {
                return (
                  <Paper sx={{ margin: 1, padding: 1 }} elevation={2}>
                    <Typography variant="h6" gutterBottom component="div">
                      Cycle {c}
                    </Typography>
                    <Table aria-label="providers">
                      <TableHead
                        sx={(theme) => ({
                          backgroundColor: theme.palette.grey[200],
                        })}
                      >
                        <TableRow>
                          <TableCell>Id</TableCell>
                          <TableCell>Offer Id</TableCell>
                          <TableCell>Provider Name</TableCell>
                          <TableCell>Quote Price (EUR)</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {providers
                          .sort((a,b) => b.quotePrice - a.quotePrice)
                          .map((r) => (
                          <TableRow key={r.id}>
                            <TableCell component="th" scope="row">
                              {r.id}
                            </TableCell>
                            <TableCell>{r.offerId}</TableCell>
                            <TableCell>{r.name}</TableCell>
                            <TableCell>{r.quotePrice}</TableCell>
                            <TableCell>
                              <Box display="flex" gap={2}>
                                <Button color="success" variant="contained">
                                  Accept
                                </Button>
                                <Button color="error" variant="contained">
                                  Reject
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                );
              })}
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const Offers: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<Offer[]>([]);
  const axios = useAxios();

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchAllOffers = useCallback(() => {
    axios.get("/getAlloffers").then(({ data }) => setRows(data));
  }, [axios]);

  useEffect(() => {
    fetchAllOffers();
  }, [fetchAllOffers]);

  return (
    <Box p={2}>
      <Typography variant="h4" component="div" mb={2}>
        Offers
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden", padding: 1 }}>
        <TableContainer sx={{ maxHeight: "70vh" }}>
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
                .map((row) => (
                  <Row row={row} key={row.id} />
                ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length}>
                    No master agreements found
                  </TableCell>
                </TableRow>
              )}
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

export default Offers;
