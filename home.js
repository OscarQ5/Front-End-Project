fetch("https://bobsburgers-api.herokuapp.com/v2/characters/")
  .then(response => response.json())
  .then(JSONresponse => {
    JSONresponse.results
    console.log(JSONresponse)
  })
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

const belchersContainer = document.getElementById("belchers-container");

function fetchAndAppendCharacter(characterId) {
  fetch(`https://bobsburgers-api.herokuapp.com/v2/characters/${characterId}`)
    .then(response => response.json())
    .then(characterData => {
      const characterImgUrl = characterData.image;

      const belcherElement = document.createElement("div");
      belcherElement.classList.add("belcher");

      const imgElement = document.createElement("img");
      imgElement.src = characterImgUrl;
      imgElement.style.width = "200px";
      imgElement.style.height = "300px";
      imgElement.alt = characterData.name;

      const tooltipElement = document.createElement("div");
      tooltipElement.classList.add("tooltip");

      belcherElement.appendChild(imgElement);
      belcherElement.appendChild(tooltipElement);

      belchersContainer.appendChild(belcherElement);

      imgElement.addEventListener("mouseover", () => {
        displayTooltip(characterData, tooltipElement);
      });

      imgElement.addEventListener("mouseout", () => {
        tooltipElement.innerHTML = "";
      });
    })
    .catch(error => console.log(error));
}

function displayTooltip(characterData, tooltipElement) {
  const { name, age, occupation, voicedBy } = characterData;
  const tooltipContent = `
    <h4>${name}</h4>
    <p>Age: ${age}</p>
    <p>Occupation: ${occupation}</p>
    <p>Voiced By: ${voicedBy}</p>
  `;
  tooltipElement.innerHTML = tooltipContent;
}

fetchAndAppendCharacter(51);
fetchAndAppendCharacter(275);
fetchAndAppendCharacter(467);
fetchAndAppendCharacter(167);
fetchAndAppendCharacter(280);

const burgerForm = document.getElementById("burger-form");

burgerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const burgerNameInput = document.getElementById("burger-name");
  const burgerPriceInput = document.getElementById("burger-price");

  const burgerName = burgerNameInput.value;
  const burgerPrice = burgerPriceInput.value;

  const errorMessages = burgerForm.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  })
  if (burgerName.trim() === "" || burgerPrice.trim() === "") {
    const errorContainer = document.createElement("p");
    errorContainer.textContent = "Please fill in all fields."
    errorContainer.classList.add("error-message");
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", function () {
    errorContainer.remove();
  });

  errorContainer.appendChild(closeButton);
    burgerForm.appendChild(errorContainer)
    return false;
  }

  const burgerNameElement = document.createElement("h2");
  burgerNameElement.textContent = burgerName;

  const burgerChalk = document.createElement("p");
  burgerChalk.textContent = "BURGER";
  burgerChalk.style.textDecoration = "underline";

  const ofTheDayChalk = document.createElement("p");
  ofTheDayChalk.textContent = "Of The Day";

  const burgerPriceElement = document.createElement("p");
  burgerPriceElement.textContent = "$" + burgerPrice;

  burgerContainer.innerHTML = "";

  burgerContainer.appendChild(burgerChalk);
  burgerContainer.appendChild(ofTheDayChalk);
  burgerContainer.appendChild(burgerNameElement);
  burgerContainer.appendChild(burgerPriceElement);

  burgerForm.reset();
});

const newBurgerBtn = document.getElementById("new-burger");

function fetchRandomBurgerOfTheDay() {
  const randomId = Math.floor(Math.random() * 333) + 1; 
  const apiUrl = `https://bobsburgers-api.herokuapp.com/v2/burgerOfTheDay/${randomId}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(burger => {
      const burgerNameElement = document.createElement("h2");
      burgerNameElement.textContent = burger.name;

      const burgerChalk = document.createElement("p");
      burgerChalk.textContent = "BURGER";
      burgerChalk.style.textDecoration = "underline";

      const ofTheDayChalk = document.createElement("p");
      ofTheDayChalk.textContent = "Of The Day";

      const burgerPriceElement = document.createElement("p");
      burgerPriceElement.textContent = burger.price;

      burgerContainer.innerHTML = ""; 

      burgerContainer.appendChild(burgerChalk);
      burgerContainer.appendChild(ofTheDayChalk);
      burgerContainer.appendChild(burgerNameElement);
      burgerContainer.appendChild(burgerPriceElement);
    })
    .catch(error => {
      console.error("Error:", error);
      burgerContainer.textContent = "Failed to fetch a new Burger of the Day. Please try again later.";
    });
}

newBurgerBtn.addEventListener("click", fetchRandomBurgerOfTheDay);
