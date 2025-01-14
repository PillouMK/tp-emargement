import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import User from "./user";

interface SessionAttributes {
  id?: number;
  title: string;
  formateur_id: number;

  updatedAt?: Date;
  createdAt?: Date;
}

class Session extends Model<SessionAttributes> implements SessionAttributes {
  public id!: number;
  public title!: string;
  public formateur_id!: number;

  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Session.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    formateur_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    modelName: "Session",
  }
);

// associate
Session.belongsTo(User, {
  as: "user",
  foreignKey: {
    name: "formateur_id",
    allowNull: false,
  },
  foreignKeyConstraint: true,
});

export default Session;
