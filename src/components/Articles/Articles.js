import './Articles.css';

import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles }) => {
  const articleCards = articles.map((article, index) => <ArticleCard key={index} id={index} author={article.author} title={article.title} description={article.description} image={article.urlToImage} date={article.publishedAt} />);
  
  return (
    <section className='articles'>
      {articleCards}
    </section>
  );
};

export default Articles;