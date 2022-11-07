import React from 'react';
import { SearchIcon } from '../shared/AppIcons';


const SearchForm = ({ handleSubmit, handleChange, searchString}) => {
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input 
      placeholder="Search" 
      type='text' 
      name='searchString' 
      required
      onChange={handleChange}
      value={searchString} />
      <button type='submit'><button type="submit">
  <SearchIcon height="1.25rem" width="1.25rem" />
</button>
</button>
    </form>
  );
}

export default SearchForm;