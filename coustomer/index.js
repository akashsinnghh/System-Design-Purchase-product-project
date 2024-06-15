const express = require('express');

const app = express();

app.use(express.json());


app.use('/',(req, res, next) => {

    return res.status(200).json({"msg":"Hello from Coustomer"})

})

app.listen(3000, () => {
    console.log("Coustomer is running on port 3000")
})