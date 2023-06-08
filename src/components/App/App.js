import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

import { getNews, searchNews } from '../../api-calls';

const App = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getNews()
    .then(data => data.status === 'ok' ? setNews(data.articles.map((article, index) => ({...article, id: index}))) : setError(data.message));
  }, []);

  const handleSearch = searchTerm => {
    setSearched(true);
    setSearchTerm(searchTerm);
    searchNews(searchTerm)
    .then(data => data.status === 'ok' ? setSearch(data.articles.map((article, index) => ({...article, id: index}))) : setError(data.message));
  };

  const resetSearch = () => {
    setSearch([]);
    setSearchTerm('');
    setSearched(false);
  };

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <main>
            <header>
              <h1 className='news' onClick={(resetSearch)}>News</h1>
              <h2>{searched ? `Results for: "${searchTerm}"` : 'Top Stories'}</h2>
              <Search handleSearch={handleSearch}/>
            </header>
            <Articles articles={searched ? search : news} error={error}/>
          </main>
        );
      }}/>
      <Route exact path='/article/:id' render={({ match }) => {
        let article;

        if (!searched) {
          article = news.find(article => article.id === Number(match.params.id));
        } else {
          article = search.find(article => article.id === Number(match.params.id));
        };
        
        return (
        <main>
          <header>
            <NavLink to='/' className='news'>News</NavLink>
            <h2 className='detail-date'>{`${article.publishedAt[5]}${article.publishedAt[6]}/${article.publishedAt[8]}${article.publishedAt[9]}/${article.publishedAt[0]}${article.publishedAt[1]}${article.publishedAt[2]}${article.publishedAt[3]}`}</h2>
          </header>
          <ArticleInfo article={article}/>
        </main>
        );
      }}/>
    </Switch>
  );
};

export default App;