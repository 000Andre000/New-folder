
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
