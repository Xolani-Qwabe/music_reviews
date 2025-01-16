import React from "react";
import "../App.css";

function Review({reviewData}) {
 

  return (
    <div className="review-card">
      <div className="review-card-header">
        <h2>{reviewData.artistName}</h2>
        <p>{reviewData.artistBio}</p>
      </div>
      <div className="review-card-content">
        <h3>{reviewData.songName}</h3>
        <p>{reviewData.songReview}</p>
        <div className="review-card-stats">
          <p>Rating: {reviewData.rating}/5</p>
          <p>
            Streams:{" "}
            {reviewData.streamingStats.songStreamingStats.streams}
          </p>
          <p>
            Downloads:{" "}
            {reviewData.streamingStats.songStreamingStats.downloads}
          </p>
        </div>
      </div>
      <div className="review-card-footer">
        <div className="revenue-potential">
          <p>Estimated Revenue: ${reviewData.revenuePotential.estimatedRevenue}</p>
          <p>Suggested Promo Strategy: {reviewData.revenuePotential.suggestedPromoStrategy}</p>
          <p>Estimated Budget: ${reviewData.revenuePotential.estimatedBudget}</p>
        </div>
        <div className="nft-data">
          <p>Suggested NFTs: {reviewData.nftData.suggestedNfts}</p>
          <p>NFT Price: ${reviewData.nftData.nftPrice}</p>
        </div>
        <div className="song-snippet">
          <audio controls>
            <source src={reviewData.songSnippet} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="share-menu">
          {reviewData.shareMenu.map((item) => (
            <button key={item.icon}>
              <i className={`fa fa-${item.icon}`} /> {item.label}
            </button>
          ))}
        </div>
        <div className="rating-icons">
          <i className="fa fa-thumbs-up" /> <i className="fa fa-thumbs-down" />
        </div>
      </div>
    </div>
  );
}

export default Review;