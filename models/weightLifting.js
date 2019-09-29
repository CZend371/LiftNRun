const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weightLiftSchema = new Schema({
    workoutType: { type: String, required: true },
    bodypart: { type: String, required: true },
    sets: { type: String, required: true },
    reps: { type: String, required: true },
    weight: { type: String, required: true },
    restTime: { type: String, required: true }
});

const Weight = mongoose.model("Weight", weightLiftSchema);

module.exports = Weight;

// sets, reps, weight, rest time; all user input