import { Router } from "express";
import {updateStoryCount, getAllStories, createStory} from '../controllers/story.controller.js';
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/getStories", getAllStories);
router.post("/updatestory", updateStoryCount);
router.post("/createstory", createStory);



export default router;