import { model, Schema } from "mongoose";
import { isEmail } from "../middlewares/email.validator.js";

/**
 * Class User
 * @typedef {object} User
 * @property {string} email.required - email
 * @property {string} password.required - password
 */
const schema = new Schema({
    email: {type: String, unique: true,trim: true, lowercase: true, validate: [isEmail, "Veuillez vérifier le format de votre email"]},
    password: {type: String}
})

export const User = model('User', schema)