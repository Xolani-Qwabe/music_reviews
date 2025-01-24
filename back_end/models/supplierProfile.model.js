const supplierProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    portfolio: [{
      title: { type: String },
      description: { type: String },
      completedAt: { type: Date }
    }], // List of completed works
    reviews: [{
      reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String },
      rating: { type: Number, min: 1, max: 5 }
    }],
    averageRating: { type: Number, default: 0 } // Average review score
  }, { timestamps: true });
  
  const SupplierProfile = mongoose.model('SupplierProfile', supplierProfileSchema);
  