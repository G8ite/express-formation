import express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import mongoose from "mongoose";
import config from "./config.js";
import { routerApi } from "./routers/api.rooter.js";
import { swaggerOptions } from "./swagger-options.js";
import cors from "cors"

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/?retryWrites=true&w=majority`)
        .then(() => console.log('connexion à mongo réussie'))
        .catch(err => console.log(err))

const app = express();

app.use(express.json())

app.use(cors({
    origin: '*',
    methods: "GET, PUT, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
}))

expressJSDocSwagger(app)(swaggerOptions)

app.use('/api', routerApi)

app.listen(parseInt(config.port), console.log('listen ' + config.port))