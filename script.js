
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5fab70728msh40aaace1ce86804p1f0dd9jsn7ef8e820d71d',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));