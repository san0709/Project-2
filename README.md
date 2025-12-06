# Invoice Builder Application

A modern, responsive React application for creating and exporting professional PDF invoices. Built with Vite, Tailwind CSS, and jsPDF.

## Features

*   **Dynamic Invoice Generation**: Real-time updates as you edit client details, company info, and line items.
*   **PDF Export**: High-quality PDF generation using `html2canvas` and `jsPDF` with a clean, vector-like logo.
*   **Responsive Design**: Works on desktop and mobile.
*   **Auto-Calculations**: Automatic calculation of line item totals, subtotal, tax, and grand total.

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   **Node.js**: Download and install from [nodejs.org](https://nodejs.org/). (LTS version recommended).
*   **npm**: Comes bundled with Node.js.

## Installation

1.  Open your terminal or command prompt.
2.  Navigate to the project directory:
    ```bash
    cd c:\Users\sandy\OneDrive\Desktop\Project-2
    ```
    *(Or wherever you have placed the project folder)*
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The terminal will show a local URL (usually `http://localhost:5173/`). Open this link in your browser to use the application.

## Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## File Structure

*   `src/App.jsx`: Main application logic and state management.
*   `src/components/`:
    *   `InvoiceForm.jsx`: The main layout of the invoice, including the header and logo.
    *   `ClientDetails.jsx`: Input fields for client and invoice metadata.
    *   `LineItemTable.jsx`: Table for managing invoice items.
    *   `TotalsSummary.jsx`: Calculation and display of totals and tax.
    *   `PDFExportButton.jsx`: Logic for generating and downloading the PDF.
    *   `LineItemRow.jsx`: Individual row component for the item table.
*   `src/index.css`: Global styles and Tailwind imports.

## Making Changes

### Editing the Logo
The logo is currently a pure CSS implementation to ensure high quality in PDFs. To change it, edit `src/components/InvoiceForm.jsx`. Look for the section commented `/* CSS-based Logo ... */`.

### Customizing Styles
The project uses Tailwind CSS. You can modify classes directly in the JSX files or add custom styles in `src/index.css`.

### PDF Export Logic
The PDF generation logic is handled in `src/components/PDFExportButton.jsx`. It temporarily switches the app to a "PDF Mode" (read-only text view) to capture a clean image using `html2canvas`.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [jsPDF](https://github.com/parallax/jsPDF)
*   [html2canvas](https://html2canvas.hertzen.com/)
