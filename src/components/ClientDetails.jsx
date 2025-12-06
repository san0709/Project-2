import React from 'react';

const ClientDetails = ({ details, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="flex-1 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Bill To</h3>
                <div className="space-y-2">
                    <input
                        type="text"
                        name="clientName"
                        value={details.clientName}
                        onChange={handleChange}
                        placeholder="Client Name"
                        className="w-full text-xl font-bold bg-transparent border-b border-transparent hover:border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-300"
                    />
                    <textarea
                        name="clientAddress"
                        value={details.clientAddress}
                        onChange={handleChange}
                        placeholder="Client Address"
                        rows="3"
                        className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors resize-none text-gray-600 placeholder-gray-300"
                    />
                </div>
            </div>

            <div className="flex-1 md:max-w-xs space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Invoice Details</h3>
                <div className="grid grid-cols-2 gap-4 items-center">
                    <label className="text-gray-600 font-medium">Invoice #</label>
                    <div className="relative">
                        <span className="absolute left-2 top-2 text-gray-400">#</span>
                        <input
                            type="text"
                            name="invoiceNumber"
                            value={details.invoiceNumber}
                            onChange={handleChange}
                            className="w-full pl-6 pr-2 py-1 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right font-mono"
                        />
                    </div>

                    <label className="text-gray-600 font-medium">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={details.date}
                        onChange={handleChange}
                        className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right"
                    />

                    <label className="text-gray-600 font-medium">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={details.dueDate}
                        onChange={handleChange}
                        className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
