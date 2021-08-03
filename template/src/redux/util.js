async function getCityInfo(searchTerm) {
  try {
    const coordinatesLink = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=fe9996b49ea0bb573c48733584b23c74`;
    const response = await fetch(coordinatesLink);
    const data = await response.json();

    if (data.cod === 200) {
      return {
        coordinates: data.coord,
        city: data.name + ', ' + data.sys.country,
      };
    } else {
      throw Error(data.message);
    }
  } catch (error) {
    throw Error(`Error: ${error.message}`);
  }
}

export default async function getData(searchTerm) {
  try {
    const cityInfo = await getCityInfo(searchTerm);

    if (cityInfo.message) {
      return cityInfo;
    }

    const weatherLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.coordinates.lat}&lon=${cityInfo.coordinates.lon}&units=metric&exclude=minutely,hourly,alerts&appid=fe9996b49ea0bb573c48733584b23c74`;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const response = await fetch(weatherLink);

    const rawData = await response.json();
    const weather = {
      city: cityInfo.city,
      current: {
        description: rawData.current.weather[0].description,
        temp: rawData.current.temp,
        icon: `http://openweathermap.org/img/wn/${rawData.current.weather[0].icon}@2x.png`,
      },
      daily: [],
    };

    rawData.daily.forEach(day => {
      weather.daily.push({
        day: days[new Date(Number(day.dt) * 1000).getDay()],
        temp: {
          max: day.temp.max,
          min: day.temp.min,
        },
        description: day.weather[0].description.toUpperCase(),
        icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
      });
    });

    return weather;
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
}

//getData('Cairo').then(data => console.log(data));
