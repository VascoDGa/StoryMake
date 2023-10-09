import { Router } from "express";
import { signUp, logIn, logOut , getProfile } from "../controllers/auth.controller";
import { isLoggedIn } from "../middlewares/auth.middleware";

const router = Router();

router.post("/signup", signUp);
router.post("/login". logIn);
router.get("/logout", logout);

router.get("/profile", isLoggedIn, getProfile);

export default router;


