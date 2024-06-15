const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')

const app = express();
app.use(cors())

app.use(express.json());

app.use('/', proxy('http://localhost:3001',));  //products
app.use('/coustomer', proxy('http://localhost:3000',));
app.use('/shopping', proxy('http://localhost:3002',));


app.listen(3004, () => {
    console.log("Getaway is running on port 3004")
})