import React from "react";
import { APP_TITLE } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-700">
            <span role="img" aria-label="plane icon" className="mr-2">
              ✈️
            </span>
            {APP_TITLE}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-indigo-600 dark:text-indigo-400 hidden sm:block">
              Tu planificadora de viajes con IA favorita
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
