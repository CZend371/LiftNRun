const router = require("express").Router();
const weightLiftController = require("../../controllers/weightLiftController");

router.route("/")
    .get(weightLiftController.findAll)
    .post(weightLiftController.create);

// router
//     .route("/run/:id")
//     .get(runningController.findById)
//     .put(runningController.update)
//     .delete(runningController.remove);

module.exports = router;