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
    onTaxChange,
    onCompanyChange,
    isPdfMode
}) => {
    const handleCompanyEdit = (e) => {
        const { name, value } = e.target;
        onCompanyChange(name, value);
    };
    return (
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-xl max-w-4xl mx-auto min-h-[1000px] flex flex-col relative overflow-hidden ring-1 ring-gray-100">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <header className="flex justify-between items-start mb-12 mt-4">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">INVOICE</h1>
                    <p className="text-gray-500 mt-1"># {data.clientDetails.invoiceNumber || '001'}</p>
                </div>
                <div className="text-right w-1/3 text-right">
                    {/* CSS-based Logo for perfect vector quality - Explicit centering */}
                    <div
                        className="ml-auto mb-2 rounded-2xl bg-indigo-600 text-white shadow-md select-none"
                        style={{
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center' // Explicitly override parent's text-right
                        }}
                    >
                        <div style={{ fontSize: '10px', fontWeight: '800', lineHeight: '1', width: '100%' }}>INVOICE</div>
                        <div style={{ fontSize: '10px', fontWeight: '800', lineHeight: '1', width: '100%', marginTop: '2px' }}>MAKER</div>
                    </div>

                    {isPdfMode ? (
                        <>
                            <div className="text-right font-semibold text-gray-800 font-sans">{data.companyDetails.name}</div>
                            <div className="text-right text-gray-500 text-sm font-sans whitespace-pre-wrap">{data.companyDetails.address}</div>
                            <div className="text-right text-gray-500 text-sm font-sans">{data.companyDetails.cityStateZip}</div>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={data.companyDetails.name}
                                onChange={handleCompanyEdit}
                                placeholder="Your Company Name"
                                className="w-full text-right font-semibold text-gray-800 bg-transparent h-auto leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1 placeholder-gray-400 font-sans"
                            />
                            <textarea
                                name="address"
                                value={data.companyDetails.address}
                                onChange={handleCompanyEdit}
                                placeholder="Company Address"
                                rows="2"
                                className="w-full text-right text-gray-500 text-sm bg-transparent h-auto leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1 placeholder-gray-300 resize-none font-sans"
                            />
                            <input
                                type="text"
                                name="cityStateZip"
                                value={data.companyDetails.cityStateZip}
                                onChange={handleCompanyEdit}
                                placeholder="City, State, Zip"
                                className="w-full text-right text-gray-500 text-sm bg-transparent h-auto leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1 placeholder-gray-300 font-sans"
                            />
                        </>
                    )}
                </div>
            </header>

            <ClientDetails
                details={data.clientDetails}
                onChange={onClientChange}
                isPdfMode={isPdfMode}
            />

            <LineItemTable
                items={data.items}
                addItem={onAddItem}
                updateItem={onUpdateItem}
                removeItem={onRemoveItem}
                isPdfMode={isPdfMode}
            />

            <TotalsSummary
                items={data.items}
                taxRate={data.taxRate}
                onTaxChange={onTaxChange}
                isPdfMode={isPdfMode}
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
