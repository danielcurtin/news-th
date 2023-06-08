import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../Search/Search';
import Articles from '../Articles/Articles';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

import { getNews } from '../../api-calls';
import mockData from '../../mock-data';

const App = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    
    setNews(mockData.map((article, index) => ({...article, id: index})));
    // getNews()
    // .then(data => data.status === 'ok' ? setNews(data.articles) : setError(data.message));
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
            <Articles articles={news}/>
          </main>
        );
      }}/>
      <Route exact path='/article/:id' render={({ match }) => {
        const article = news.find(article => article.id === Number(match.params.id))
        
        return (
        <main>
          <header>
            <h1 className='news'>News</h1>
            <h2 className='detail-date'>{`${article.publishedAt[5]}${article.publishedAt[6]}/${article.publishedAt[8]}${article.publishedAt[9]}/${article.publishedAt[0]}${article.publishedAt[1]}${article.publishedAt[2]}${article.publishedAt[3]}`}</h2>
          </header>
          <ArticleInfo article={article}/>
        </main>
        ) 
      }}/>
    </Switch>
  );
};

export default App;