import { User } from "./user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../config.js";

export const login = async (req, res) => {
    try {
      const { body } = req;
      const user = await User.findOne({ email: body.email });
      if (!user) {
        res.status(404).json({ message: "Utilisateur non trouvé" });
      } else if (await bcrypt.compare(body.password, user.password)) {
        if (config.secret) {
          const token = await jwt.sign({ id: user._id }, config.secret, {
            expiresIn: "24h",
          });
          res.status(200).json(token);
        } else {
          res.status(500).json({ message: "Secret not found" });
        }
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  

export const register = async (req, res) => {
    try {
        const {body} = req
        const hash = await bcrypt.hash(body.password, 10)
        body.password = hash
        await User.create(body)
        res.status(201).json({message: "L'utilisateur a été créé"})
    } catch(err){
        res.status(400).json(err.message)
    }
}
