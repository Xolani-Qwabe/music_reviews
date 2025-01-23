import React, { useState, useRef } from "react";
import "./Review.css";
import { Link } from "react-router-dom";
import { Box, Avatar, IconButton } from "@mui/material";
import avatar from "../assets/attractive.jpg";
import { OpenInFullRounded } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

function Review({ reviewData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      // audioRef.current.currentTime = 0; // Reset audio to the beginning
      setIsPlaying(false);
    }
  };

  const contentStyle = {
    padding: "2rem",
    display: "flex",
    height: "33.3%",
    alignItems: "center",
    gap: ".4rem",
  };

  return (
    <Box
      className="review-card"
      sx={{
        width: "25vw",
        height: "60vh",
        backgroundImage: `url(${reviewData.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        overflow: "none",
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Top Card */}
      <Box
        className="card-top"
        sx={{
          width: "100%",
          height: "50%",
          background: "transparent",
          WebkitBackdropFilter: "blur(10px)",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          top: 0,
        }}
      ></Box>

      {/* Bottom Card */}
      <Box
        className="card-bottom"
        sx={{
          width: "100%",
          height: "60%",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          position: "absolute",
          bottom: 0,
          pointerEvents: "auto",
        }}
      >
        <div className="card-content-1" style={contentStyle}>
          <p className="song">Song :</p>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            {reviewData.songName}
          </p>
        </div>

        <div className="card-content-2" style={contentStyle}>
          <div style={{ display: "flex", gap: ".4rem", height: "100%", width: "70%" }}>
            <Avatar src={avatar} />
            <p className="artist">
              Artist :{" "}
              <span
                className="name"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "800",
                }}
              >
                {reviewData.artistName}
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: ".4rem",
              justifyContent: "center",
              alignItems: "center",
              height: "333%",
              width: "20%",
            }}
          >
            <Link to={"/review/:1d"}>
              <IconButton
                style={{
                  color: "rgb(157, 241, 232)",
                }}
              >
                <OpenInFullRounded
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.4)",
                    },
                  }}
                />
              </IconButton>
            </Link>
          </div>
        </div>

        {/* Audio Controls */}
        <div style={{position:"absolute", display: "flex", alignItems: "center", justifyContent: "center",top:'-3vh' ,left:'35%'} }>
          <IconButton
          
            onClick={handlePlay}
            disabled={isPlaying}
            style={{ color: isPlaying ? "gray" : "rgb(157, 241, 232)" }}
          >
            <FontAwesomeIcon style={{width:'5vw', height:'5vh', }} icon={faPlay} />
          </IconButton>
          <IconButton
            onClick={handleStop}
            disabled={!isPlaying}
            style={{color: isPlaying ? "rgb(157, 241, 232)" : "gray" }}
          >
          <FontAwesomeIcon style={{width:'5vw', height:'5vh', }}  icon={faPause} />
          </IconButton>
          <audio ref={audioRef} src={reviewData.songSnippet} />
        </div>

        <div className="card-content-3">
          {/* <div className="monthly-listeners">Monthly Listeners</div> */}
          <div className="spotify stat">
            <IconButton>
            <FontAwesomeIcon className="fa-icon" icon={faSpotify} />
            </IconButton>
            <p className="sptify-stats">{reviewData.streamingStats.platformEngagement.Spotify / 1000}K</p>
          </div>
          <div className="apple stat">
            <IconButton>
                <FontAwesomeIcon className="fa-icon" icon={faApple} />
            </IconButton>
            <p className="apple-stats">{reviewData.streamingStats.platformEngagement.AppleMusic / 1000}K</p>
          </div>
          <div className="youtube stat">
              <IconButton>
                <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
              </IconButton>
              <p className="youtube-stats">{reviewData.streamingStats.platformEngagement.YouTubeMusic / 1000}K</p>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Review;
