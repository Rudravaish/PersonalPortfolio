import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resume = () => {
  // Google Drive link for the resume
  const resumeUrl = "https://drive.google.com/file/d/14dtndnEIsyHqDOAu0ZXVykgi1N8RuTy5/view?usp=sharing";
  // For Google Drive embed
  const embedUrl = "https://drive.google.com/file/d/14dtndnEIsyHqDOAu0ZXVykgi1N8RuTy5/preview";

  return (
    <section id="resume" className="min-h-screen bg-neutral">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-xl font-semibold mb-4 md:mb-0">Rudra Vaishnav - Resume</h3>
              <div className="flex gap-4">
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-accent transition"
                >
                  <i className="ri-eye-line mr-2"></i> View
                </a>
                <a 
                  href={resumeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition"
                >
                  <i className="ri-download-line mr-2"></i> Download
                </a>
              </div>
            </div>
            
            <div className="w-full h-[600px] border border-gray-200 rounded-lg bg-gray-50">
              <iframe 
                src={embedUrl} 
                className="w-full h-full" 
                title="Resume PDF"
                style={{ border: 'none' }}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
