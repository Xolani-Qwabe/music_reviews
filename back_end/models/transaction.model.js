const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { 
      type: String, 
      enum: ['Mint', 'Purchase', 'Penalty', 'Reward'], 
      required: true 
    }, // Transaction type
    amount: { type: Number, required: true }, // In AVAX
    zarAmount: { type: Number }, // Calculated in ZAR
    nftId: { type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }, // Optional: Linked NFT
    details: { type: String }, // Additional transaction details
  }, { timestamps: true });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;