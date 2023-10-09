import { Router } from "express";
import {updateStoryCount, getAllStories, createStory} from '../controllers/story.controller';
import { isLoggedIn } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", isLoggedIn, getAllStories);
router.post("/updatestory", isLoggedIn, updateStoryCount);
router.post("createstory",isLoggedIn,  createStory);

export default router;