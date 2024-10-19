import Users from "../database/models/users.models";
import response from "../utils/response";
import { ModelStatic } from "sequelize";
import { AuthenticateUserTypes, UserTypes } from "../types/users.types";
import md5 from "md5";

class UserServices {
  private model:ModelStatic<Users> = Users

  async authenticate({ email, password }:AuthenticateUserTypes){
    const users = await this.model.findOne({ where: { email }})
    
    if(users != null) {
      if(users.dataValues.password === password) return response(200, users.dataValues) 
      else return response(401, 'Unknow Password!')

    }else return response(401, 'Unknow Email!')
  }

  async create(params:UserTypes){
    const users = await this.model.create(params)
    return response(201, users)
  }

  async delete(id:string){
    const users = await this.model.destroy({ where: { id }})
    return response(200, users)
  }

  async get(){
    const users = await this.model.findAll()
    console.log(md5(users[0].dataValues.password))
    return response(200, users)
  }

  async update(params:UserTypes){
    const users = await this.model.update(params, { where: {id : params.id }})
    return response(200, users)
  }

}

export default UserServices