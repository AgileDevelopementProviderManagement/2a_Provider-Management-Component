import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ChangeEvent,
  FunctionComponent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { MasterAgreementType } from "./types";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Domain } from "../../types";
import { TransitionProps } from "@mui/material/transitions";
import { useAxios } from "../../app-providers/AxiosProvider";

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

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MasterAgreement: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<MasterAgreementType[]>([]);
  const axios = useAxios();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get("/mastertype/all").then(({data}) => setRows(data));
  }, [axios]);

  return (
    <Box p={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" component="div" mb={2}>
          Master Agreements
        </Typography>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
        >
          Create Master Agreement
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden", padding: 1 }}>
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
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Create master agreement
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            backgroundColor: "inherit",
            width: "100%",
            overflow: "hidden",
            padding: 8,
          }}
        >
          <Paper sx={{ width: "100%", overflow: "hidden", padding: 1 }}>
            This is a form
          </Paper>
        </Box>
      </Dialog>
    </Box>
  );
};

export default MasterAgreement;
