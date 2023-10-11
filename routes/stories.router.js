import { Router } from "express";
import {updateStoryCount, getAllStories, createStory} from '../controllers/story.controller.js';
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/getStories", isLoggedIn, getAllStories);
router.post("/updatestory", isLoggedIn, updateStoryCount);
router.post("/createstory",isLoggedIn,  createStory);



export default router;