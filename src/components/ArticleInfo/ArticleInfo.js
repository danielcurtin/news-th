import './ArticleInfo.css';

const ArticleInfo = ({ article }) => {
  return (
    <section className='article-info'>
      <img src={article.urlToImage} alt={`${article.title} image`}></img>
      <div className='article-details'>
        <h2>{article.title}</h2>
        <h3>{article.author || 'Author Unknown'}</h3>
        <p>{(article.content || article.description) || 'No information found'}</p>
        <a target='_blank' href={article.url}>{article.url || 'No link provided'}</a>
      </div>
    </section>
  );
};

export default ArticleInfo;