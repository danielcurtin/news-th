import './Articles.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles, error }) => {
  return (
    <section className='articles'>
      {
      articles.length ? 
        articles.map(article => <ArticleCard key={article.id} id={article.id} author={article.author} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />) 
      : error ?
        <h1>Something went wrong, please try again later.</h1>
      :
        <h1>No articles found</h1>
      }
    </section>
  );
};

export default Articles;