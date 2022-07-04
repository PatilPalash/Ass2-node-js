const express=require('express')
const app=express();

app.get('/',function(req,res){res.send("Goto /api/main/json or /api/main/about or /api/main/header")})

app.get('/api/main/header',function(req,res){
    res.send("<h1>  Express js</h1>")
})

app.get('/api/main/json',function(req,res){
    res.json({name:"Palash Patil"})
})

app.get('/api/main/about',function(req,res){
    res.send("Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:Write handlers for requests with different HTTP verbs at different URL paths (routes).Integrate with view rendering engines in order to generate responses by inserting data into templates.")

})
app.listen(3000);
