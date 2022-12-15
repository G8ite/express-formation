import { User } from "./user.model.js"
import bcrypt from 'bcrypt'

export const login = async () => {
    try {
        const { body } = req
        const user = await User.findOne({email: body.email})
        if(await bcrypt.compare(body.password, user.password)){
            res.status(200).json(user)
        } else {
            console.log("Invalid mdp")
            res.status(401).json({message: "Mot de passe invalide"})
        }
        res.status(200).json(user)
    } catch(err){
        res.status(404).json({message:"Aucun utilisateur trouvé"})
    }
}

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
