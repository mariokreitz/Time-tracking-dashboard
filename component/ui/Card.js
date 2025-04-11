const Card = ({ title, image, timeframes }, time = "daily") => {
  const cardTitle = title.toLowerCase();
  const { current, previous } = timeframes[time];
  const previousPeriod = time === "daily" ? "Yesterday" : time === "weekly" ? "Last Week" : "Last Month";

  return /*html*/ `
    <section  data-category="${cardTitle}" class="card">
      <header  class="card-header">
        <img src="${image}" alt="${title}">
      </header>
      <div class="card-body">
        <h2 class="card-title">${title} <img src="./images/icon-ellipsis.svg" alt="more"></h2>
        <p class="card-current">${current}hrs</p>
        <p class="card-previous">${previousPeriod} - ${previous}hrs</p>
      </div>
    </section>
  `;
};

export default Card;
