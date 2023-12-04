const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))

const uri = 'mongodb+srv://rtwele:password1234@cluster0.6vip9.mongodb.net/Cincinnati';
        
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const bookingRouter = require('./routes/booking')
app.use('/', bookingRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

