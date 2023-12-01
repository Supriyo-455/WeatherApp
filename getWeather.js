const express = require('express');
const router = express.Router();
const api = require('./openweatherapi');

router.post('/', async (req, res, next) => {
    try {
        const cities = req.body.cities;

        if (!cities || !Array.isArray(cities)) {
            return res.status(400).json({ error: true, message: "Invalid or missing 'cities' array in the request body" });
        }

        const weatherData = {};

        for (const city of cities) {
            const result = await api.getTempByCity(city);
            weatherData[city] = `${result}C`;
        }

        res.status(200).json({
            "weather": weatherData
        });
    } catch (err) {
        console.error(`error while fetching weather data: ${err.message}`);
        next(err);
    }
});

module.exports = router;