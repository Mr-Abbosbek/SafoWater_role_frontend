import * as React from "react";
import { BrowserRouter, useHistory, NavLink, Link } from "react-router-dom";

import Navbar from "../RouteNavbar";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { removeUserSession } from "../../utils/Common";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import { adminLink, callCenterLink, deliverLink } from "./helper";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function RouterJs() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const LogOut = () => {
    history.push("/login");
    // window.location.href = '/login';
    removeUserSession();
  };

  const navLink = {
    admin: adminLink,
    callcenter: callCenterLink,
    deliver: deliverLink,
  };

  return (
    <BrowserRouter>
      <div className="App d-flex">
        <Box className="w-100 d-flex">
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            style={{ backgroundColor: "white" }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                style={{ marginRight: "40px", marginLeft: "-15px" }}
                className={open === true ? "d-none text-black" : "text-black"}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                <Link to={"/omborxona/maxkirimi"} className="h-25">
                  <img
                    src="./../images/logo_blue.svg"
                    className="img-fluid w-25"
                    alt="Logo"
                  />
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader className="d-flex justify-content-between py-1">
              <h2 className="py-3 m-0">Menu</h2>

              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List className="px-1 py-4">
              {navLink[localStorage.getItem("role")] &&
                navLink[localStorage.getItem("role")].map((text) => (
                  <NavLink
                    to={`${text.link}`}
                    activeClassName="active"
                    key={text.id}
                    className="d-flex align-items-center navLink_menu my-2"
                  >
                    <ListItemButton
                      title={`${text.title}`}
                      style={{ minHeight: "60px" }}
                      className={
                        open
                          ? "justify-content-initial px-2"
                          : "justify-content-center px-2"
                      }
                    >
                      <ListItemIcon
                        style={{
                          minHeight: 0,
                          justifyContent: "center",
                        }}
                        className={open ? "mr-3" : "auto"}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.title}
                        className={open ? "opacity-100" : "opacity-0"}
                      />
                    </ListItemButton>
                  </NavLink>
                ))}
            </List>
            <List>
              <NavLink
                to="/login"
                className="d-flex align-items-center navLink_menu my-2"
                onClick={LogOut}
              >
                <ListItemButton
                  title="Hisobdan chiqish"
                  style={{ minHeight: "60px" }}
                  className={
                    open
                      ? "justify-content-initial px-2"
                      : "justify-content-center px-2"
                  }
                >
                  <ListItemIcon
                    style={{
                      minHeight: 0,
                      justifyContent: "center",
                    }}
                    className={open ? "mr-3" : "auto"}
                  >
                    <IconButton>
                      {/* <Logout /> */}
                      <ArrowBack />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText
                    primary="Hisobdan chiqish"
                    className={open ? "opacity-100" : "opacity-0"}
                  />
                </ListItemButton>
              </NavLink>
            </List>
          </Drawer>
          <Box className="w-75 flex-grow-1 px-3 pt-4 pb-3">
            <DrawerHeader />
            <Navbar />
          </Box>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default RouterJs;
