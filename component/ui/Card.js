const Card = (card, time = "daily") => {
  return /*html*/ `
    <article class="card">
      <header data-category="${card.title.toLowerCase()}" class="card-header">
        <img src="${card.image}" alt="${card.title}">
      </header>
      <div class="card-body">
      <h2 class="card-title">${card.title}</h2>
        <p class="card-current">${card.timeframes[time].current}hrs</p>
        <p class="card-previous">Last Day - ${card.timeframes[time].previous}hrs</p>
      </div>
    </article>
  `;
};

export default Card;
