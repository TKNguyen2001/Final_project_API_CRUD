const express = require('express')
const mongooes = require("mongoose")

const app = express()

app.use(express.json())


mongooes.connect('mongodb+srv://thangnguyen30092001:1234567890@cluster0.qvcxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{{
    console.log('database connected')
}})
.catch(()=>{{
    console.log('database connect fail')
}})

/**
----SAMPLE DATA
{
        "_id": "627e2a7c81769406a2b67d90",
        "Name": "Nguyen Chien Thang",
        "Addess": "TPHCM",
        "Birthday": "2001-09-30"
    } 
 */


//RUN A SERVER USE : npm start
//Router
const UserRouter = require('./App/Router/UserRouter')
app.use('/',UserRouter)



app.listen(3000,()=>{{
    console.log('Listen on port 3000')
}})

module.exports = app




