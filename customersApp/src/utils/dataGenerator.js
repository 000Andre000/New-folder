export const generateCustomers = (count) => {
  const customers = [];
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'David Brown'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'company.com'];
  const addedByList = ['Kartikey Mishra', 'Sarah Johnson', 'Mike Davis', 'Emma Wilson'];
  
  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const email = `${name.toLowerCase().replace(' ', '.')}.${i}@${domains[i % domains.length]}`;
    customers.push({
      id: i,
      name,
      phone: `+91760000${String(i).padStart(4, '0')}`,
      email,
      score: Math.floor(Math.random() * 50) + 1,
      lastMessageAt: new Date(2024, 6, 12, 12, 45).toISOString(),
      addedBy: addedByList[i % addedByList.length],
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f97316&color=fff`
    });
  }
  return customers;
};
