import React from 'react';

const TotalsSummary = ({ items, taxRate, onTaxChange, isPdfMode }) => {
    const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.quantity || 0) * parseFloat(item.rate || 0)), 0);
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;

    return (
        <div className="flex justify-end mt-8">
            <div className="w-full md:w-1/3 space-y-3">
                <div className="flex justify-between items-center text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-gray-600">
                    <div className="flex items-center gap-2">
                        <span>Tax Rate</span>
                        {isPdfMode ? (
                            <div className="font-sans text-gray-700">
                                {taxRate}%
                            </div>
                        ) : (
                            <div className="relative w-20">
                                <input
                                    type="number"
                                    value={taxRate}
                                    onChange={(e) => onTaxChange(parseFloat(e.target.value) || 0)}
                                    className="w-full pl-2 pr-6 py-1 border border-gray-300 rounded text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm font-sans"
                                    min="0"
                                    step="0.1"
                                />
                                <span className="absolute right-2 top-1 text-gray-500 text-sm">%</span>
                            </div>
                        )}
                    </div>
                    <span className="font-medium">${taxAmount.toFixed(2)}</span>
                </div>

                <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default TotalsSummary;
