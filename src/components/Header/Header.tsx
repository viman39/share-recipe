import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { Link } from "../Link";
import HomeIcon from "../Icons/HomeIcon";

const Header = () => (
  <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">RECEIPT</Link>
      </Typography>
      <Button color="inherit">
        <Link to="/receipt/create">Add Receipt</Link>
      </Button>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
