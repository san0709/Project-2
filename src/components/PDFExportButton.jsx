import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFExportButton = ({ targetRef, fileName, onPdfModeChange }) => {
    const [loading, setLoading] = useState(false);

    const handleExport = async () => {
        if (!targetRef.current) return;
        setLoading(true);

        try {
            // Enable PDF View Mode (Text only, no inputs)
            if (onPdfModeChange) {
                onPdfModeChange(true);
                // Wait for React to render the changes
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            const element = targetRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
            });

            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(fileName || 'invoice.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Check console for details.');
        } finally {
            // Revert to Edit Mode
            if (onPdfModeChange) {
                onPdfModeChange(false);
            }
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={loading}
            className={`
        bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full 
        shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 
        flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed
        z-50
      `}
        >
            {loading ? (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
            )}
            {loading ? 'Generating...' : 'Download PDF'}
        </button>
    );
};

export default PDFExportButton;
