import { Model } from "sequelize";
import db from './index'
import sequelize from "sequelize";
import Users from "./users.models";

class Tasks extends Model{
  declare id:number
  declare user_id: number
  declare name: string
  declare desc:string
}

Tasks.init({
  id: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey:true,
    defaultValue: sequelize.UUIDV4
  },
  user_id: {
    type: sequelize.UUID,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: sequelize.TEXT,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'tasks',
  timestamps: false
})

Tasks.belongsTo(Users, {
  foreignKey: 'user_id',
  as: 'user'
})

export default Tasks