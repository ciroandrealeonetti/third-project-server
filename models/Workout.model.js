const { Schema, model } = require("mongoose");

const workoutSchema = new Schema (
    {
        Title: {
            type: String
        },
        Excercises: [{type: Schema.Types.ObjectId, ref:"excercise"}],
        Goal: {
            type: String,
            enum: ["lose weight", "get toned", "build muscle"]
        }
    
    }   
)

const workout = model("Workout", workoutSchema);

module.exports = Workout;