// Dad joke API
var dadJokesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5fab70728msh40aaace1ce86804p1f0dd9jsn7ef8e820d71d',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes',dadJokesAPI)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


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
// fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', ExchangeRateAPI)
// 	.then(response => response.json())
// 	.then(response => {

// 	})

// 	.catch(err => console.error(err));

// console.log("hello")

// // Countries API Fetch and connect to Destination button
// function countriesDestinations() {
//     var countriesAPI = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '86dd07a4d7msh506dceb978bc41dp168ab6jsnc3ac1a21306b',
//             'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://countries-cities.p.rapidapi.com/location/country/list', countriesAPI)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }


//set function to pull data from currency api and render it to the page
const currentEx = document.querySelector("#format-input")
const submitBtn = document.querySelector("#destinations")
const inputAmount = document.getElementById("budget-input")
submitBtn.addEventListener("click", function(event){
	event.preventDefault();
	fetchCurrencyData ()
	// console.log(rates);
	console.log(currentEx.value)

})

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
}
// function renderAPIArray(ExchangeRateAPI) {
// 	fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', ExchangeRateAPI)
// 	  .then(response => response.json())
// 	  .then(data => {
// 		let array = data.array;
// 		let container = document.getElementById("container");
// 		for (let i = 0; i < data.length; i++) {
// 		  let item = document.createElement("p");
// 		  item.innerHTML = array[i];
// 		  container.appendChild(item);
// 		}
// 	  });
//   }
  

//render a card that shows the amount the user entered, the exchange rate with the currency, the result. Also display which country the currency was exchange into
