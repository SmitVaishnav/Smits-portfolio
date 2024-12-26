import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const[isHovering,setHovering] = useState(false)
  return (
    <div className="w-screen h-full bg-zinc-900">
      <div className="mt-[12%]">
        <h3 className='uppercase font-["matter"] font-medium text-center text-zinc-300 text-sm tracking-[.2vw] '>
          Project insights
        </h3>
        <div className="flex w-full px-40 ">
          <div className="w-full h-full  flex gap-40 ">


            
            <div className="w-1/2 h-full py-20">
              <h3 className='uppercase font-["matter"] text-[#16F1D1] font-medium text-sm tracking-[.2vw] mb-6 '>
                ochi design clone
              </h3>
              <p className="text-zinc-300 text-[3vw] pr-[1vw] mb-7 ">
                Awwwards Winning Website clone with : Reactjs, Framer-motion,
                Tailwindcss
              </p>
              <a
                href="https://ochi-design-blue.vercel.app/" // Replace with your custom URL
                target="_blank"
                rel="noopener noreferrer"
                className='capitalize text-zinc-300 font-["matter"] font-medium text-xl border-b-[2.5px] py-2 border-[#16F1D1] w-[9.8vw] self-end'>
                continue reading
              </a>
              
            </div>
            <div className="w-1/2 h-full py-20">
              <h3 className='uppercase font-["matter"] text-[#A374FF] font-medium text-sm tracking-[.2vw] mb-6 '>
                capstone project
              </h3>
              <p className="text-zinc-300 text-[3vw]  mb-7 ">
                AI Saas Platform : 
                Maniuplate your images using AI
              </p>
              <a
                href="https://cp3-six.vercel.app/" // Replace with your custom URL
                target="_blank"
                rel="noopener noreferrer"
                className='capitalize text-zinc-300 font-["matter"] font-medium text-xl border-b-[2.5px] py-2 border-[#A374FF] w-[9.8vw] self-end'>
                continue reading
              </a>
            </div>            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
