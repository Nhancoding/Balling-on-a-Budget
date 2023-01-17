// Dad joke API
var dadJokesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5fab70728msh40aaace1ce86804p1f0dd9jsn7ef8e820d71d',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes',dadJokesAPI)
.then (function(response) {
	return response.json();
})
.then(function(data) {
	console.log(data);
	for (var i=0; i < data.length; i++) {
			var jokeText = document.querySelector("#joke")
			jokeText.textContent = data[i].joke;
		}
	})


// // Exchange rate API
// var ExchangeRateAPI = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '26204d0e98msh01983f4e2c59185p114480jsn49cd66599ba4',
// 		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
// 	}
// };

// fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', ExchangeRateAPI)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// // Countries API Fetch
// var countriesAPI = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '86dd07a4d7msh506dceb978bc41dp168ab6jsnc3ac1a21306b',
// 		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
// 	}
// };

// fetch('https://countries-cities.p.rapidapi.com/location/country/list', countriesAPI)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));