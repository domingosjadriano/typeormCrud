import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"

import { User } from "./entity/User"
import { myDataSource } from "./data-source"
import { router } from "./routes"

myDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    app.use(router)
    // setup express app here
    // ...

    // start express server
    app.listen(3000)
    console.log("Express server has started on port 3000. Open http://localhost:3000/teste to see results")

}).catch(error => console.log(error))
