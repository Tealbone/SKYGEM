import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="mt-4 text-lg font-semibold text-indigo-700 dark:text-indigo-400">
        Crafting your adventure...
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Please wait a moment.
      </p>
    </div>
  );
};

export default LoadingSpinner;
