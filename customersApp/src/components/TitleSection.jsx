const TitleSection = ({ count }) => (
  <div className="title-section">
    <h5 className="title">All Customers</h5>
    <span className="count-badge">{count.toLocaleString()}</span>
   
  </div>
);

export default TitleSection;
