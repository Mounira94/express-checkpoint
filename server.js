const express = require('express');
const hbs = require('hbs')
let app = express();



app.use(addActiveTime =(req, res, next)=> {
  let requestAt= new Date().getHours()
  
if((requestAt<=12)||(requestAt>=17))
{
  res.send("no access")
}
else{

    next()
    app.use(express.static(__dirname+'/public'))
}
  })

app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})























//app.set("view engine",hbs)
// app.get('/connected_user',(req,res)=>{
//   res.render('user.hbs',{name:"mounira"})
// })