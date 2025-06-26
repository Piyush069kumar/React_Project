import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center bg-gray-900 text-emerald-500'>
      <h1 className='text-3xl font-bold mt-[5rem] mb-6'>Random Quote Generator</h1>
      <div>
          <QuoteGenerator />
      </div>
      
    </div>
  );
};

export default App;
