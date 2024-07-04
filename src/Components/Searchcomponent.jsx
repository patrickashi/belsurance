import React, { useState } from 'react';

const Searchcomponent = () => {
  const [query, setQuery] = useState('');
  const [data] = useState([
    'notifications',
    'faq',
    'user policy',
    'Partners',
    'address',
    'values',
    'Members',
    'email',
  ]); // Sample data

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        placeholder="Search..."
      />
      <ul className="w-full max-w-md">
        {filteredData.map((item, index) => (
          <li key={index} className="p-2 border-b border-gray-300 text-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchcomponent;
