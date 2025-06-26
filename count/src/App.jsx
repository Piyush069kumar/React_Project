import React from 'react';
import Counter from './components/Counter'

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-emerald-500 '>

      <div className='mt-10 p-8 bg-gray-800 text-white rounded-2xl shadow-2xl w-full max-w-md text-center'>
         <h2 className="text-2xl font-bold mb-6 text-emerald-400 ">Smart Counter</h2>
        <Counter/>
      </div>
           
    </div>
  );
};

export default App;
