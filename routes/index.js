import { Router } from "express";
import authRoute from './auth.router';
import storyRoute from './stories.router';

const router = Router();

router.use("/auth", authRoute);
router.use("/story", storyRoute);

export default router;

