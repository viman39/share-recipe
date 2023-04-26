import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "../Icons/HomeIcon";

const Header = () => (
  <AppBar color="transparent" position="sticky">
    <Toolbar>
      <Link to="/">
        <Button color="inherit">
          <HomeIcon />
          <Typography variant="h5">RECIPES</Typography>
        </Button>
      </Link>
      <Link to="receipt/create">Add Receipt</Link>
    </Toolbar>
  </AppBar>
);

export default Header;
