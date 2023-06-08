function getNews() {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=29b06f4826d24d779a8d498bac5548aa`)
  .then(res => res.json());
};

function searchNews(search) {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=29b06f4826d24d779a8d498bac5548aa`)
  .then(res => res.json());
};

export { getNews, searchNews };