import { Button, Card, Typography } from "@mui/material";
import React from "react";
import CustomIcon from "./CustomIcon";

const CustomCard = ({
  imageLink,
  heading = "",
  subheading = "",
  content = "",
}) => {
  return (
    <>
      <Card>
        <div className="card-container">
          <div className="card-image">
            <img src={imageLink} />
          </div>

          <div className="heading-container">
            <div className="heading">
              <Typography variant="h6" sx={{ ml: 1 }}>
                {heading}
              </Typography>
              <Typography variant="subheading" sx={{ ml: 1 }}>
                {subheading}
              </Typography>
            </div>

            <div class="slide">
              <div class="content">
                <p>{content}</p>
              </div>
              <Button endIcon={<CustomIcon icon="mdi:arrow-right" />}>
                Read more
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CustomCard;
