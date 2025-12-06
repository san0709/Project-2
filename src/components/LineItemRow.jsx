import React from 'react';

const LineItemRow = ({ item, index, onChange, onRemove }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(index, name, value);
    };

    const amount = (item.quantity * item.rate).toFixed(2);

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-2">
                <input
                    type="text"
                    name="description"
                    value={item.description}
                    onChange={handleChange}
                    placeholder="Item Description"
                    className="w-full bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded text-gray-700"
                />
            </td>
            <td className="py-4 px-2 w-24">
                <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                    min="1"
                    className="w-full bg-transparent p-2 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded text-gray-700"
                />
            </td>
            <td className="py-4 px-2 w-32">
                <input
                    type="number"
                    name="rate"
                    value={item.rate}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full bg-transparent p-2 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded text-gray-700"
                />
            </td>
            <td className="py-4 px-2 w-32 text-right font-medium text-gray-900">
                ${amount}
            </td>
            <td className="py-4 px-2 w-12 text-center">
                <button
                    onClick={() => onRemove(index)}
                    className="text-red-400 hover:text-red-600 transition-colors p-1 rounded-full hover:bg-red-50"
                    title="Remove Item"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default LineItemRow;
