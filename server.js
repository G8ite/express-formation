import express from "express";
import mongoose from "mongoose";
import config from "./config.js";
import { routerApi } from "./routers/api.rooter.js";

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/?retryWrites=true&w=majority`)
        .then(() => console.log('connexion à mongo réussie'))
        .catch(err => console.log(err))

const app = express();

app.use('/api', routerApi)

app.get('/', (req, res)=>{
    res.send('hello word')
}) 

app.listen(3000, console.log('listen 3000'))