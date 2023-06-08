import './Search.css';
import { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  
  return (
    <div>
      <input type='text' className='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <button className='search' onClick={() => {
        handleSearch(search)
        setSearch('');
        }}>Search</button>
    </div>
  );
};

export default Search;