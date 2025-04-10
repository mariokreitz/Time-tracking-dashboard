export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    console.info("Data fetched");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
