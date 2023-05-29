import { useState } from "react";
import { Button } from "@mui/material";
import useAuth from "../../utils/hooks/useAuth";
import { Modal } from "../Modal/Modal";
import { TextField, Grid, Divider } from "@mui/material";

interface ModalLoginProps {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal
      modalIsOpen={modalIsOpen}
      onCloseHandler={() => setModalIsOpen(false)}
    >
      <Grid container rowSpacing={1} direction="column" alignContent="center">
        <Grid item>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item justifyContent="center" display="center" marginTop="1em">
          <Button
            color="inherit"
            onClick={() => {
              signup(email, password);
              setModalIsOpen(false);
              setEmail("");
              setPassword("");
            }}
          >
            Signup
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              login(email, password);
              setModalIsOpen(false);
              setEmail("");
              setPassword("");
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalLogin;
