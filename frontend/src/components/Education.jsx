import React, { useState } from "react";
import { GraduationCap, Award, Briefcase, Eye } from "lucide-react";
import CertificateModal from "./CertificateModal";

const Education = ({ data }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificateData = {
    "Tricentis Tosca Fundamentals - Automating Web Application Testing (AS1)": {
      title: "Tricentis Tosca Fundamentals - Automating Web Application Testing (AS1)",
      issuer: "Tricentis Certified",
      pdfUrl: "/images/certificates/tosca-cert.pdf",
      fileName: "tosca-certification.pdf"
    },
    "Project Internship - Cloud Infrastructure Automation for Test Environments": {
      title: "Project Internship - Cloud Infrastructure Automation for Test Environments",
      issuer: "Tata Consultancy Services Limited",
      pdfUrl: "/images/certificates/internship-cert.pdf",
      fileName: "tcs-internship-certificate.pdf"
    }
  };

  const handleViewCertificate = (item) => {
    const certData = certificateData[item.degree];
    if (certData) {
      setSelectedCertificate(certData);
      setIsModalOpen(true);
    }
  };
  const getIcon = (type) => {
    switch (type) {
      case 'degree':
        return <GraduationCap className="text-blue-600" size={24} />;
      case 'certification':
        return <Award className="text-green-600" size={24} />;
      case 'internship':
        return <Briefcase className="text-purple-600" size={24} />;
      default:
        return <Award className="text-green-600" size={24} />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'degree':
        return 'bg-blue-100';
      case 'certification':
        return 'bg-green-100';
      case 'internship':
        return 'bg-purple-100';
      default:
        return 'bg-green-100';
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'degree':
        return 'bg-blue-100 text-blue-800';
      case 'certification':
        return 'bg-green-100 text-green-800';
      case 'internship':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getDisplayType = (type) => {
    switch (type) {
      case 'degree':
        return 'Degree';
      case 'certification':
        return 'Certification';
      case 'internship':
        return 'Internship';
      default:
        return 'Certification';
    }
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${getBgColor(item.type)}`}>
                  {getIcon(item.type)}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.institution}</p>
                  
                  {item.details && (
                    <p className="text-sm text-gray-500 mb-3">{item.details}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(item.type)}`}>
                      {getDisplayType(item.type)}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;