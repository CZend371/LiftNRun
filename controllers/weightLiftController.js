const db = require("../models/weightlifting");

// Defining methods for the weightLiftController
module.exports = {
  findAll: function (req, res) {
    console.log("weight get request");
    db
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("weight controller hit");
    console.log(req.body);
    var weightLifting = {
      "sets": req.body.sets || -1,
      "reps": req.body.reps || -1,
      "weight": req.body.weight || -1,
      "restTime": req.body.time || -1
    };
    db
      .create(weightLifting)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};