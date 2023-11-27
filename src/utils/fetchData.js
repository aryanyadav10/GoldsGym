export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a87c3ec798mshe4e8c8f83a732e3p12548fjsn8ac8b742a32b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a87c3ec798mshe4e8c8f83a732e3p12548fjsn8ac8b742a32b",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
