import React, { useState } from "react";
import Review from "./Review"; // Ensure correct path
import "../App.css";

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
    { id: 21, name: "Cape Jazz" },
  ],
};

const reviewData = [
  {
    id: 1,
    artistName: "DJ Fela",
    artistBio: "A rising Amapiano star known for her infectious grooves and energetic live shows.",
    songName: "Umshini Wami (My Fire)",
    songReview: "This Amapiano banger is guaranteed to get you moving! The driving beat and catchy melody will leave you wanting more. The exclusive behind-the-scenes content NFT offers a glimpse into DJ Fela's creative process.",
    rating: 4.8,
    streamingStats: {
      platformEngagement: { Spotify: 75000, AppleMusic: 35000, YouTubeMusic: 125000 },
      artistStreamingStats: { monthlyListeners: 600000, totalStreams: 30000000 },
      songStreamingStats: { streams: 400000, downloads: 20000 },
    },
    revenuePotential: { estimatedRevenue: 85000, suggestedPromoStrategy: "Collaborate with popular Amapiano DJs and influencers. Utilize social media and targeted ads to reach Amapiano fans.", estimatedBudget: 45000 },
    nftData: { suggestedNfts: 500, nftPrice: 0.075, zarPrice: 37.50 },
    songSnippet: "https://example.com/umshini-wami-snippet.mp3",
    shareMenu: [
      { icon: "facebook", label: "Share on Facebook" },
      { icon: "twitter", label: "Share on Twitter" },
      { icon: "instagram", label: "Share on Instagram" },
    ],
    "nft 特典 (tokuten)": {
      behindTheScenes: "Exclusive behind-the-scenes content, including studio footage and interviews with DJ Fela.",
      contentPreview: "https://cdn.pixabay.com/photo/2017/08/06/18/14/graffiti-2591696_1280.jpg", // Graffiti for a "behind the scenes" feel
    },
  },
  {
    id: 2,
    artistName: "Black Coffee Jr.",
    artistBio: "A young Gqom producer pushing the boundaries of the genre with dark basslines and innovative sounds.",
    songName: "Into the Lab",
    songReview: "This Gqom track is intense and experimental. It's a deep dive into Black Coffee Jr.'s unique sound. The limited-edition artwork NFT is a collector's item for true Gqom enthusiasts.",
    rating: 4.7,
    streamingStats: {
      platformEngagement: { Spotify: 40000, AppleMusic: 20000, YouTubeMusic: 60000 },
      artistStreamingStats: { monthlyListeners: 250000, totalStreams: 12500000 },
      songStreamingStats: { streams: 200000, downloads: 10000 },
    },
    revenuePotential: { estimatedRevenue: 55000, suggestedPromoStrategy: "Target online Gqom communities and showcase the limited-edition artwork NFT.", estimatedBudget: 30000 },
    nftData: { suggestedNfts: 100, nftPrice: 0.25, zarPrice: 125.00 },
    songSnippet: "https://example.com/into-the-lab-snippet.mp3",
    shareMenu: [
      { icon: "facebook", label: "Share on Facebook" },
      { icon: "twitter", label: "Share on Twitter" },
      { icon: "instagram", label: "Share on Instagram" },
    ],
    "nft 特典 (tokuten)": {
      limitedEditionArtwork: "A unique piece of digital artwork by a renowned South African artist, inspired by 'Into the Lab'.",
      artworkPreview: "https://cdn.pixabay.com/photo/2016/11/29/01/10/abstract-1866978_1280.jpg", // Abstract art
    },
  },
  {
    id: 3,
    artistName: "The Bushveld Crooners",
    artistBio: "An Afrikaans folk band known for their storytelling lyrics and soulful melodies.",
    songName: "Karoo Sunset",
    songReview: "This beautiful folk song paints a vivid picture of the Karoo landscape. The NFT offers a chance to own a piece of South African musical heritage.",
    rating: 4.6,
    streamingStats: {
      platformEngagement: { Spotify: 30000, AppleMusic: 15000, YouTubeMusic: 45000 },
      artistStreamingStats: { monthlyListeners: 200000, totalStreams: 10000000 },
      songStreamingStats: { streams: 150000, downloads: 7500 },
    },
    revenuePotential: { estimatedRevenue: 40000, suggestedPromoStrategy: "Target Afrikaans music lovers and promote the cultural significance of the NFT.", estimatedBudget: 25000 },
    nftData: { suggestedNfts: 200, nftPrice: 0.15, zarPrice: 75.00 },
    songSnippet: "https://example.com/karoo-sunset-snippet.mp3",
    shareMenu: [
      { icon: "facebook", label: "Share on Facebook" },
      { icon: "twitter", label: "Share on Twitter" },
      { icon: "instagram", label: "Share on Instagram" },
    ],
    "nft 特典 (tokuten)": {
      digitalLandscapePainting: "A digital painting of a Karoo sunset, created exclusively for this NFT release.",
      paintingPreview: "https://cdn.pixabay.com/photo/2017/02/01/17/20/landscape-2029965_1280.jpg", // Landscape image
    },
  },
  {
    id: 4,
    artistName: "Mzansi Beats",
    artistBio: "A South African house music collective known for their upbeat rhythms and dancefloor anthems.",
    songName: "Township Groove",
    songReview: "This house track is pure energy! It's guaranteed to get any party started. The NFT grants access to an exclusive online listening party with the artists.",
    rating: 4.5,
    streamingStats: {
      platformEngagement: { Spotify: 50000, AppleMusic: 25000, YouTubeMusic: 75000 },
      artistStreamingStats: { monthlyListeners: 350000, totalStreams: 17500000 },
      songStreamingStats: { streams: 250000, downloads: 12500 },
    },
    revenuePotential: { estimatedRevenue: 60000, suggestedPromoStrategy: "Promote the exclusive online listening party to attract house music fans and NFT collectors.", estimatedBudget: 35000 },
    nftData: { suggestedNfts: 300, nftPrice: 0.10, zarPrice: 50.00 },
    songSnippet: "https://example.com/township-groove-snippet.mp3",
    shareMenu: [
      { icon: "facebook", label: "Share on Facebook" },
      { icon: "twitter", label: "Share on Twitter" },
      { icon: "instagram", label: "Share on Instagram" },
    ],
    "nft 特典 (tokuten)": {
      exclusiveListeningParty: "Access to an exclusive online listening party with Mzansi Beats, featuring a live Q&A session.",
      partyImage: "https://cdn.pixabay.com/photo/2016/11/22/19/07/dance-1851945_1280.jpg", // Party scene
    },
  },
];

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

  return (
    <div className="reviews">
      <div className="reviews-nav">
        <p className="reviews-title">Reviews</p>
        <div className="cluster">
          <button className="button button--small" onClick={() => handleGenreChange("All")}>
            All Genres
          </button>
          {Object.values(genres).flat().map((genre) => (
            <button
              key={genre.id}
              className="button button--small"
              onClick={() => handleGenreChange(genre.name)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      {/* Scrollable Review Container */}
      <div className="review-container">
        {filteredReviews.map((review) => (
          <Review key={review.id} reviewData={review} />
        ))}
      </div>
    </div>
  );
  
}
export default Reviews;
