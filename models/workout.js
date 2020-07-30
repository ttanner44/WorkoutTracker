const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [{
    name: {
      type: String,
      trim: true,
      required: "Enter excercise name",
    },

    duration: {
      type: Number,
      required: "Enter duration",
    },
    
    weight: {
      type: Number,
    },
      
    reps: {
      type: Number,
    },
        
    sets: {
      type: Number,
    },
      
    distance: {
      type: Number,
    }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;