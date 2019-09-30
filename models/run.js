const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const runningSchema = new Schema({
    time: {type: String, required: true},
    distance: {type: String, required: false},
});

const Run = mongoose.model("Run", runningSchema);

module.exports = Run;

// track run: time, distance, 