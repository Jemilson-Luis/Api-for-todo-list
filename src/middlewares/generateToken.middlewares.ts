import jwt from 'jsonwebtoken'
require('dotenv').config()
import { UserTypes } from '../types/users.types'
import { Response } from 'express'


const generateToken = (( data:UserTypes, res:Response ,) =>{
  const SECERT:jwt.Secret = `${process.env.JWT_SECRET}`
  
  jwt.sign(data, SECERT, {expiresIn: '72h'}, (error, token)=>{
    if(error) res.status(500).json({message:'JWT failed!', error})
    else res.status(200).json({data, token})

  })  
})
 
export default generateToken