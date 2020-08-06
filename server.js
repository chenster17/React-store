const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.DB, {useNewUrlParser: true,  useUnifiedTopology: true})
    .then(()=>{
        console.log("connected to mongo");
    }).catch(error => {
    console.log("db error ${error.message}");
    process.exit(-1)
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const speakerRouter = require('./server/routes/speaker');
const webcamRouter = require('./server/routes/webcam');

app.use('/speaker', speakerRouter);
app.use('/webcam', webcamRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});