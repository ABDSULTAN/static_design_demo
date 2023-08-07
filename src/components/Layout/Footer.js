import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import FooterLogo from "../../assets/logo white.png";
import CustomIcon from "../CustomIcon";

const CompanyList = [
  {
    headline: "Company",
    children: [
      "About us",
      "Industry Experience",
      "Capability Statements",
      "QES Policy Statements",
    ],
  },
];

const QuickLinks = [
  {
    headline: "Quick Links",
    children: ["Services", "Projects", "Partners", "News"],
  },
];

const GetTouchLinks = [
  {
    headline: "Get in Touch",
    children: [
      { name: "+61 424 670 940", icon: "ic:baseline-phone" },
      { name: "info@loremipsum.com.au", icon: "ic:baseline-email" },
      {
        name: "Office 261 South street Clevelend, Queensland, Australia",
        icon: "mdi:location",
      },
    ],
  },
];

const RootStyle = styled("footer")(({ theme }) => ({
  background: "#555555",
  color: "#ffffff",
  padding: 64,
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  padding: 0,
  maxWidth: "100%",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "100%",
    padding: 0,
  },
}));

const LinkStyle = styled("a")(({ theme }) => ({
  lineHeight: "1.5714285714285714",
  fontSize: "0.875rem",
  fontWeight: 400,
  color: "inherit",
  textDecoration: "none",
  display: "block",
}));

const LogoBoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "#ffffff",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const Footer = () => {
  return (
    <>
      <RootStyle>
        <ContainerStyle>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{ textAlign: "left" }}
            spacing={3}
          >
            <Grid item xs={12} md={6} lg={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <img src={FooterLogo} alt="footer-logo" />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Short Tagline We offer comprehensive intelligent solutions in a
                varietyof areas in both continuous and
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={2}>
              <Stack
                spacing={5}
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
              >
                {CompanyList.map((list) => (
                  <Stack key={list.headline} spacing={2}>
                    <Typography component="p" sx={{ fontWeight: 700 }}>
                      {list.headline}
                    </Typography>
                    {list.children.map((link) => (
                      <LinkStyle key={link} color="inherit" variant="body2">
                        {link}
                      </LinkStyle>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} lg={2}>
              {QuickLinks.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" sx={{ fontWeight: 700 }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <LinkStyle key={link} color="inherit" variant="body2">
                      {link}
                    </LinkStyle>
                  ))}
                </Stack>
              ))}
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              {GetTouchLinks.map((list) => (
                <Box key={list.headline} spacing={2}>
                  <Typography component="p" sx={{ fontWeight: 700 }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Box sx={{ display: "flex" }}>
                      <LinkStyle
                        key={link.name}
                        color="inherit"
                        variant="body2"
                      >
                        <CustomIcon
                          icon={link.icon}
                          sx={{ mr: 1 }}
                          width={20}
                          height={20}
                        />
                      </LinkStyle>

                      <Typography>{link.name}</Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} md={6} lg={2}>
              <Button
                variant="contained"
                sx={{ boxShadow: "none", borderRadius: 0, p: 1.5, mb: 2 }}
              >
                Contact us
              </Button>
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
        </ContainerStyle>
      </RootStyle>
      <Typography
        component="p"
        variant="body2"
        sx={{
          py: 1,
          color: "#b2b2b2",
          textAlign: { xs: "center" },
          background: "#3d3d3d",
        }}
      >
        Copyright ® 2021. lorem Ipsum. All right reserved
      </Typography>
    </>
  );
};

export default Footer;
