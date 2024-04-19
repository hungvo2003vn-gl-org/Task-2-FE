import React, { useState, useEffect } from 'react';
import { RecordsTable } from '../components/table/index.js';
import handleSearch from '../api/handleSearch.js'

function HomePage({ onLogout }) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    
    const handleSubmit = async () => {
      await handleSearch({searchName, searchEmail, setSearchResults})
    };

    useEffect(() => {
      handleSubmit()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const updateSearchResults = (updatedRecords) => {
      setSearchResults(updatedRecords);
    };

    return (
      <div className="container mx-auto p-4">

        <div className="flex">
          <h1 className="text-3xl font-bold  mx-4">Home Page</h1>
          <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={onLogout}
            >
            Sign out
          </button>
        </div>
        

        <form className="max-w-lg mx-auto p-7 px-9 rounded-md bg-gray-200">
          <h1 className="text-3xl font-bold mb-4">Search Records</h1>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="Enter username"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="Enter email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
        <h2 className="text-xl font-semibold my-4">Search Results</h2>
        <RecordsTable records={searchResults} onUpdate={updateSearchResults} />
      </div>
    );
}

export default HomePage