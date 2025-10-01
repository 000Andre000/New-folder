import FilterImg from '../assets/test_Filter.svg';
const FilterButton = ({ showFilters, onToggle }) => (
  <div className="filter-container">
    <button className="filter-button" onClick={onToggle}>
     <img src={FilterImg} alt="Filter" className="filter-icon" />
      Add Filters
    </button>
    
    {showFilters && (
      <div className="filter-dropdown">
        <div className="filter-option">Filter 1</div>
        <div className="filter-option">Filter 2</div>
        <div className="filter-option">Filter 3</div>
        <div className="filter-option">Filter 4</div>
      </div>
    )}
  </div>
);

export default FilterButton;
