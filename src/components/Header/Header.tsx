import { AppBar, Typography, Button, Toolbar, Link } from "@mui/material";
import HomeIcon from "../Icons/HomeIcon";

const Header = () => (
  <AppBar>
    <Toolbar>
      <Button color="inherit" sx={{ flexGrow: 0.1 }}>
        <HomeIcon />
        <Typography variant="h5" sx={{ flexGrow: 0.3 }}>
          RECIPES
        </Typography>
      </Button>
    </Toolbar>
    <Link underline="hover"></Link>
  </AppBar>
);

export default Header;
