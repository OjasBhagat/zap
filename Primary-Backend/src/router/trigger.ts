import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SignupSchema, SigninSchema } from "../types/types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.get("/avaliable" , async (req,res) =>{
    const avaliableActions =  await prismaClient.avaliableTriggers.findMany({});
    
        res.json({
            avaliableActions
        })
})

export const triggerRouter = router;
