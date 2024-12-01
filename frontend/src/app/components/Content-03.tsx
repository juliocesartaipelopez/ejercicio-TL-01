import React from 'react';

const Content03 = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src="pj-07.jpg" 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

      <div className="relative z-10 grid grid-cols-2 h-full text-white px-16 py-28">
        <div className="col-start-1 col-end-2 flex flex-col justify-end gap-10">
          <p className="w-[650px] text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repudiandae libero ea, unde velit quae, nulla porro numquam dolores labore explicabo. Perspiciatis aut quae aspernatur commodi fugit blanditiis quidem accusantium.
          </p>
          <div className="grid grid-cols-4 gap-8">
            <div className="">
              <span className="text-5xl block py-5 font-semibold">836</span>
              <p className='text-sm'>DAILY</p>
              <p className='text-sm'>GUIDED VISITS</p>
            </div>
            <div className="text-center">
              <span className="text-5xl block py-5 font-semibold">945</span>
              <p className='text-sm'>WEEKLY</p>
              <p className='text-sm'>TOURS</p>
            </div>
            <div className="text-center">
              <span className="text-5xl block py-5 font-semibold">1023</span>
              <p className='text-sm'>MONTHLY</p>
              <p className='text-sm'>VISITORS</p>
            </div>
            <div className="text-center">
              <span className="text-5xl block py-5 font-semibold">120</span>
              <p className='text-sm'>YEARLY</p>
              <p className='text-sm'>EXCURSIONS</p>
            </div>
          </div>
        </div>

        <div className="col-start-2 col-end-3"></div>
      </div>

    </div>
  );
};

export default Content03;
