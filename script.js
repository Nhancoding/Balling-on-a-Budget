<<<<<<< HEAD
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
=======
console.log("hello")
>>>>>>> 1c2c6c50c29b58b1e99eefdacadee915aeb91770
