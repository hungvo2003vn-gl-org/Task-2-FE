import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}