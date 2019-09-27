import axios from "axios";

export default {
  // Gets all books
  getWorkout: function () {
    return axios.get("/api/Workout");
  },
  // Gets the book with the given id
  getWorkout: function (id) {
    return axios.get("/api/Workout/" + id);
  },
  // Deletes the book with the given id
  deleteWorkout: function (id) {
    return axios.delete("/api/Workout/" + id);
  },
  // Saves a book to the database
  saveWorkout: function (WorkoutData) {
    return axios.post("/api/Workout", WorkoutData);
  }
};
