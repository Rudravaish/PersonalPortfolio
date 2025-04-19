const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src="/assets/profile.jpg" 
                alt="Rudra Vaishnav" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed mb-6">
              I'm a Computer Engineering student at Purdue with a passion for tech-driven impact. 
              I build tools like MediMatch AI to solve real-world problems and mentor younger students in coding.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <i className="ri-building-line text-primary text-xl"></i>
                <span>Purdue University</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-graduation-cap-line text-primary text-xl"></i>
                <span>Computer Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-code-box-line text-primary text-xl"></i>
                <span>AI Development</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-user-voice-line text-primary text-xl"></i>
                <span>STEM Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
