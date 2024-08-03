import { color, motion } from "framer-motion";
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

  const [isHovering, setHovering] = useState(false);
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);
  const [isHovering5, setHovering5] = useState(false);

  const textBorder = {
    color: "transparent",
    WebkitTextStroke: "2px #16F1D1",
  };

  const textBorderNoneWithColor = {
    color: "#16F1D1",
    WebkitTextStroke: "2px transparent",
  };

  const marqueeClasses =
    "flex uppercase overflow-hidden content-center items-center text-7xl text-[#16F1D1] tracking-wider ";

  return (
    <div className='w-screen h-screen bg-zinc-900 font-["Staatliches"] z-50'>
      <div className="w-full flex flex-col">
        <div className={`${marqueeClasses} relative`}>
          <Marquee className="w-full" speed={100}>
            {items.map((item, index) => (
              <motion.h1
                onMouseEnter={() => {
                  setHovering(true);
                }}
                onMouseLeave={() => {
                  setHovering(false);
                }}
                initial={textBorder}
                animate={isHovering ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 "
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
                onMouseEnter={() => {
                  setHovering1(true);
                }}
                onMouseLeave={() => {
                  setHovering1(false);
                }}
                initial={textBorder}
                animate={isHovering1 ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 text-border"
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
                onMouseEnter={() => {
                  setHovering2(true);
                }}
                onMouseLeave={() => {
                  setHovering2(false);
                }}
                initial={textBorder}
                animate={isHovering2 ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 text-border"
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
                onMouseEnter={() => {
                  setHovering3(true);
                }}
                onMouseLeave={() => {
                  setHovering3(false);
                }}
                initial={textBorder}
                animate={isHovering3 ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 text-border"
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
                onMouseEnter={() => {
                  setHovering4(true);
                }}
                onMouseLeave={() => {
                  setHovering4(false);
                }}
                initial={textBorder}
                animate={isHovering4 ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 text-border"
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
                onMouseEnter={() => {
                  setHovering5(true);
                }}
                onMouseLeave={() => {
                  setHovering5(false);
                }}
                initial={textBorder}
                animate={isHovering5 ? textBorderNoneWithColor : textBorder}
                transition={{ ease: [0.32, 0, 0.67, 0] }}
                style={{
                  transitionTimingFunction: "ease",
                  transitionDuration: ".5s",
                }}
                key={index}
                className="ml-10 p-3 text-border"
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
