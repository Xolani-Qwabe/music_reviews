const mongoose = require('mongoose');

const publisherProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    representedArtists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Artists they work with
    reputationScore: { type: Number, default: 0 }, // Calculated reputation
    reviews: [{
      reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String },
      rating: { type: Number, min: 1, max: 5 }
    }],
    averageRating: { type: Number, default: 0 } // Average rating from reviews
  }, { timestamps: true });
  
  const PublisherProfile = mongoose.model('PublisherProfile', publisherProfileSchema);

  module.exports = PublisherProfile;