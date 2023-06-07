import './ArticleCard.css';

import { NavLink } from 'react-router-dom';

const ArticleCard = ({ id, author, title, description, image, date }) => {
  
  const formatDate = () => `${date[5]}${date[6]}/${date[8]}${date[9]}/${date[0]}${date[1]}${date[2]}${date[3]}`;
  
  return (
    <NavLink to={`/article/${id}`} className='article-card'>
      <img src={image} alt={`${title} image`}></img>
      <h2>{title}</h2>
      <h3>{author || 'Author Unknown'}</h3>
      <p>{description || 'No description'}</p>
      <h2>{formatDate()}</h2>
    </NavLink>
  );
};

export default ArticleCard;