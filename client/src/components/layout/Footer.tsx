import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-lg">Rudra Vaishnav</p>
            <p className="text-gray-400">Computer Engineering @ Purdue</p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Rudravaish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rudra-vaishnav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
            <a
              href="mailto:rvaishna@purdue.edu"
              className="text-gray-300 hover:text-white transition"
            >
              <i className="ri-mail-line text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rudra Vaishnav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
