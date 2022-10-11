import { DataTypes, Model } from "sequelize";
import db from ".";

class Email extends Model {
  public id!: number;
  public name!: string;
  public message!: string;
  public email!: string;
}

Email.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
    },
    email: {
      type: DataTypes.STRING,
      field: "email",
      defaultValue: true,
    },
    message: {
      type: DataTypes.STRING,
      field: "message",
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "email",
    timestamps: false,
  }
);

export default Email;
