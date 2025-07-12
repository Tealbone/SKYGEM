import React from "react";
import { APP_TITLE } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-top mt-12 py-6 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {APP_TITLE}. All rights reserved.
          Powered by Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
