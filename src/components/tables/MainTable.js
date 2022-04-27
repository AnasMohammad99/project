import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Modal, Typography } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 2,
};

const MainTable = ({ rows }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: "90vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">الإسم</TableCell>
            <TableCell align="right">رقم الهاتف 1</TableCell>
            <TableCell align="right">رقم الهاتف 2</TableCell>
            <TableCell align="right">الرقم القومي</TableCell>
            <TableCell align="right">ملاحظات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              <Modal
                align="right"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {row.name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {row.notice}
                  </Typography>
                </Box>
              </Modal>
              <TableRow
                onClick={handleOpen}
                sx={{ cursor: "pointer", ":hover": { boxShadow: "1" } }}
                key={row.name}
              >
                <TableCell align="right" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phoneNum1}</TableCell>
                <TableCell align="right">{row.phoneNum2}</TableCell>
                <TableCell align="right">{row.ID}</TableCell>
                <TableCell align="right">{row.notice}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
