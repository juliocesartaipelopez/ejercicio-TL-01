import React from 'react';
import { LiaMountainSolid } from "react-icons/lia";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Content01 = () => {
  return (
    <div className="relative w-full h-auto">
      <img src="pj-2-001.png" alt="" className="w-full h-full object-cover" />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent grid grid-cols-1 sm:grid-cols-2 text-white">
        <div className="col-start-1 col-end-2 flex pl-6 sm:pl-12 lg:pl-24 pt-24 sm:pt-36">
          <div>
            <span className="text-gray-400 text-xs sm:text-sm">04/12</span>
            <p className="text-2xl sm:text-3xl md:text-4xl">Bois-de-liesse</p>
            <span className="text-gray-400 text-xs sm:text-sm">Nature Park</span>
            <div className="icon flex gap-4 sm:gap-5 text-xl sm:text-2xl py-2 sm:py-4">
              <AiOutlineArrowLeft />
              <AiOutlineArrowRight />
            </div>

            <div className="puntos en el mapa">
              <div className="flex gap-3 justify-center items-center ml-12 sm:ml-28 mt-10 sm:mt-20">
                <div className="p-2 w-fit rounded-full bg-gray-400 flex justify-center items-center">
                  <div className="p-3 rounded-full bg-white"></div>
                </div>
                <p className="text-sm sm:text-base">Shinrin Yoku</p>
              </div>

              <div className="flex gap-3 justify-center items-center mt-10 sm:mt-20 ml-12 sm:ml-28">
                <div className="p-2 w-fit rounded-full bg-gray-400 flex justify-center items-center">
                  <div className="p-3 rounded-full bg-white"></div>
                </div>
                <p className="text-sm sm:text-base">Birds watching Spot</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-1 sm:col-start-2 col-end-2 sm:col-end-3 flex pr-6 sm:pr-12 lg:pr-24 pt-24 sm:pt-36 flex-col gap-4 sm:gap-6">
          <LiaMountainSolid className="text-5xl sm:text-6xl md:text-7xl" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Explore especial Camping Spots
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate facilis esse corrupti sit odio sapiente dolor saepe debitis, tempora at. Illo porro officia tenetur magni aliquam culpa velit repellat doloribus!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti maxime repellendus pariatur in magnam obcaecati quos accusantium, minima deserunt nulla! Quibusdam aperiam laudantium repudiandae velit labore veniam, eligendi iste.
            Eum accusantium voluptates unde ducimus reiciendis libero natus assumenda repudiandae est earum quas iure, recusandae nihil dignissimos sunt facere minima aliquam. Dignissimos voluptas doloremque neque perspiciatis temporibus saepe vero eaque?
          </p>
          <div className="img flex gap-6 sm:gap-8">
            <img src="pj-03.jpg" alt="" className="rounded-lg w-full sm:w-1/2 md:w-full" />
            <img src="pj-04.jpg" alt="" className="rounded-lg w-full sm:w-1/2 md:w-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Content01;
