import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

import { getNews } from '../../api-calls';
import mockData from '../../mock-data';

const App = () => {
  const [topNews, setTopNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setTopNews(mockData);
    // getNews()
    // .then(data => data.status === 'ok' ? setTopNews(data.articles) : setError(data.message));
  }, []);

  return (
    <Switch>
      <Route exact path='/' render={() => {
        return (
          <main>
            <header>
              <h1 className='news'>News</h1>
              <Search />
            </header>
            <Articles articles={topNews}/>
          </main>
        );
      }}/>
    </Switch>
  );
};

export default App;