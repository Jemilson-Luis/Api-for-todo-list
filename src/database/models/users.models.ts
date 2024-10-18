import { Model } from "sequelize";
import db from './index'
import sequelize from "sequelize";
import Tasks from "./tasks";

class Users extends Model {
  declare id: Number
  declare name: string
  declare email: string
  declare password: string
}

Users.init({
  id: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey:true,
    defaultValue: sequelize.UUIDV4
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: false
})



export default Users