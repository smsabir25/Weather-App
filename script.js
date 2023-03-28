const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '654f9e7eaemsh0a9cc4b11a5dc49p1496a7jsn509265db8409',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct  // The variable cloud_pct is declared implicitly when it is assigneda value in the .then() , similaryly others also.
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");

// ------------------------------------------------------------------------

const getWeatherData = (city) => {
	return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.catch(err => console.error(err));
}

let cells = document.querySelectorAll('tbody tr td');
let cityArray = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kanpur"];

// Use an async function to wait for the Promise to resolve
async function updateWeatherData() {
	for (let i = 0; i < 5; i++) {
		let cityObj = await getWeatherData(cityArray[i]);
		console.log(cityObj);

		cells[i * 4].textContent = cityObj["temp"];
		cells[i * 4 + 1].textContent = cityObj["cloud_pct"];
		cells[i * 4 + 2].textContent = cityObj["humidity"];
		cells[i * 4 + 3].textContent = cityObj["wind_speed"];
	}
}

updateWeatherData();


/*
//* another way

const getWeatherData = (city) => {
	return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.catch(err => console.error(err));
}

let cells = document.querySelectorAll('tbody tr td');
let cityArray = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kanpur"];

let updateWeatherData = () => {
	// Use Promise chaining to fetch data for all cities
	Promise.resolve()
		.then(() => getWeatherData(cityArray[0]))
		.then(cityObj => {
			cells[0].textContent = cityObj["temp"];
			cells[1].textContent = cityObj["cloud_pct"];
			cells[2].textContent = cityObj["humidity"];
			cells[3].textContent = cityObj["wind_speed"];
			return getWeatherData(cityArray[1]);
		})
		.then(cityObj => {
			cells[4].textContent = cityObj["temp"];
			cells[5].textContent = cityObj["cloud_pct"];
			cells[6].textContent = cityObj["humidity"];
			cells[7].textContent = cityObj["wind_speed"];
			return getWeatherData(cityArray[2]);
		})
		.then(cityObj => {
			cells[8].textContent = cityObj["temp"];
			cells[9].textContent = cityObj["cloud_pct"];
			cells[10].textContent = cityObj["humidity"];
			cells[11].textContent = cityObj["wind_speed"];
			return getWeatherData(cityArray[3]);
		})
		.then(cityObj => {
			cells[12].textContent = cityObj["temp"];
			cells[13].textContent = cityObj["cloud_pct"];
			cells[14].textContent = cityObj["humidity"];
			cells[15].textContent = cityObj["wind_speed"];
			return getWeatherData(cityArray[4]);
		})
		.then(cityObj => {
			cells[16].textContent = cityObj["temp"];
			cells[17].textContent = cityObj["cloud_pct"];
			cells[18].textContent = cityObj["humidity"];
			cells[19].textContent = cityObj["wind_speed"];
		})
		.catch(err => console.error(err));
}

updateWeatherData();
*/