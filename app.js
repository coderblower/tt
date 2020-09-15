let express = require('express');
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://saiful:55tFUcugqZ5Du56d@cluster0.vxj27.mongodb.net/<dbname>?retryWrites=true&w=majority'
let app = express();

const client = new MongoClient(uri);

app.get('/', async (req, res)=>{
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);

        res.send('success ')
 
    } catch (e) {
        res.send('error')
    } finally {
        await client.close();
    }
})

let env = process.env.PORT || 3000; 

app.listen(env)