


import { motion } from "framer-motion";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const items = [
    "html",
    "css",
    "javascript",
    "reactjs",
    "nodejs",
    "express",
    "mongoose",
    "mongodb",
    "python",
    "tailwindcss",
    "vite",
    "git",
    "github",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);
  const [hoveredIndex3, setHoveredIndex3] = useState(null);
  const [hoveredIndex4, setHoveredIndex4] = useState(null);
  const [hoveredIndex5, setHoveredIndex5] = useState(null);

  const textBorder = {
    color: "transparent",
    WebkitTextStroke: "2px #A374FF",
  };

  const textBorderNoneWithColor = {
    color: "#16F1D1",
    WebkitTextStroke: "2px transparent",
  };

  const marqueeClasses =
    "flex uppercase overflow-hidden content-center items-center text-7xl text-[#16F1D1] tracking-wider ";

  return (
    <div className='w-screen  bg-zinc-900 font-["Staatliches"] rounded-b-[4vw] overflow-hidden z-50'>
      <div className="w-full flex flex-col">
        <div className={`${marqueeClasses} relative`}>
          <Marquee className="w-full" speed={100}>
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={textBorder}
                animate={
                  hoveredIndex === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
          <div className="absolute text-7xl text-right bg-zinc-900 px-3 z-10 text-white mx-[25vw]">
            <h1 className="tracking-wider">MY</h1>
          </div>
        </div>
        <div className={`${marqueeClasses} text-opacity-10`}>
          <Marquee className="w-full" speed={200} direction="right">
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex1(index)}
                onMouseLeave={() => setHoveredIndex1(null)}
                initial={textBorder}
                animate={
                  hoveredIndex1 === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: ".5s",
                  }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
        </div>
        <div className={`${marqueeClasses} text-opacity-10`}>
          <Marquee className="w-full" speed={150} direction="right">
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex2(index)}
                onMouseLeave={() => setHoveredIndex2(null)}
                initial={textBorder}
                animate={
                  hoveredIndex2 === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: ".5s",
                  }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
          <div className="absolute text-7xl text-right bg-zinc-900 px-3 z-10 text-white mx-[50vw]">
            <h1 className="tracking-wider">Programming</h1>
          </div>
        </div>
        <div className={`${marqueeClasses} text-opacity-10`}>
          <Marquee className="w-full" speed={200} direction="left">
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex3(index)}
                onMouseLeave={() => setHoveredIndex3(null)}
                initial={textBorder}
                animate={
                  hoveredIndex3 === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: ".5s",
                  }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
        </div>
        <div className={`${marqueeClasses} text-opacity-10`}>
          <Marquee className="w-full" speed={150} direction="left">
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex4(index)}
                onMouseLeave={() => setHoveredIndex4(null)}
                initial={textBorder}
                animate={
                  hoveredIndex4 === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: ".5s",
                  }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
          <div className="absolute text-7xl text-right bg-zinc-900 px-3 z-10 text-white mx-[30vw]">
            <h1 className="tracking-wider">Skills</h1>
          </div>
        </div>
        <div className={`${marqueeClasses} text-opacity-10`}>
          <Marquee className="w-full" speed={100} direction="right">
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => setHoveredIndex5(index)}
                onMouseLeave={() => setHoveredIndex5(null)}
                initial={textBorder}
                animate={
                  hoveredIndex5 === index ? textBorderNoneWithColor : textBorder
                }
                transition={{ ease: [0.32, 0, 0.67, 0], duration: 0.5 }}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: ".5s",
                  }}
                key={index}
                className="ml-10 p-3"
              >
                {item}
              </motion.h1>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Marque;
