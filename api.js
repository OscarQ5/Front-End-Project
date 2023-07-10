fetch("https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/")
.then(response => response.json())
.then(JSONresponse => {JSONresponse.results
console.log(JSONresponse)})
.catch(error => console.log(error));

const burgerContainer = document.getElementById('burger-container');

fetch("https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/1")
  .then(response => response.json())
  .then(data => {
    const burgerName = document.createElement('h2');
    burgerName.textContent = data.name;

    const burgerPrice = document.createElement('p');
    burgerPrice.textContent = data.price;

    burgerContainer.appendChild(burgerName);
    burgerContainer.appendChild(burgerPrice);
  })
  .catch(error => {
    console.error('Error:', error);
    burgerContainer.textContent = 'Failed to fetch the Burger of the Day. Please try again later.';
  });
