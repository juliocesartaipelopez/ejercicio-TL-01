'use client';
import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="relative w-full h-auto">
          <img src="pj1-00.jpg" alt="" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="pt-16 px-6 sm:px-10 lg:px-28 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 absolute w-full top-0 left-0 z-50 text-white">
          <div className="col-start-1 col-end-2">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">ParkScape Adventures</h1>
            </div>
          </div>
          <div className="col-start-1 sm:col-start-2 col-end-2 sm:col-end-3">
            <div className="w-full flex justify-between items-center">
              <div className="block sm:hidden">
                <button className="text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <ul className="uppercase hidden sm:flex items-center justify-center gap-6 sm:gap-10">
                <li>
                  <a href="">about camp</a>
                </li>
                <li>
                  <a href="">events</a>
                </li>
                <li>
                  <a href="">sign in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white z-10 flex-col gap-5 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Your Adventure Begins Here!</h1>
          <p className="text-lg sm:text-2xl">Discover the Great Outdoors</p>
        </div>
      </div>
    </>
  );
};
