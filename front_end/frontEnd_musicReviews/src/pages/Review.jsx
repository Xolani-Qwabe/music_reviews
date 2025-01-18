import React from "react";
import "./Review.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { Divider } from "@mui/material";

function Review({ reviewData }) {
  const theme = useTheme();

  return (
    <div className="review-card">
      <Card sx={{ display: "flex", maxWidth:"100%", height:"100%",backgroundColor:'black', marginBottom:1}}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 auto" }}>
            <Typography component="div" variant="h6"
             sx={{ color: "white"}}
            >
              {reviewData.songName}
            </Typography>
            <IconButton>
            <ArrowOutwardRoundedIcon sx={{ height: 30, width: 30, color:'white' }}/>
            </IconButton>
            <Divider sx={{borderBottom:"whitesmoke solid 2px"}}/>
            <Typography
          
              variant="subtitle1"
              component="div"
              sx={{ color: "white", borderBottom:"whitesmoke solid 2px",padding:1, marginBottom: "8px" }}
            >
              {reviewData.artistName}
            </Typography>
            <Typography variant="body2" 
              sx={{ color: "white",borderBottom:"whitesmoke solid 2px",padding:1}}
            >{reviewData.rating}</Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38, color:'white' }} />
            </IconButton>
            <IconButton>
            <FavoriteRoundedIcon sx={{ height: 30, width: 30, color:'white' }}/>
            </IconButton>
            <IconButton>
              <AddCommentRoundedIcon sx={{ height: 30, width: 30, color:'white' }}/>
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, height:"100%" }}
          image={reviewData.image}
          alt={`${reviewData.songName} artwork`}
        />
      </Card>
    </div>
  );
}

export default Review;
