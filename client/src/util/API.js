import axios from "axios";

export default {
  // Gets all workouts
  getWorkout: function () {
    return axios.get("/api/Workout");
  },
  // Gets the workout with the given id
  getWorkout: function (id) {
    return axios.get("/api/Workout/" + id);
  },
  // Deletes the workout with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/Workout/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function (WorkoutData) {
    return axios.post("/api/Workout", WorkoutData);
  },
  // Saves run to the DB
  saveRun: function (runData) {
    return axios.post("/api/run", runData)
  }
};
