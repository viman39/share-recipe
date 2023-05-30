import { useState } from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { Link } from "../Link";
import HomeIcon from "../Icons/HomeIcon";
import ModalLogin from "./ModalLogin";
import useAuth from "../../utils/hooks/useAuth";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <HomeIcon /> RECEIPT
            </Link>
          </Typography>
          {user !== null ? (
            <>
              <Button color="inherit">
                <Link to="/receipt/create">Add Receipt</Link>
              </Button>
              <Button color="inherit" onClick={() => logout()}>
                {`Logout ${user.email}`}
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => setModalIsOpen(true)}>
                Login
              </Button>
              <ModalLogin
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
