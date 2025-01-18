import React from "react";
import "./Review.css";
import { Box, Card, CardContent, IconButton, Typography, Divider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

function Review({ reviewData }) {
  return (
    <div className="review-card">
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${reviewData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* White Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.15)", // White with 15% opacity
            zIndex: 1,
          }}
        />

        {/* Card Content */}
        <Box sx={{ position: "relative", zIndex: 2, padding: 2, flex: 1 }}>
          <CardContent sx={{ flex: 1 ,backgroundColor:' rgba(32, 32, 32, 0.495)'}}>
            <Typography component="div" variant="h6">
              {reviewData.songName}
            </Typography>
            <IconButton>
              <ArrowOutwardRoundedIcon sx={{ height: 30, width: 30, color: "white" }} />
            </IconButton>
            <Divider sx={{ borderBottom: "white solid 1px" }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                borderBottom: "white solid 2px",
                padding: 1,
                marginBottom: "8px",
              }}
            >
              {reviewData.artistName}
            </Typography>
            <Typography variant="body2">{reviewData.rating}</Typography>
          </CardContent>
          <Box>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton>
              <FavoriteRoundedIcon sx={{ height: 30, width: 30, color: "white" }} />
            </IconButton>
            <IconButton>
              <AddCommentRoundedIcon sx={{ height: 30, width: 30, color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default Review;
