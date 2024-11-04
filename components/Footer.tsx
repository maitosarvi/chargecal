import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer p-4 rounded-lg shadow-lg w-full max-w-lg mx-auto text-center mt-4">
        <div className="container mx-auto">
          <p className="text-gray-600">© {new Date().getFullYear()} Tuomas Viertamo</p>
          <p className="text-gray-100"></p>
        </div>
      </footer>
    );
};

export default Footer;