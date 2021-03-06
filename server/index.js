//System libraries
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//take the system port or take 3000 if not available
const port = process.env.port || 3000;

//declaring the path for user routes
const daylight = require('./routes/daylight.controller');
const room = require('./routes/room.controller');
const clock = require('./routes/clock.controller');
const timeing = require('./routes/timeing.controller');


//Initializing the node server
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//redirecting to the required routes
app.use('/daylight',daylight);
app.use('/room',room);
app.use('/clock',clock);
app.use('/timeing',timeing);

//error handling if the routes fails
app.use((error,req,res,next) => {
    res.json({status:false,msg:error});
});

//Server is listening on the port
app.listen(port,()=>{
    console.log("Server has started on port "+port);
});