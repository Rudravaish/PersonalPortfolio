const Skills = () => {
  const techSkills = [
    { name: "Python", icon: "ri-python-fill" },
    { name: "HTML/CSS/JS", icon: "ri-html5-fill" },
    { name: "Streamlit", icon: "ri-dashboard-fill" },
    { name: "GitHub", icon: "ri-github-fill" },
    { name: "Replit", icon: "ri-terminal-box-fill" }
  ];

  const softSkills = [
    "Public Speaking",
    "Mentoring",
    "Curriculum Dev",
    "Teamwork"
  ];

  return (
    <section id="skills" className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="ri-code-box-line text-primary mr-2"></i>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-md"
                >
                  <i className={`${skill.icon} text-4xl text-primary mb-2`}></i>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="ri-team-fill text-primary mr-2"></i>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="border border-blue-200 rounded-lg p-4 text-center transition-all hover:bg-blue-50 hover:border-primary"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
