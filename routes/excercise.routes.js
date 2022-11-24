const express = require("express");
const router = express.Router();
const axios = require("axios");

const Excercise = require("../models/Excercise.model");
const Workout = require("../models/Workout.model");
const User = require("../models/User.model");

//Get All Excercise List
router.get("/excercises", async (req, res, next) => {
  try {
    const allExcercises = await axios.get(
      "https://api.api-ninjas.com/v1/exercises",
      {
        headers: {
          "X-Api-Key": "nppLd3RgjDg6Np3jc4MjFg==vVKh2BUm0kGmCtVG",
        },
      }
    );
    res.status(200).json(allExcercises.data);
  } catch (error) {
    next(error);
  }
});

//Get Muscle Group Excercise List
router.get("/excercises/muscle/:muscleGroup", async (req, res, next) => {
  try {
    const { muscleGroup } = req.params;

    const excercises = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
      {
        headers: {
          "X-Api-Key": "nppLd3RgjDg6Np3jc4MjFg==vVKh2BUm0kGmCtVG",
        },
      }
    );
    res.status(200).json(excercises.data);
  } catch (error) {
    next(error);
  }
});

//Get Excercise Details
router.get("/excercises/details/:excerciseName", async (req, res, next) => {
  try {
    const { excerciseName } = req.params;

    const excercises = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${excerciseName}`,
      {
        headers: {
          "X-Api-Key": "nppLd3RgjDg6Np3jc4MjFg==vVKh2BUm0kGmCtVG",
        },
      }
    );
    res.status(200).json(excercises.data[0]);
  } catch (error) {
    next(error);
  }
});

//Add Excercise to Workout
router.post("/excercises/details/:excerciseName", async (req, res, next) => {
  try {
    const { excerciseName } = req.params;
    const excercises = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${excerciseName}`,
      {
        headers: {
          "X-Api-Key": "nppLd3RgjDg6Np3jc4MjFg==vVKh2BUm0kGmCtVG",
        },
      }
    );

    const { workoutId } = req.body;
    const createExcercise = await Excercise.create({
      name: excercises.data[0].name,
      type: excercises.data[0].type,
      muscle: excercises.data[0].muscle,
      equipment: excercises.data[0].equipment,
      difficulty: excercises.data[0].difficulty,
      instructions: excercises.data[0].instructions,
    });

    const updateWorkout = await Workout.findByIdAndUpdate(workoutId, {
      $push: { excercises: createExcercise._id }
    }, {new:true});

    res.status(200).json(updateWorkout);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
