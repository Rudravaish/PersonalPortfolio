import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Rudra Vaishnav 👋</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Computer Engineering @ Purdue | AI Builder | STEM Educator
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="https://github.com/Rudravaish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <i className="ri-github-fill text-xl"></i>
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/rudra-vaishnav/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <i className="ri-linkedin-box-fill text-xl"></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://drive.google.com/file/d/14dtndnEIsyHqDOAu0ZXVykgi1N8RuTy5/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <i className="ri-file-text-line text-xl"></i>
            <span>Resume</span>
          </a>
        </div>
        
        <div className="w-full max-w-md mx-auto">
          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-gray-500">Scroll to learn more</span>
            </div>
          </div>
          <div className="text-center mt-6 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
