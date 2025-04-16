import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-neutral">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Project Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img 
                src="/assets/medimatch_screenshot.png" 
                alt="MediMatch AI" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">MediMatch AI</h3>
              <p className="text-gray-600 mb-4">
                AI-powered healthcare assistant built with Streamlit and a custom LLM (MedLLaMA 2).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">AI</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Streamlit</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Python</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Healthcare</span>
              </div>
              <a 
                href="https://github.com/Rudravaish/MediMatch-AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent transition"
              >
                <i className="ri-github-fill mr-1"></i> GitHub Repository
              </a>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-primary flex items-center justify-center">
              <i className="ri-code-s-slash-line text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Helping Youth Code</h3>
              <p className="text-gray-600 mb-4">
                A nonprofit initiative where I led 20+ tutors teaching Python to kids.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Education</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Python</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Mentoring</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Leadership</span>
              </div>
              <p className="text-sm text-gray-500">
                <i className="ri-calendar-line mr-1"></i> Sep 2022 – Jun 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
