const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  artist: { type: String, required: [true, 'Artist is required'] },
  album: { type: String, required: [true, 'Album is required'] },
  review: { type: String, required: [true, 'Review is required'] },
  rating: { type: Number, required: [true, 'Rating is required'] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'User is required'] },
  date: { type: Date, default: Date.now },
  
  // Upvotes and downvotes
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },

  // Comments by other users
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String },
      date: { type: Date, default: Date.now }
    }
  ],

  // Tracks interactions with the music snippet
  snippetStreams: { type: Number, default: 0 },  // Number of times the music snippet is streamed
  
  // Tracking the song's popularity on streaming platforms
  shares: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  
  // Total monthly listeners for the creator
  totalMonthlyListeners: { type: Number, default: 0 },

  // Optional: Music snippet link or file
  snippetUrl: { type: String }  // URL to the music snippet file
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
