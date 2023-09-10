const express = require('express')
const app =express()

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    console.log(' here ')
    //res.status(500).json({message:"hi"});
    res.render('index',{text:'world'});
})

const userRouter = require('./routes/users');
const postRouter = require('./routes/users');


app.use('/users',userRouter)
app.use('/users',postRouter)


app.listen(3000) 