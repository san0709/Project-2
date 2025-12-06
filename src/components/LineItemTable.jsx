import React from 'react';
import LineItemRow from './LineItemRow';

const LineItemTable = ({ items, addItem, updateItem, removeItem, isPdfMode }) => {
    return (
        <div className="mb-8">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-sm font-semibold text-gray-600 border-b-2 border-gray-200">
                        <th className="py-3 px-2">Description</th>
                        <th className="py-3 px-2 text-right">Quantity</th>
                        <th className="py-3 px-2 text-right">Rate</th>
                        <th className="py-3 px-2 text-right">Amount</th>
                        <th className="py-3 px-2 w-12"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <LineItemRow
                            key={index}
                            index={index}
                            item={item}
                            onChange={updateItem}
                            onRemove={removeItem}
                            isPdfMode={isPdfMode}
                        />
                    ))}
                </tbody>
            </table>

            {!isPdfMode && (
                <button
                    onClick={addItem}
                    className="mt-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors px-2 py-1 rounded hover:bg-indigo-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Add Line Item
                </button>
            )}
        </div>
    );
};

export default LineItemTable;
