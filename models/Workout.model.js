const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  title: {
    type: String,
  },
  excercises: [{ type: Schema.Types.ObjectId, ref: "Excercise" }],
  goal: {
    type: String,
    enum: ["lose weight", "get toned", "build muscle"],
  },
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
