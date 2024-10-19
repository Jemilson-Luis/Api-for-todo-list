import { NextFunction, Request, request, Response, response } from "express";
import md5 from "md5";
import crypto from 'node:crypto';
import UserServices from "../services/users.services";
import { UserTypes } from "../types/users.types";
import generateToken from "../middlewares/generateToken.middlewares";

class UserController {
  private service = new UserServices()

  async authenticate( req: Request, res:Response, next:NextFunction ){
    try{
      const { status, message } = await this.service.authenticate({ email: req.params.email, password:md5(req.params.password) })
      generateToken(message, res)      

    }catch(error){
      next(error)
    }
  }

  async create( req: Request, res:Response, next:NextFunction ){
    try{
      const params:UserTypes = {
        id: crypto.randomUUID(),
        name: req.params.name,
        email: req.params.email,
        password: md5(req.params.password),
      }

      const { status, message } = await this.service.create(params)
      res.status(status).json(message)

    }catch(error){
      next(error)
    }
  }

  async delete( req: Request, res:Response, next:NextFunction ){
    try{
      const { status, message } = await this.service.delete(req.params.id)
      res.status(status).json(message)

    }catch(error){
      next(error)
    }
  }

  async get( req: Request, res:Response, next:NextFunction ){
    try{
      const { status, message } = await this.service.get()
      res.status(status).json(message)

    }catch(error){
      next(error)
    }
  }

  async update( req: Request, res:Response, next:NextFunction ){
    try{
      const params:UserTypes = {
        id: req.params.id,
        name: req.params.name,
        email: req.params.email,
        password: req.params.password,
      }

      const { status, message } = await this.service.update(params)
      res.status(status).json(message)

    }catch(error){
      next(error)
    }
  }
}

export default UserController