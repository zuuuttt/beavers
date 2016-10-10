const express = require('express');
const app = express();
const bodyParser=require('body-parser')
const MongoClient=require('mongodb').MongoClient;

const mongourl='mongodb://localhost:27017/mytest'
const coll='beavers'
app.set('view Engine','ejs');
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(mongourl, (err, database) => {
  if (err) return console.log(err)
  let db = database
  
  app.post('/create',(req,res)=> {
    db.collection(coll).insertOne(req.body,(err,result) => {
        console.log(result)
        res.redirect('/')
    });
  });
    

    


app.get('/', (req, res) => {
    res.redirect('/NewBeaver')
    
    
 
});

app.get('/NewBeaver',(req,res)=>{
    res.sendFile('/home/hashim/mynode/mynode/beavers/index.html')
});
    








app.listen(3000, function() {
  console.log('listening on 3000')
})


});



