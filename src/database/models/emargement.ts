import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import User from "./user";
import Session from "./user";

interface EmargementAttributes {
  id?: number;
  etudiant_id: number;
  session_id: number;
  status: boolean;

  updatedAt?: Date;
  createdAt?: Date;
}

class Emargement
  extends Model<EmargementAttributes>
  implements EmargementAttributes
{
  public id!: number;
  public etudiant_id!: number;
  public session_id!: number;
  public status!: boolean;

  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Emargement.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    etudiant_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    session_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
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
    modelName: "Emargement",
  }
);

// associate
Emargement.belongsTo(User, {
  as: "user",
  foreignKey: {
    name: "etudiant_id",
    allowNull: false,
  },
  foreignKeyConstraint: true,
});

// associate
Emargement.belongsTo(Session, {
  as: "session",
  foreignKey: {
    name: "session_id",
    allowNull: false,
  },
  foreignKeyConstraint: true,
});

export default Emargement;
