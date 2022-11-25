const express = require("express");
const router = express.Router();

const Workout = require("../models/Workout.model");
const User = require("../models/User.model");

//Create workout

router.post("/workouts/create", async (req, res, next) => {
  try {
    const { title, goal, userId } = req.body;

    const createdWorkout = await Workout.create({ title, goal });

    const updateUser = await User.findByIdAndUpdate(userId, { $push: { workouts: createdWorkout._id } })

    res.status(200).json(createdWorkout);
  } catch (error) {
    next(error);
  }
});

//Workout Edit

router.put("/workouts/:workoutId/:excerciseId", async (req, res, next) => {
  try {
    const { workoutId, excerciseId } = req.params;

    const updatedWorkout = await Workout.findByIdAndUpdate(
      workoutId,
      { $pull: { excercises: excerciseId } },
      { new: true }
    );
    res.status(200).json(updatedWorkout);
  } catch (error) {
    next(error);
  }
});

//Workout Delete

router.delete("/workouts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedWorkout = await Workout.findByIdAndRemove(id);
    res.status(200).json(deletedWorkout);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
