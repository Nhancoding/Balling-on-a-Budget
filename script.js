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
    