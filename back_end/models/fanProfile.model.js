const mongoose = require('mongoose');

const fanProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    engagementScore: { type: Number, default: 0 }, // Calculated engagement level
    completedTasks: [{
      task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
      completedAt: { type: Date }
    }], // Tasks completed
    potentialReach: { type: Number, default: 0 }, // Number of fans they can reach
  }, { timestamps: true });
  
  const FanProfile = mongoose.model('FanProfile', fanProfileSchema);
  

 module.exports = FanProfile; 