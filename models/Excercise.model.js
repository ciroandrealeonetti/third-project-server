const { Schema, model } = require("mongoose");

const excerciseSchema = new Schema (
    {
        name: {
            type: String
        },
        type: {
            type: String
        },
        muscle: {
            type: String
        },
        equipment: {
            type: String
        },
        difficulty: {
            type: String
        },
        instructions: {
            type: String
        }
    }
)


const Excercise = model("Excercise", excerciseSchema);

module.exports = Excercise;