const Express = require("express");
const setupDatabase = require("./setup/database")

const setupMiddleware = require("./setup/middleware")

const app = Express()

setupMiddleware(app)         //this is going to register body parser on application

setupDatabase()
.then((client) => {
    console.log(client)

    app.listen(4000, () => {
        console.log("server started at port 4000");
    })
})
.catch(console.error)
