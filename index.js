const express =require("express")
const logger =require("./middlewares/book.logger")
const booksRoute = require("./routes/booksRoute")


const app = express()

//middleware
app.use(express.json())
app.use(logger);

app.use(booksRoute)



//home route0
app.get("/",(req,res)=>{
res.json("Welcome to our library")
})

const PORT = 8000;



app.listen(PORT,()=>{
    console.log("server is running")
})