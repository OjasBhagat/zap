import { Router } from "express";
import { prismaClient } from "../db";

const router = Router();

router.get("/avaliable" , async (req,res) =>{
    const avaliableActions =  await prismaClient.avaliableAction.findMany({});
    
        res.json({
            avaliableActions
        })
})

export const actionRouter = router;
