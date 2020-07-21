const Mongodb = require("mongodb")

const uri = "mongodb://localhost/voting-platform"

module.exports = () => {     // we no need to pass the argument app here because we are not using Express
    const client =  new Mongodb.MongoClient(uri)

    return client.connect()  //It will establish a connection and return the promise
}