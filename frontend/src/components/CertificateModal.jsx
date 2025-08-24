import React from "react";
import { X, Download, ExternalLink } from "lucide-react";

const CertificateModal = ({ isOpen, onClose, certificateData }) => {
  if (!isOpen || !certificateData) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificateData.pdfUrl;
    link.download = certificateData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open(certificateData.pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {certificateData.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{certificateData.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Certificate Document
              </h4>
              <p className="text-gray-600 text-sm">
                Click the buttons below to view or download the certificate
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleViewInNewTab}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <ExternalLink size={20} />
                <span>View Certificate</span>
              </button>
              
              <button
                onClick={handleDownload}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Download size={20} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <p>File: {certificateData.fileName}</p>
              <p>Format: PDF Document</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;