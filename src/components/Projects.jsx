import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const[isHovering,setHovering] = useState(false)
  return (
    <div className="w-screen h-full bg-zinc-900">
      <div className="mt-[12%]">
        <h3 className='uppercase font-["Matter"] font-medium text-center text-zinc-300 text-sm tracking-[.2vw] '>
          Project insights
        </h3>
        <div className="flex w-full px-40 ">
          <div className="w-full h-full  flex gap-40 ">
            <div className="w-1/2 h-full py-20">
              <h3 className='uppercase font-["Matter"] text-[#16F1D1] font-medium text-sm tracking-[.2vw] mb-6 '>
                ochi design clone
              </h3>
              <p className="text-zinc-300 text-[3vw] pr-[1vw] mb-7 ">
                Awwwards Winning Website clone with : Reactjs, Framer-motion,
                Tailwindcss
              </p>
              <h2 className='capitalize text-zinc-300 font-["Matter"] font-medium text-xl border-b-[2.5px] py-2 border-[#16F1D1] w-[9.8vw]'>
                continue reading
              </h2>
              
            </div>
            <div className="w-1/2 h-full py-20">
              <h3 className='uppercase font-["Matter"] text-[#A374FF] font-medium text-sm tracking-[.2vw] mb-6 '>
                capstone project
              </h3>
              <p className="text-zinc-300 text-[3vw]  mb-7 ">
                StudentsCorner : Get your local Events, Scholarships and
                Hackathons in one place
              </p>
              <h2 className='capitalize text-zinc-300 font-["Matter"] font-medium text-xl border-b-[2.5px] py-2 border-[#A374FF] w-[9.8vw]'>
                continue reading
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
