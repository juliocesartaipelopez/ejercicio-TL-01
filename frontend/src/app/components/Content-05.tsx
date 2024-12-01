import React from 'react';

export const Content05 = () => {
  return (
    <div>
      <div className="text-center w-full px-56 mx-auto">
        <h1 className="font-bold text-2xl">
          Your Exploration Starts Here
        </h1>
        <p className="text-gray-400 py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id, quibusdam quod odit ipsam doloremque quas autem dolorum optio ratione molestiae consectetur perferendis sint! Illo est ducimus amet neque quia?
          Aliquid quam quis nisi quae nihil odio ab.
        </p>
      </div>

      <div className="relative w-full h-screen">
        <img 
          src="pj-11.png" 
          alt="Exploration" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-[#f0faff] opacity-90"></div>
      </div>
    </div>
  );
};

export default Content05;
