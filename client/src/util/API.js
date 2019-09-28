import axios from "axios";

export default {
  // Gets all workouts
  getWorkout: function () {
    return axios.get("/api/weightlifting");
  },
  // Gets the workout with the given id
  getRun: function () {
    return axios.get("/api/Run");
  },
  // Deletes the workout with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/weightlifting/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function (WorkoutData) {
    return axios.post("/api/weightlifting", WorkoutData);
  },
  // Saves run to the DB
  saveRun: function (runData) {
    return axios.post("/api/run", runData)
  }
};
