import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    story : {
        type : String,
        required : true
    },
    count : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {
    timestamps : true
})

export default mongoose.model("Story", storySchema)