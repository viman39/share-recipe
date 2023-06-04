import { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link } from "../Link";
import ModalLogin from "./ModalLogin";
import useAuth from "../../utils/hooks/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <HomeIcon viewBox="0 -5 24 24" /> RECEIPT
            </Link>
          </Typography>
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List>
                  {user !== null ? (
                    <>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Link to="/receipt/create">Add Receipt</Link>
                          }
                        />
                      </ListItem>
                      <ListItem onClick={() => logout()}>
                        <ListItemText primary={`Logout ${user.email}`} />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem onClick={() => setModalIsOpen(true)}>
                        <ListItemText primary="Login" />
                      </ListItem>
                      <ModalLogin
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                      />
                    </>
                  )}
                </List>
              </Drawer>
            </>
          )}
          {!isMobile && (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
