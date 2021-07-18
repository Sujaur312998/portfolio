const express = require("express")
const dotenv = require('dotenv')
const app = express()


dotenv.config({path:"./config.env"})


const PORT=process.env.PORT ||5000
//middleware
require('./db/connection')
app.use(express.json())
app.use(require('./route/auth'))




app.get('/login', (req, res) => {
    res.send('hlw from the signin other side')
})
app.get('/signup', (req, res) => {
    res.send('hlw from the signup other side')
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
    const path=require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`listening from the port ${PORT}`)
})

