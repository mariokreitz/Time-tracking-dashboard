import Card from "./ui/Card.js";

const CardGrid = (cardsData, timePeriod) => {
  const cardsElement = document.querySelector(".cards");
  cardsElement.innerHTML = "";

  cardsData.forEach((cardData) => {
    const cardImage = cardData.title.toLowerCase().replace(" ", "-");
    cardData.image = `./images/icon-${cardImage}.svg`;

    const cardHTML = Card(cardData, timePeriod);
    cardsElement.insertAdjacentHTML("beforeend", cardHTML);
  });
};

export default CardGrid;
