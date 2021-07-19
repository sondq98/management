import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledButton from "../../../components/Button";

function Role() {
  const route = useHistory();
  return (
    <>
      <Container>
        <TableContainer className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">
                  <label>Role</label>
                </TableCell>
                <TableCell sx={{ width: "75%" }} className="table-cell">
                  <label>Detail</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Action</label>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>PM</TableCell>
                <TableCell>Nguyen Van A</TableCell>
                <TableCell>
                  <StyledButton color="info" variant="contained">
                    Detail
                  </StyledButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="wrapper-button ">
          <div className="wrapper-button__div button-2">
            <StyledButton color="success" variant="contained">
              Register
            </StyledButton>
            <StyledButton
              onClick={() => {
                route.goBack();
              }}
              color="inherit"
              variant="contained"
            >
              Back
            </StyledButton>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Role;
