const express = require('express')
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json())


let users = [
  {
    username: "Bulent",
    password: "123456"
  },
  {
    username: "Ali",
    password: "1234567"
  }
]


app.get('/', (req, res) => res.render('pages/index'));


//CRUD 
//CREATE POST 
//READ GET 
//UPDATE PUT
//DELETE


app.post('/login', (req, res)=>{ 

    for(let i = 0; i < users.length; i++){
      if(req.body.username === users[i].username && req.body.password === users[i].password){
        res.json("Login successfull");
      }
    }

    res.status(400).json({message: "Please enter correct credentials"});
})















const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
