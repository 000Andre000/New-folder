import SearchIcon from '../assets/test_Search-3.svg';

const SearchBar = ({ value, onChange }) => (
  <div className="search-container">
    <img src={SearchIcon} alt="Search" className="search-icon" />
    <input
      type="text"
      placeholder="Search Customers"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  </div>
);

export default SearchBar;
