
console.log("helooo")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26204d0e98msh01983f4e2c59185p114480jsn49cd66599ba4',
		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	}
};

fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log("hello")

// Countries API Fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86dd07a4d7msh506dceb978bc41dp168ab6jsnc3ac1a21306b',
		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
	}
};

fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

