const router = require("express").Router();
const runningController = require("../../controllers/runningController");

router.route("/")
    .get(runningController.findAll)
    .post(runningController.create);

// router
//     .route("/run/:id")
//     .get(runningController.findById)
//     .put(runningController.update)
//     .delete(runningController.remove);

module.exports = router;