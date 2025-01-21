import React from "react";
import "./Review.css";
import { Link } from "react-router-dom";
import { Box , Avatar,IconButton,Button} from "@mui/material";
import avatar from '../assets/attractive.jpg'
import { OpenInFullRounded } from "@mui/icons-material";

function Review({ reviewData }) {
  const contentStyle = {padding:'2rem', display:'flex', height:'33.3%', alignItems:'center', gap:'.4rem' }
  return (
    <Box className='review-card'
      sx={{
        width: "30vw",
        height: "70vh",
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
          background: "transparent", // Semi-transparent background
          // backdropFilter: "blur(10px)", // Glassmorphism effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
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
          height: "55%",

          background: "rgba(0, 0, 0, 0.4)", // Neutral semi-transparent black
          backdropFilter: "blur(20px)", // Glassmorphism blur effect
          WebkitBackdropFilter: "blur(12px)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
  
 
          position: "absolute",
          bottom: 0,
          pointerEvents: "auto" 
        }}
      >
        <div className="card-content-1" style={{padding:'2rem', display:'flex', height:'33.3%', alignItems:'center', gap:'.4rem'}}>
          <p className="song">Song :</p>
          <p style={{
            fontSize:'2rem',
            fontWeight:'500'
          }}>{reviewData.songName}</p>
        </div>

        <div className="card-content-2" style={contentStyle}>
          <div style={{display:'flex',gap:'.4rem',height:'100%', width:'70%',}}>
          <Avatar src={avatar}/>
          <p className="artist">Artist : <span className="name" style={{
            fontSize:'1.2rem',
            fontWeight:'800'
          }}>{reviewData.artistName}</span></p>
          </div>
         <div style={{ display:'flex',gap:'.4rem',justifyContent:'center', alignItems:'center',height:'333%', width:'20%' }}>
         
        <Link to={'/review/:1d'}>
          <IconButton
            style={{
              color:'white'
            }}>
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
        <div className="card-content-3"></div>
      </Box>
    </Box>
  );
}

export default Review;
