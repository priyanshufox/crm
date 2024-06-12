import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [totalSpends, setTotalSpends] = useState('');
  const [visits, setVisits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ totalSpends, visits });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-white shadow-lg rounded-md">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Total Spends (Minimum): </label>
        <input
          type="number"
          value={totalSpends}
          onChange={(e) => setTotalSpends(e.target.value)}
          placeholder="Enter minimum spends"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Number of Visits (Minimum): </label>
        <input
          type="number"
          value={visits}
          onChange={(e) => setVisits(e.target.value)}
          placeholder="Enter minimum visits"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
