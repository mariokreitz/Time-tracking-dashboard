const Card = (card, time = "daily") => {
  return /*html*/ `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">${card.title}</h2>
      </div>
      <div class="card-body">
        <p class="card-current">${card.timeframes[time].current}hrs</p>
        <p class="card-previous">Last Day - ${card.timeframes[time].previous}hrs</p>
      </div>
    </div>
  `;
};

export default Card;
