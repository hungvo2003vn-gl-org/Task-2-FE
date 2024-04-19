import React from 'react';
import handleUpdate from '../../api/handleUpdate.js'
import { FaEdit } from 'react-icons/fa';

export function RecordsTable({ records, onUpdate }) {
    
    const handleUpdateAll = async () => {
        await handleUpdate({records, setSearchResults: onUpdate})
    }

    const handleInputChange = (e, index, field) => {
        const updatedRecords = [...records]
        updatedRecords[index][field] = e.target.value
        onUpdate(updatedRecords)
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Username</th>
                        <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Email</th>
                        <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Birthdate</th>
                        <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                            <button type="button" onClick={handleUpdateAll} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                                UPDATE ALL
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {records.map((record, index) => (

                        <tr key={record.id}>

                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 border-x text-center flex">
                                <input
                                    type="text"
                                    value={record.username}
                                    onChange={(e) => handleInputChange(e, index, 'username')}
                                    className="bg-gray-200 focus:outline-none w-full p-2"
                                />
                                <FaEdit className="text-gray-400 ml-1" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 border-x text-center">{record.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 border-x text-center">
                                <input
                                    type="date"
                                    value={record.birthdate.split('T')[0]}
                                    onChange={(e) => handleInputChange(e, index, 'birthdate')}
                                    className="border-none bg-transparent focus:outline-none w-full"
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
