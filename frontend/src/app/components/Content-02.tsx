import React from 'react'
import { LiaMountainSolid } from "react-icons/lia";

export const Content02 = () => {
  return (
    <>
    <div className='relative w-full h-auto'>
      <div className='grid grid-cols-2 grid-rows-2 px-40 py-28 bg-neutral-900'>
        
        <div className='col-start-1 col-end-2 row-start-1 row-end-2 text-white flex flex-col items-start gap-8'>
        <LiaMountainSolid className="text-7xl" />

          <h1 className='text-4xl font-semibold'>
            Discover Captivating Wildlife
          </h1>

          <p className='text-2xl text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nobis minima corrupti atque, deserunt natus, ab alias provident repellat magni blanditiis quam eum fuga at ad voluptas illo temporibus id!
            Blanditiis, similique. Incidunt eum eius laborum repellat similique ipsam, placeat animi ut molestiae voluptate nihil voluptatibus ex odio nisi facilis? Accusamus in accusantium cupiditate sint ex eum reprehenderit magnam nihil.
            Doloremque possimus amet illum at consequuntur tempora sapiente similique nihil, consectetur ex voluptatum nisi ipsam cupiditate repudiandae ut neque sit tempore, ab iste distinctio nesciunt molestiae sunt, accusantium harum. Commodi.
          </p>

          <p className='text-2xl text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas numquam adipisci quas provident vero earum neque voluptatum incidunt repellendus. Mollitia saepe nobis obcaecati, autem quasi veniam dolor eaque consequatur.
          </p>

          <button className='py-3 px-5 rounded-full border border-white font-semibold text-3xl'>
            Show All Animals
          </button>
        </div>

        <div className='col-start-2 col-end-3 row-start-1 row-end-2'>
          <img src="pj-05.png" alt=""  className='w-full h-full flex justify-center items-center'/>
        </div>

        <div className='col-start-1 col-end-2 row-start-2 row-end-3 flex justify-end pt-36'>
          <img src="pj-06.jpg" alt="" className='w-96 h-96'/>
        </div>

        <div className='col-start-2 col-end-3 row-start-2 row-end-3 pt-36'>
          <div className=' flex justify-start flex-col w-96 h-96 bg-black p-10 text-gray-300'>
            <p className='pb-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, a nobis adipisci doloribus necessitatibus ea culpa iure dolorem ad recusandae at eos eaque accusamus qui veniam rem voluptates. Enim, culpa!
            </p>
            <p className='text-white text-lg'>
              Richard Zong
            </p>

            <p className='uppercase text-blue-400 text-sm'>
              park guide
            </p>

          </div>
        </div>

      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
    </>
  )
}
