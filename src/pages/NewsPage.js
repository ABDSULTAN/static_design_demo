import styled from "@emotion/styled";
import {
  Box,
  Button,
  Typography,
  TabContext,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import NewsBanner from "../assets/Mask-Group.png";
import NewsCardImage1 from "../assets/Mask-Group-1.png";
import NewsCardImage2 from "../assets/Mask-Group-2.png";
import NewsCardImage3 from "../assets/Mask-Group-3.png";
import NewsCardImage4 from "../assets/Mask-Group-4.png";
import CustomCard from "../components/CustomCard";

const BannerStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${NewsBanner})`,
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  height: "200px",
}));

const BannerTextStyle = styled(Typography)(() => ({
  height: "100%",
  width: "100%",
  backgroundColor: "rgb(46 125 50 / 50%);",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ContainerStyle = styled("div")(({ theme }) => ({
  padding: "64px",
}));

const MiningData = [
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsCardImage1,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsCardImage2,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsCardImage3,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsCardImage4,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsBanner,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
  {
    heading: "Talinga Pipeline Compression Facility, Queensland",
    subheading: "Mining",
    image: NewsCardImage1,
    content:
      "Project detail We have recently moved into new permises @261 south street,Clevelend, Queensland,Australia...",
  },
];

const NewsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BannerStyle>
        <BannerTextStyle variant="h3">News</BannerTextStyle>
      </BannerStyle>

      <ContainerStyle>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              fullWidth
              value={value}
              onChange={handleChange}
              aria-label="news-tabs"
              centered
            >
              <Tab
                label="Mining"
                value={0}
                sx={{ textTransform: "none", fontSize: "17px" }}
              />
              <Tab
                label="Oil & Gas"
                value={1}
                sx={{ textTransform: "none", fontSize: "17px" }}
              />
              <Tab
                label="Water & Waste Water"
                value={2}
                sx={{ textTransform: "none", fontSize: "17px" }}
              />
              <Tab
                label="Infrastructure"
                value={3}
                sx={{ textTransform: "none", fontSize: "17px" }}
              />
              <Tab
                label="Manufacturing"
                value={4}
                sx={{ textTransform: "none", fontSize: "17px" }}
              />
            </Tabs>
          </Box>

          {value === 0 && (
            <>
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {MiningData.map((data, index) => {
                  return (
                    <>
                      <Grid item md={6} lg={4}>
                        <CustomCard
                          heading={data.heading}
                          subheading={data.subheading}
                          imageLink={data.image}
                          content={data.content}
                        />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </>
          )}
        </Box>
      </ContainerStyle>
    </>
  );
};

export default NewsPage;
