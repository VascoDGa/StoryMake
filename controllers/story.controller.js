import asyncHandler from "../service/asyncHandler.js";
import Story from '../models/story.js';

export const createStory = asyncHandler(async(req, res) => {
    const {story , name} = req.body;

    const existingStory = await Story.findOne({story})
    
    if(existingStory) {
        existingStory.count += 1;
        await existingStory.save();
        return res.status(200).json({
            message: "Story already exists. Count increased by 1."
        })
    }

    const createStory = await Story.create({
        story,
        count : 1,
        user : name
    })

})

export const updateStoryCount = asyncHandler( async (req , res ) => {
    const {count , story } = req.body;
    const {id : storyId} = req.params;
    const updateStory = await Story.findByIdAndUpdate(storyId , {
        count : count
    }, {
        new : true,
        runValidators : true
    })

    if(!updateStory) {
        throw new Error("Story not found" )
    }

    res.status(200).json({
        success : true ,
        message : "Story count was updated successfully",
        updatestory
    })
})

export const getAllStories = asyncHandler( async (req, res) => {
    const allStories = await Story.find()

    if(!allStories) {
        throw new Error("No stories found");
    }

    res.status(200).json({
        success : true,
        allStories
    })
})