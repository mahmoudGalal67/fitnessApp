export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '94c839fc00mshc9489ed6019cfc8p132ed9jsn479becdfdc00',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '94c839fc00mshc9489ed6019cfc8p132ed9jsn479becdfdc00',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
