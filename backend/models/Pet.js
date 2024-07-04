import sequelize from "../database/dataBase.js";
import { DataTypes } from "sequelize";

export const Pet = sequelize.define("Pet", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        required: true,
    },
    age: {
        type: DataTypes.INTEGER,
        required: true,
    },
    description: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.NUMBER,
        required: true,
    },
    color: {
        type: DataTypes.STRING,
        required: true,
    },
    image: {
        type: DataTypes.STRING,
    },
    available: {
        type: DataTypes.STRING,
    },
});
