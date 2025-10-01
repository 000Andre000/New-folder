// const TableRow = ({ customer, formatDate }) => (
//   <tr className="table-row">
//     <td className="td">
//       <input type="checkbox" className="checkbox" />
//     </td>
//     <td className="td">
//       <div className="customer-cell">
//         <img src={customer.avatar} alt={customer.name} className="avatar" />
//         <div className="customer-info">
//           <div className="customer-name">{customer.name}</div>
//           <div className="customer-phone">{customer.phone}</div>
//         </div>
//       </div>
//     </td>
//     <td className="td">{customer.score}</td>
//     <td className="td">{customer.email}</td>
    
//     <td className="td">{formatDate(customer.lastMessageAt)}</td>
//     <td className="td">
//       <div className="added-by-cell">
//         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//           <circle cx="7" cy="7" r="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1"/>
//           <path d="M7 4.5v5M4.5 7h5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//         <span>{customer.addedBy}</span>
//       </div>
//     </td>
//   </tr>
// );

// export default TableRow;

import Profile from '../assets/test_user-3 3.svg'
const TableRow = ({ customer, formatDate }) => (
  <tr className="table-row">
    {/* Checkbox */}
    <td className="td">
      <input type="checkbox" className="checkbox" />
    </td>

    {/* Customer Info */}
    <td className="td">
      <div className="customer-cell">
        <img src={customer.avatar} alt={customer.name} className="avatar" />
        <div className="customer-info">
          <div className="customer-name">{customer.name}</div>
          <div className="customer-phone">{customer.phone}</div>
        </div>
      </div>
    </td>

    {/* Score */}
    <td className="td">{customer.score}</td>

    {/* Email */}
    <td style={{paddingRight:'480px'}} className="td">{customer.email}</td>
    
   {/* Last Message At */}
<td className="td" style={{textAlign:'right',fontWeight:'600'}}>
  {formatDate(customer.lastMessageAt)}
</td>


<td className="td" style={{textAlign:'right'}} >
  <div>
    <img src={Profile} alt="Added By" className="added-by-icon" />
    <span>{customer.addedBy}</span>
  </div>
</td>

  </tr>
);

export default TableRow;
