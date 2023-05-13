import { useState } from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { Link } from "../Link";
import HomeIcon from "../Icons/HomeIcon";
import { Modal } from "../Modal/Modal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <HomeIcon /> RECEIPT
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/receipt/create">Add Receipt</Link>
          </Button>
          {isLogin ? (
            <Button color="inherit" onClick={() => setIsLogin(false)}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => setModalIsOpen(true)}>
                Login
              </Button>
              <Modal
                modalIsOpen={modalIsOpen}
                onConfirmHandler={() => {
                  setIsLogin(true);
                  setModalIsOpen(false);
                }}
                onCloseHandler={() => setModalIsOpen(false)}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
