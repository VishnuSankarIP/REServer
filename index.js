require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');
require('./DB/connection');


// email
// const bodyParser=require('body-parser')



const REServer = express();

// Middleware
REServer.use(cors());
REServer.use(express.json());

// Routes
REServer.use(router);
REServer.use('/uploads',express.static('./uploads'))
// email
// REServer.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

// Start the server
REServer.listen(PORT, () => {
    console.log(`Project server started at port ${PORT}`);
});

// Default route
REServer.get("/", (req, res) => {
    res.status(200).send(`<h1>Project server started and waiting for client request</h1>`);
});
