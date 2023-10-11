import { Router } from "express";
import authRoute from './auth.router.js';
import storyRoute from './stories.router.js';

const router = Router();

router.use("/auth", authRoute);
router.use("/story", storyRoute);



export default router;

