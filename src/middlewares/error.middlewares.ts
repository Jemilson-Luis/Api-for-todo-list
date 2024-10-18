import { NextFunction, Request, Response } from "express"

const errormiddlewar = (( error:any, req:Request, res:Response, next:NextFunction)=>{
  res.status(500).json({message: error.parent})
  next()
})

export default errormiddlewar