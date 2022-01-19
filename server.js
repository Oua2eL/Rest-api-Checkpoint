const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

// connect database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,(err)=>err?console.log('err'):console.log('database connected'));

app.use('/api/user', require('./routes/userRoute'));

app.listen(process.env.PORT,(err)=>err?console.log('err'):console.log(`server running on port ${process.env.PORT}`));