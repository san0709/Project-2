import React from 'react';
import ClientDetails from './ClientDetails';
import LineItemTable from './LineItemTable';
import TotalsSummary from './TotalsSummary';

const InvoiceForm = ({
    data,
    onClientChange,
    onAddItem,
    onUpdateItem,
    onRemoveItem,
    onTaxChange
}) => {
    return (
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-xl max-w-4xl mx-auto min-h-[1000px] flex flex-col relative overflow-hidden ring-1 ring-gray-100">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            <header className="flex justify-between items-start mb-12 mt-4">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">INVOICE</h1>
                    <p className="text-gray-500 mt-1"># {data.clientDetails.invoiceNumber || '001'}</p>
                </div>
                <div className="text-right">
                    {/* Placeholder Logo */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold mb-2 ml-auto">
                        LOGO
                    </div>
                    <p className="font-semibold text-gray-800">Your Company Name</p>
                    <p className="text-gray-500 text-sm">123 Business St.</p>
                    <p className="text-gray-500 text-sm">City, State, 12345</p>
                </div>
            </header>

            <ClientDetails
                details={data.clientDetails}
                onChange={onClientChange}
            />

            <LineItemTable
                items={data.items}
                addItem={onAddItem}
                updateItem={onUpdateItem}
                removeItem={onRemoveItem}
            />

            <TotalsSummary
                items={data.items}
                taxRate={data.taxRate}
                onTaxChange={onTaxChange}
            />

            <div className="mt-auto pt-12 text-gray-500 text-sm">
                <h4 className="font-semibold text-gray-700 mb-2">Notes</h4>
                <textarea
                    placeholder="Thank you for your business! Payment is due within 30 days."
                    className="w-full bg-transparent border-none resize-none focus:ring-0 text-gray-500 p-0"
                    rows="2"
                />
            </div>
        </div>
    );
};

export default InvoiceForm;
