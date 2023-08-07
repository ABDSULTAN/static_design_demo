import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import HeaderLogo from "../../assets/logo.png";
import CustomIcon from "../CustomIcon";

const CustomHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 7),
  background: "#3d3d3d",
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  background: "#ffffff",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1, 5),
  },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 0,
  p: 0,
  [theme.breakpoints.up("sm")]: {
    minHeight: 0,
    p: 0,
  },
}));

const LogoBoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "#ffffff",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  const navItems = ["About Us", "Services"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <CustomToolbar>
        <img src={HeaderLogo} height={45} />
      </CustomToolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <Button
              variant="contained"
              sx={{ boxShadow: "none", borderRadius: 0, p: 1.5 }}
            >
              Contact us
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CustomHeader>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{ p: 1 }}
        >
          <Grid item sx={12} sm={4} md={4} lg={3}>
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              <CustomIcon
                icon="ic:baseline-phone"
                sx={{ color: "#2e7d32", mr: 1 }}
                width={20}
                height={20}
              />
              <span style={{ fontWeight: "700", marginRight: 4 }}>Call Us</span>
              <span>+61 255 423 650</span>
            </Typography>
          </Grid>
          <Grid item sx={12} sm={5} md={4} lg={3}>
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              <CustomIcon
                icon="ic:baseline-email"
                sx={{ color: "#2e7d32", mr: 1 }}
                width={20}
                height={20}
              />
              <span style={{ fontWeight: "700", marginRight: 4 }}>
                Email US
              </span>
              <span>info@hr.pavan.com</span>
            </Typography>
          </Grid>
          <Grid item sx={12} sm={3} md={4} lg={6}>
            <LogoBoxStyle>
              <CustomIcon
                icon="ri:facebook-fill"
                sx={{ color: "#ffffff", mr: 1.5 }}
              />
              <CustomIcon
                icon="mdi:twitter"
                sx={{ color: "#ffffff", mr: 1.5 }}
              />
              <CustomIcon
                icon="akar-icons:linkedin-fill"
                sx={{ color: "#ffffff", mr: 1.5 }}
              />
              <CustomIcon
                icon="mdi:youtube"
                sx={{ color: "#ffffff", mr: 1.5 }}
              />
            </LogoBoxStyle>
          </Grid>
        </Grid>
      </CustomHeader>
      <CustomAppBar position="sticky" component="nav">
        <CustomToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <CustomIcon
              icon="material-symbols:menu"
              sx={{ color: "#2e7d32", mr: 1 }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src={HeaderLogo} height={45} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#444444" }}>
                {item}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              borderRadius: 0,
              p: 1.5,
              display: { xs: "none", sm: "block" },
            }}
          >
            Contact us
          </Button>
        </CustomToolbar>
      </CustomAppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
