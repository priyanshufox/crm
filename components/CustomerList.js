import React from 'react';

const CustomerList = ({ customers }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <ul className="space-y-4">
        {customers.map(customer => (
          <li key={customer._id} className="p-4 bg-white shadow-lg rounded-md">
            <div className="flex justify-between items-center">
              <span className="font-medium">{customer.name}</span>
              <div>
                <span className="mr-4">Spends: INR {customer.totalSpends}</span>
                <span>Visits: {customer.visits}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
