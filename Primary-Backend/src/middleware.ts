import { NextFunction,Request , Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./config";
// @ts-ignore
export function authMiddleware  (req : Request,res : Response, next : NextFunction) :Promise<any> {
    const token  = req.headers.authorization as unknown as string;

    try{
        const payload = jwt.verify(token , JWT_PASSWORD)
        // @ts-ignore
        req.id = payload.id
        next();
    }catch(e){
        // @ts-ignore
        return res.status(403).json({
            message: "you are logged in"
        })
    }
    

    
}