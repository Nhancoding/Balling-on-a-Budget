// Dad joke API
var dadJokesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5fab70728msh40aaace1ce86804p1f0dd9jsn7ef8e820d71d',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes',dadJokesAPI)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
		for (var i=0; i < data.length; i++) {
			var jokeText = document.querySelector("#joke")
			jokeText.textContent = data[i].joke;
		}
	})



// Countries API Fetch
var countriesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86dd07a4d7msh506dceb978bc41dp168ab6jsnc3ac1a21306b',
		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
	}
};

fetch('https://countries-cities.p.rapidapi.com/location/country/list', countriesAPI)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const currentEx = document.querySelector("#format-input")
const submitBtn = document.querySelector("#destinations")
const inputAmount = document.getElementById("budget-input")
submitBtn.addEventListener("click", function(event){
	event.preventDefault();
	fetchCurrencyData ()
	// console.log(rates);
	console.log(currentEx.value)

})



// Exchange rate API
var ExchangeRateAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26204d0e98msh01983f4e2c59185p114480jsn49cd66599ba4',
		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	}
};
function fetchCurrencyData (){
	var resultsEx;
	
fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', ExchangeRateAPI)
	// const data = await resultsEx.json()

	.then(response => response.json())
	.then(response => { 
		// return response
		getData(response.rates)
	}) 
	
	// })

	// .catch(err => console.error(err));
	// return resultsEx

}



function getData (ratesArray) {
	console.log(ratesArray);
	console.log(currentEx.value)
	console.log(ratesArray [currentEx.value]);
	console.log(ratesArray [currentEx.value] * inputAmount.value);
	var conversionContainer = document.getElementById("conversion-display");
	conversionContainer.innerHTML = "";
	var convertedAmt = (ratesArray [currentEx.value] * inputAmount.value);
	var conversionAmtEl = document.createElement("p");
	conversionAmtEl.innerText = convertedAmt;
	conversionContainer.append(conversionAmtEl);