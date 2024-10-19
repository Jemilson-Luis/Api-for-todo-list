require('dotenv').config()
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

const validateToken = (req:Request, res:Response, next:NextFunction)=>{
  const authToken = req.headers['authorization'];

  if(authToken != undefined){
    const bearer = authToken.split(' ')
    const token = bearer[1]
    const SECERT:jwt.Secret = `${process.env.JWT_SECRET}`
    
    jwt.verify(token,SECERT, (error, data)=>{
      if(error) res.status(500).json('Invalid Token!')
      else {
        //add data of user authenticated in params.data
        data && req.params.data

        next()
      }
    })
  }else res.status(401).json({message: 'Need authorization!'})
}

export default validateToken