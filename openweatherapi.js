const getTempByCity = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=55c364411faef1ba39cdce9b4cc97e9c`
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];

    return arrData[0].main.temp;
}

module.exports = { getTempByCity };