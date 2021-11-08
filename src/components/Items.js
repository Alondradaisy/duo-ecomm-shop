import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Items = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box display="flex">
        <CardMedia
          component="img"
          alt="MacBook Pro"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
      </Box>

      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MacBook Pro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Shop the new M1 MacBook Pro
          </Typography>
        </CardContent>
      </Box>

      <Box>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small">Learn More</Button>
          <Button size="small">Price Here</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Items;
