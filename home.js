fetch("https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/")
.then(response => response.json())
.then(JSONresponse => {JSONresponse.results
console.log(JSONresponse)})
.catch(error => console.log(error));

const burgerContainer = document.getElementById("burger-container");

fetch("https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/1")
.then(response => response.json())
.then(data => {
  const burgerName = document.createElement("h2");
  burgerName.textContent = data.name;

  const burgerChalk = document.createElement("p")
  burgerChalk.textContent = "BURGER"
  burgerChalk.style.textDecoration = "underline"

  const ofTheDayChalk = document.createElement("p")
  ofTheDayChalk.textContent = "Of The Day"

  const burgerPrice = document.createElement("p");
  burgerPrice.textContent = data.price;

  burgerContainer.appendChild(burgerChalk);
  burgerContainer.appendChild(ofTheDayChalk);
  burgerContainer.appendChild(burgerName);
  burgerContainer.appendChild(burgerPrice);
})
.catch(error => {
  console.error("Error:", error);
  burgerContainer.textContent = "Failed to fetch the Burger of the Day. Please try again later.";
});

const belchers = document.getElementById("belchers-container")
fetch("https://bobsburgers-api.herokuapp.com/v2/characters/51")
.then(response => response.json())
.then(JSONresponse => {
  const bobImg = document.createElement("img");
  bobImg.style.width = "200px";
  bobImg.style.height = "300px";
  bobImg.src = JSONresponse.image
  belchers.appendChild(bobImg)
})
.catch(error => console.log(error));

fetch("https://bobsburgers-api.herokuapp.com/v2/characters/275")
.then(response => response.json())
.then(JSONresponse => {
  const lindaImg = document.createElement("img");
  lindaImg.style.width = "200px";
  lindaImg.style.height = "300px";
  lindaImg.src = JSONresponse.image
  belchers.appendChild(lindaImg)
})
.catch(error => console.log(error));

fetch("https://bobsburgers-api.herokuapp.com/v2/characters/467")
.then(response => response.json())
.then(JSONresponse => {
  const tinaImg = document.createElement("img");
  tinaImg.style.width = "200px";
  tinaImg.style.height = "300px";
  tinaImg.src = JSONresponse.image
  belchers.appendChild(tinaImg)
})
.catch(error => console.log(error));

fetch("https://bobsburgers-api.herokuapp.com/v2/characters/167")
.then(response => response.json())
.then(JSONresponse => {
  const geneImg = document.createElement("img");
  geneImg.style.width = "200px";
  geneImg.style.height = "300px";
  geneImg.src = JSONresponse.image
  belchers.appendChild(geneImg)
})
.catch(error => console.log(error));

fetch("https://bobsburgers-api.herokuapp.com/v2/characters/280")
.then(response => response.json())
.then(JSONresponse => {
  const louiseImg = document.createElement("img");
  louiseImg.style.width = "200px";
  louiseImg.style.height = "300px";
  louiseImg.src = JSONresponse.image
  belchers.appendChild(louiseImg)
})
.catch(error => console.log(error));