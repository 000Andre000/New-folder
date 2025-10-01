const TableHeader = ({ sortConfig, onSort }) => {
  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return null;
    return <span className="sort-icon">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <thead className="table-header">
      <tr>
        <th className="th" style={{ width: '40px'}}>
          <input type="checkbox" className="checkbox" />
        </th>
        <th className="th sortable" style={{ width: '250px', color:'grey', fontWeight:'600',fontSize:'14px' }} onClick={() => onSort('name')}>
          Customer
          <SortIcon columnKey="name" />
        </th>
        <th className="th sortable" style={{ width: '100px',color:'grey', fontWeight:'600',fontSize:'14px'  }} onClick={() => onSort('score')}>
          Score
          <SortIcon columnKey="score" />
        </th>
        <th className="th" style={{ width: '250px',color:'grey', fontWeight:'600',fontSize:'14px'  }}>Email</th>

        <th className="th sortable right" style={{ width: '200px' , textAlign:'right',fontSize:'14px' }} onClick={() => onSort('lastMessageAt')}>
          Last message sent at
          <SortIcon columnKey="lastMessageAt" />
        </th>
        <th className="th sortable right" style={{textAlign:'right',color:'grey', fontWeight:'600',fontSize:'14px' }} onClick={() => onSort('addedBy')}>
          Added by
          <SortIcon columnKey="addedBy" />
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
