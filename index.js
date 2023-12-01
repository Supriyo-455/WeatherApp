const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const errorMiddleware = require('./errorMiddleware');
const getWeather = require('./getWeather');

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.use('/getWeather', getWeather);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`);
});