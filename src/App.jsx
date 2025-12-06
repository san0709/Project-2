import React, { useState, useRef } from 'react';
import InvoiceForm from './components/InvoiceForm';
import PDFExportButton from './components/PDFExportButton';

const App = () => {
  const invoiceRef = useRef(null);

  const [companyDetails, setCompanyDetails] = useState({
    name: 'Your Company Name',
    address: '123 Business St.',
    cityStateZip: 'City, State, 12345',
  });

  const [clientDetails, setClientDetails] = useState({
    clientName: 'Acme Corp',
    clientAddress: '123 Innovation Dr.\nTech City, CA 94000',
    invoiceNumber: 'INV-2023-001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  });

  const [items, setItems] = useState([
    { id: 1, description: 'Web Development Services', quantity: 1, rate: 150.00 },
    { id: 2, description: 'UI/UX Design', quantity: 5, rate: 85.00 },
  ]);

  const [taxRate, setTaxRate] = useState(10);

  const handleClientChange = (name, value) => {
    setClientDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (name, value) => {
    setCompanyDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = () => {
    setItems(prev => [
      ...prev,
      { id: Date.now(), description: '', quantity: 1, rate: 0 }
    ]);
  };

  const handleRemoveItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index, field, value) => {
    setItems(prev => {
      const newItems = [...prev];
      newItems[index] = { ...newItems[index], [field]: value };
      return newItems;
    });
  };

  const [isPdfMode, setIsPdfMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">

      {/* Top Controls / Header */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Invoice Builder</h1>
          <p className="text-gray-500">Create, customize, and download your invoice.</p>
        </div>
        <div>
          <PDFExportButton
            targetRef={invoiceRef}
            fileName={`Invoice-${clientDetails.invoiceNumber}.pdf`}
            onPdfModeChange={setIsPdfMode}
          />
        </div>
      </div>

      {/* Invoice Container - This is what gets printed */}
      <div className="max-w-[210mm] mx-auto transition-transform hover:scale-[1.01] duration-300 ease-in-out">
        <div ref={invoiceRef}>
          <InvoiceForm
            data={{ clientDetails, items, taxRate, companyDetails }}
            isPdfMode={isPdfMode}
            onClientChange={handleClientChange}
            onCompanyChange={handleCompanyChange}
            onAddItem={handleAddItem}
            onUpdateItem={handleUpdateItem}
            onRemoveItem={handleRemoveItem}
            onTaxChange={setTaxRate}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center text-gray-400 text-sm">
        <p>Built with React & Tailwind CSS</p>
      </div>

    </div>
  );
};

export default App;
