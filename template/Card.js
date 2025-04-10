const Card = (card) => {
  return /*html*/ `
    <div class="card">
      <div class="card__header">
        <h2 class="card__title">${card.title}</h2>
      </div>
      <div class="card__body">
        <p class="card__current">${card.timeframes.daily.current}hrs</p>
        <p class="card__previous">Last Day - ${card.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  `;
};

export default Card;
