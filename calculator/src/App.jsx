import React, { useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  return (
    <div className={`h-screen w-screen flex flex-col items-center justify-center transition-colors duration-300 ${
      isDark ? 'bg-gray-100 text-black' : 'bg-black text-white'
    }`}>
      <h1 className="text-3xl font-bold mb-6">Calculator</h1>
      
      <Calculator isDark={isDark} />

      <button
        onClick={toggleTheme}
        className={`mt-6 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ${
          isDark ? 'bg-gray-300 text-black hover:bg-gray-400' : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
