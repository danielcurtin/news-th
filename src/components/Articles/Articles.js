import './Articles.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles }) => {
  const articleCards = articles.map(article => <ArticleCard key={article.id} id={article.id} author={article.author} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />);
  
  return (
    <section className='articles'>
      {articleCards}
    </section>
  );
};

export default Articles;