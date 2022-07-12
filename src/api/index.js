import fetch from "node-fetch";

export const FetchApiData = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();

  return data;
};
