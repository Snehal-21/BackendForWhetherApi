import express from "express";
import { astro, getTemperature, register, windspeed } from "../controllers/userControllers.js";
import { checkuser } from "../middlewares/authmiddleware.js";

const router=express.Router();

router.post('/register',register);
router.post('/getTemperature',checkuser,getTemperature);
router.post('/windspeed',checkuser,windspeed);
router.post('/astro',checkuser,astro)

export default router;