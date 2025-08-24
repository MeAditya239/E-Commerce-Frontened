import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>raam</p>
              <p>April 5, 2023</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" />
          <p>
            Nice product, ilove this
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
