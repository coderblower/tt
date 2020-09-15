let express = require('express');

let app = express();

app.get('/', (req, res)=>{
    res.send('hello')
})

let env = process.env.PORT || 3000; 

app.listen(env)