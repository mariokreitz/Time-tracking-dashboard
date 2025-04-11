import { fetchData } from "./lib/utils.js";
import CardGrid from "./component/CardGrid.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.info("DOM loaded");
  const data = await fetchData("data.json");
  console.log(data);

  let time = "daily";
  CardGrid(data, time);

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      time = button.id;
      CardGrid(data, time);
    });
  });
});
