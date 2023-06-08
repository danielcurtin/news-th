import './ArticleInfo.css';

const ArticleInfo = ({ article }) => {
  return (
    <section className='article-info'>
      <img src={article.urlToImage} alt={`${article.title} image`}></img>
      <div className='article-details'>
        <h2>{article.title}</h2>
        <h3>{article.author || 'Author Unknown'}</h3>
        <p className='article-content'>{(article.content || article.description) || 'No information found'}</p>
        {article.url ? <p className='article-link'>See the full article <a target='_blank' href={article.url}>here</a></p> : <p className='article-link'>No article link provided</p>}
      </div>
    </section>
  );
};

export default ArticleInfo;