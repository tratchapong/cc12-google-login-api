require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoute = require('./routes/authRoute');

const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
// app.use('/users', authenticate, userRoute);

app.use(notFound);
app.use(error);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
