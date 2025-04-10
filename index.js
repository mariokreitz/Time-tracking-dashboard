import { fetchData } from "./lib/utils.js";

const main = async () => {
  const data = await fetchData("data.json");
  console.log(data);
};

main();
