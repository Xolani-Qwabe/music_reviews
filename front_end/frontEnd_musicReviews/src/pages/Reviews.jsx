import React, { useState } from "react";
import Review from "./Review"; // Ensure correct path
import "../App.css";
import { reviewData } from "../mockedData/reviews";
import {
  emphasize,
  styled,
  Breadcrumbs,
  Chip,
  Typography,
  Divider
} from "@mui/material";
import { Home } from "@mui/icons-material";

const genres = {
  "Traditional Genres": [
    { id: 1, name: "Afrobeat" },
    { id: 2, name: "Maskandi" },
    { id: 5, name: "Isicathamiya" },
  ],
  "Contemporary Genres": [
    { id: 8, name: "Afro-Pop" },
    { id: 9, name: "Kwaito" },
    { id: 10, name: "House Music" },
    { id: 11, name: "Hip-Hop/Rap" },
    { id: 12, name: "Gqom" },
    { id: 13, name: "Amapiano" },
    { id: 14, name: "Bacardi" },
  ],
  "Fusion Genres": [
    { id: 15, name: "Afro-Jazz" },
    { id: 16, name: "Afro-Rock" },
    { id: 17, name: "Kwela-Jazz" },
    { id: 18, name: "Mbaqanga-Jazz" },
  ],
  "Other Notable Genres": [
    { id: 19, name: "Boeremusiek" },
    { id: 20, name: "Vocal Jazz" },
    { id: 21, name: "Trending" },
  ],
};

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};


function Reviews() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filteredReviews, setFilteredReviews] = useState(reviewData);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setFilteredReviews(reviewData);
    } else {
      setFilteredReviews(reviewData.filter((review) => review.genre === genre));
    }
  };

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[900];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: "white",
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
      marginBottom: theme.spacing(1),
    };
  });

  return (
    <div className="reviews">
      <div className="reviews-nav">
        <Breadcrumbs sx={{mt:0}} aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="#"
            label="All Genres"
            icon={<Home fontSize="small" color="white" />}
            onClick={() => handleGenreChange("All")}
          />
       
          {Object.values(genres).flat().map((genre) => (
            <StyledBreadcrumb
              key={genre.id}
              component="a"
              href="#"
              label={genre.name}
              onClick={() => handleGenreChange(genre.name)}
            />
          ))}
        </Breadcrumbs>
        <Divider sx={{mt:2,border:"1px black solid", width:"100"}}/>
      </div>

      <div className="review-container">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <Review key={review.id} reviewData={review} />
          ))
        ) : (
          <Typography color="white" variant="body1" sx={{ textAlign: "center" }}>
            No reviews available for the selected genre.
          </Typography>
        )}
      </div>
    </div>
  );
}

export default Reviews;
