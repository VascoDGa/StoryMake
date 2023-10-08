import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    story : {
        type : [
            {
                storyId : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                count : Number
            }
        ],
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {
    timestamps : true
})

export default mongoose.model("Story", storySchema)