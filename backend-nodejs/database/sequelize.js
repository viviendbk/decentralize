"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'decentalizedDB',
    username: 'LearningDBUser',
    password: 'root',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // Default PostgreSQL port
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check database connection
        yield sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        // Sync the model with the database
        yield sequelize.sync();
        console.log('Database synchronized successfully');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}))();
exports.default = sequelize;
