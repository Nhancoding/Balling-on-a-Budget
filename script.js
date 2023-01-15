// // Dad joke API
var fetch = require('node-fetch');

var url = 'https://dad-jokes.p.rapidapi.com/random/joke';

var dadjokeAPI = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f5fab70728msh40aaace1ce86804p1f0dd9jsn7ef8e820d71d',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

fetch(url, dadjokeAPI)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

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