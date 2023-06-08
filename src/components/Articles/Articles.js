import './Articles.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles }) => {  
  return (
    <section className='articles'>
      {articles.length ? articles.map(article => <ArticleCard key={article.id} id={article.id} author={article.author} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />) : <h1>No articles found</h1>}
    </section>
  );
};

export default Articles;