const express = require('express')



const app = express()

app.listen(3000);

app.set('view engine', 'html')
app.use(express.static(__dirname))

app.get('/', (req,res)=>{
    res.render('index')
})