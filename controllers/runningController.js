const db = require("../models/run");

// Defining methods for the runningController
module.exports = {
    findAll: function(req, res) {
      db
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log("run controller hit");
      console.log(req.body);
      // fix timer format in database
      var run= {
        "time": req.body.timer || -1,
        "distance": req.body.distance || -1
      };
      db
        .create(run)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };