import express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import mongoose from "mongoose";
import config from "./config.js";
import { routerApi } from "./routers/api.rooter.js";
import { swaggerOptions } from "./swagger-options.js";

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/?retryWrites=true&w=majority`)
        .then(() => console.log('connexion à mongo réussie'))
        .catch(err => console.log(err))

const app = express();

expressJSDocSwagger(app)(swaggerOptions)

app.use('/api', routerApi)

app.get('/', (req, res)=>{
    res.send('hello word')
}) 

app.listen(3000, console.log('listen 3000'))