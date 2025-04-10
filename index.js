import { fetchData } from "./lib/utils.js";
import Card from "./template/Card.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.info("DOM loaded");
  const data = await fetchData("data.json");
  console.log(data);

  data.forEach((item) => {
    const card = Card(item);
    document.querySelector(".cards").insertAdjacentHTML("beforeend", card);
  });
});
