const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "Mint Song"
    requiredMetrics: {
      totalStreams: { type: Number, default: 0 }, // Minimum streams required
      totalFollowers: { type: Number, default: 0 }, // Minimum followers required
      engagementScore: { type: Number, default: 0 } // Minimum engagement score required
    },
    unlockedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Users who unlocked this task
  }, { timestamps: true });
  
  const Task = mongoose.model('Task', taskSchema);
  

module.exports = Task;