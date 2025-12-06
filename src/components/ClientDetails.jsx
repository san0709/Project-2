import React from 'react';

const ClientDetails = ({ details, onChange, isPdfMode }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="flex-1 space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Bill To</h3>
                <div className="space-y-2">
                    {isPdfMode ? (
                        <>
                            <div className="text-xl font-bold font-sans text-gray-800">{details.clientName}</div>
                            <div className="text-gray-600 font-sans whitespace-pre-wrap">{details.clientAddress}</div>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="clientName"
                                value={details.clientName}
                                onChange={handleChange}
                                placeholder="Client Name"
                                className="w-full text-xl font-bold bg-transparent border-b border-transparent h-auto leading-tight hover:border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-300 font-sans"
                            />
                            <textarea
                                name="clientAddress"
                                value={details.clientAddress}
                                onChange={handleChange}
                                placeholder="Client Address"
                                rows="3"
                                className="w-full bg-transparent border-b border-transparent h-auto leading-tight hover:border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors resize-none text-gray-600 placeholder-gray-300 font-sans"
                            />
                        </>
                    )}
                </div>
            </div>

            <div className="flex-1 md:max-w-xs space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Invoice Details</h3>
                <div className="grid grid-cols-2 gap-4 items-center">
                    <label className="text-gray-600 font-medium">Invoice #</label>
                    <div className="relative">
                        {isPdfMode ? (
                            <div className="text-right font-mono text-gray-800">#{details.invoiceNumber}</div>
                        ) : (
                            <>
                                <span className="absolute left-2 top-2 text-gray-400">#</span>
                                <input
                                    type="text"
                                    name="invoiceNumber"
                                    value={details.invoiceNumber}
                                    onChange={handleChange}
                                    className="w-full pl-6 pr-2 py-1 bg-gray-50 border border-gray-200 h-auto leading-tight rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right font-mono"
                                />
                            </>
                        )}
                    </div>

                    <label className="text-gray-600 font-medium">Date</label>
                    {isPdfMode ? (
                        <div className="text-right font-sans text-gray-800">{details.date}</div>
                    ) : (
                        <input
                            type="date"
                            name="date"
                            value={details.date}
                            onChange={handleChange}
                            className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right"
                        />
                    )}

                    <label className="text-gray-600 font-medium">Due Date</label>
                    {isPdfMode ? (
                        <div className="text-right font-sans text-gray-800">{details.dueDate}</div>
                    ) : (
                        <input
                            type="date"
                            name="dueDate"
                            value={details.dueDate}
                            onChange={handleChange}
                            className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none text-right"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
