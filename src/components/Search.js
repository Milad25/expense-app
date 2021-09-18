const Search = ({ searchValue, changeHandler }) => {
  return (
    <input
      type='text'
      value={searchValue}
      onChange={changeHandler}
      placeholder='search...'
    />
  );
};

export default Search;
