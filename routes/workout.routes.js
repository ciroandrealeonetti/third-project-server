const express = require("express");
const router = express.Router();

const Workout = require("../models/Workout.model");
const User = require("../models/User.model");

router.get("/workouts", async (req, res, next) => {
  try {
    res.status(200).json(allExcercises.data);
  } catch (error) {
    next(error);
  }
});

router.post("/workouts/create", async (req, res, next) => {
  try {
    const { title, goal } = req.body;
    const createdWorkout = await Workout.create({title, goal});
    res.status(200).json(createdWorkout);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
