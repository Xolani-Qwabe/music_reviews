const mongoose = require('mongoose');

const creatorProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    streams: { type: Number, default: 0 }, // Total streams across platforms
    followers: { type: Number, default: 0 }, // Total followers
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }], // Earned badges
    verifiedTracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }], // Verified tracks uploaded by the creator
    rookieBadgeEligibility: { type: Boolean, default: false }, // Eligibility to mint songs
  }, { timestamps: true });
  
  const CreatorProfile = mongoose.model('CreatorProfile', creatorProfileSchema);
  
  module.exports = CreatorProfile;