import { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Stack,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setIsOpen(open);
  };
  return (
    <AppBar
      sx={{ backgroundColor: "#fff", borderBottom: 1 }}
      position="static"
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isMobile && (
          <>
            <IconButton onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <div className="relative w-72 p-2">
                <IconButton
                  sx={{ position: "absolute", right: 0, top: "3px" }}
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="div" align="center">
                  BuyBit
                </Typography>
              </div>
            </Drawer>
          </>
        )}
        <Typography variant="h6" component="div" color="primary">
          BuyBit
        </Typography>
        {isMobile ? (
          <>
            <IconButton>
              <ShoppingCartRoundedIcon color="primary" height={25} width={25} />
            </IconButton>
          </>
        ) : (
          <>
            <Search />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" size="small">
                Login
              </Button>
              <Button variant="outlined" color="primary" size="small">
                Sign up
              </Button>
              <IconButton>
                <ShoppingCartRoundedIcon
                  color="primary"
                  height={25}
                  width={25}
                />
              </IconButton>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
