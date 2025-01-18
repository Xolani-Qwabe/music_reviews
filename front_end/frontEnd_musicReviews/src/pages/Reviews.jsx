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
  Divider,
  Menu,
  MenuItem,
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
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function Reviews() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [filteredReviews, setFilteredReviews] = useState(reviewData);
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All Genres") {
      setFilteredReviews(reviewData); // Show all reviews if "All Genres" is selected
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

  const allGenres = [{ id: 0, name: "All Genres" }, ...Object.values(genres).flat()];

  const visibleItems = isExpanded || allGenres.length <= 4
    ? allGenres
    : [allGenres[0], "...", allGenres[allGenres.length - 1]];

  const handleExpandClick = (event) => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="reviews">
      <div className="reviews-nav">
        <Breadcrumbs sx={{ mt: 0 }} aria-label="breadcrumb">
          {visibleItems.map((genre, index) => {
            // Handle the collapsed "..." as a dropdown
            if (genre === "...") {
              return (
                <StyledBreadcrumb
                  key={index}
                  component="span"
                  label="..."
                  onClick={handleMenuClick}
                />
              );
            }

            const isLast = index === visibleItems.length - 1;
            return (
              <StyledBreadcrumb
                key={genre.id}
                component="a"
                href="#"
                label={genre.name}
                onClick={() => handleGenreChange(genre.name)}
                sx={{ color: 'white'}}
              />
            );
          })}
        </Breadcrumbs>

        {/* Dropdown Menu for Collapsed Genres */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {allGenres.slice(1, allGenres.length - 1).map((genre) => (
            <MenuItem
              key={genre.id}
              onClick={() => {
                handleGenreChange(genre.name);
                handleMenuClose();
              }}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Menu>

        <Divider
          sx={{ mt: 2, border: "1px black solid", width: "100%" }}
        />
      </div>

      <div className="review-container">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <Review key={review.id} reviewData={review} />
          ))
        ) : (
          <Typography
            color="white"
            variant="body1"
            sx={{ textAlign: "center" }}
          >
            No reviews available for the selected genre.
          </Typography>
        )}
      </div>
    </div>
  );
}

export default Reviews;
