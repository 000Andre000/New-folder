import SearchIcon from '../assets/test_Search-3.svg';

const SearchBar = ({ value, onChange }) => (
  <div className="search-container">
    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="search-icon">
      <path d="M7 13A6 6 0 107 1a6 6 0 000 12zM15 15l-3.35-3.35" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> */}
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
