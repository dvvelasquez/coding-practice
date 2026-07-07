const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const summaries = [
  "Rainy",
  "Cloudy",
  "Partly Cloudy",
  "Partly Sunny",
  "Mostly Sunny",
  "Sunny"
];

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const getTemp = () => {
  const avg = getRandomNumber(60, 30);

  return {
    avg,
    min: avg - 10,
    max: avg + 10
  };
};

const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100)
});

const categories = {
    "/categories": ["Shirts", "Pants", "Shoes", "Accessories"],

  "/items?category=Shirts": ["T-Shirts", "Casual", "Formal"],
  "/items?category=Pants": ["Long Pants", "Sweat Pants", "Shorts", "Swimwear"],
  "/items?category=Shoes": ["Athletic", "Professional", "Casual", "Walking"],
  "/items?category=Accessories": ["Hats", "Wallets", "Belts"],
}

// this will become by default DATA when importing in fetch file
export default {
  "/daily": Array.from({ length: 5 }, getWeatherItem),
  "/hourly": Array.from({ length: 24 }, getWeatherItem),
  ...categories
};

// otherwise we should do
/*
const DATA = {
  .......
}

export default DATA;
*/
