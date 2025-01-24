 const mongoose = require('mongoose');
const investorProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    avaxHoldings: { type: Number, default: 0 }, // Total AVAX holdings
    investmentHistory: [{
      project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now }
    }],
    totalInvestments: { type: Number, default: 0 }, // Total amount invested
    reputationScore: { type: Number, default: 0 } // Calculated from history
  }, { timestamps: true });
  
  const InvestorProfile = mongoose.model('InvestorProfile', investorProfileSchema);

  module.exports = InvestorProfile;