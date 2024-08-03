import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import smitImage from "/src/assets/smit.JPG";
import { Tilt } from "react-tilt";
import githubGif from "../assets/github.gif";
import linkedinGif from "../assets/linkedin.gif";
import instaGif from "../assets/instagram.gif";
import twitterGif from "../assets/twitter.gif";

const Card = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 20 - 10; // Tilt range from -10 to 10
    const y = (clientY / innerHeight) * 20 - 10;
    setTilt({ x, y });
  };

  // const [rotate, setRotate] = useState(0);
  // useEffect(() => {
  //     addEventListener("mousemove", (e) => {
  //       let mouseX = e.clientX;
  //       let mouseY = e.clientY;

  //       let deltaX = mouseX - window.innerWidth / 2;
  //       let deltaY = mouseY - window.innerHeight / 2;

  //       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //       setRotate(angle - 180);
  //     });
  //   });
  //   style={{transform: `skew(${rotate/10}deg)`}}

  return (
    <div
      className="w-full h-full content-center "
      onMouseMove={handleMouseMove}
      style={{
        transform: `rotateX(${tilt.y * 2}deg) rotateY(${tilt.x * 2}deg)`,
        transformOrigin: "center",
      }}
    >
      <div className=" w-1/2 h-[60%] bg-white translate-x-1/2 rounded-2xl overflow-hidden">
        <div className="w-full h-2/3  content-center relative">
          <div
            style={{ backgroundImage: `url(${smitImage})` }}
            className="w-[85%] h-[93%] bg-zinc-200 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-t-[12rem] bg-cover bg-left-bottom rounded-b-lg "
          ></div>
        </div>
        <div className="w-full h-1/3 ">
          <div className="w-full h-2/3 px-5 py-4 ">
            <h2 className='font-["Matter"] font-semibold text-[2vw] leading-none'>
              Smit
            </h2>
            <h3 className="font-['Matter'] uppercase font-medium text-sm tracking-wide">
              Imaginary endorser
            </h3>
          </div>
          <div className="w-full h-1/3 content-center px-5 flex">
            <div className="border-[1.5px] w-1/3 h-1/2 border-zinc-800 rounded-lg font-['Matter'] overflow-hidden font-normal text-md text-center content-center ">
              <h3 className="">14 Aug 2003</h3>
            </div>
            <div className="w-2/3  h-1/2 flex gap-3 pl-16">
              <div style={{ width: "33px", height: "auto" }} className="">
                <a href="https://github.com/SmitVaishnav" target="_blank">
                  <img src={githubGif} alt="githubGif" className="" />
                </a>
              </div>
              <div style={{ width: "33px", height: "auto" }}>
                <a href="https://www.linkedin.com/in/smit-vaishnav-4325b0222/" target="_blank">
                  <img src={linkedinGif} alt="" />
                </a>
              </div>
              <div style={{ width: "33px", height: "auto" }}>
                <a href="https://www.instagram.com/smitvaishnav_/" target="_blank">
                  <img src={instaGif} alt="" />
                </a>
              </div>
              <div style={{ width: "33px", height: "auto" }}>
                <a href="https://x.com/smitvaishnv" target="_blank">
                  <img src={twitterGif} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
