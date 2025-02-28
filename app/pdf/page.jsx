"use client"; // If using App Router, mark as client component

import { useState } from "react";

const DownloadPDF = () => {
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    setLoading(true);
    
    const htmlContent = `<html>
      <head><title>Sample PDF</title></head>
      <body><h1>Hello, PDF!</h1><p>This is a test PDF document.</p></body>
    </html>`;

    try {
      const response = await fetch("/api/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent }),
      });

      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "document.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={downloadPDF} disabled={loading}>
        {loading ? "Generating PDF..." : "Download PDF"}
      </button>
    </div>
  );
};

export default DownloadPDF;
