// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import Card from "./Card";

// const LandingPage = () => {

// //     const divRef = useRef(null);
// //   const cursorRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (cursorRef.current) {
// //         cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
// //       }
// //     };

// //     const handleMouseEnter = () => {
// //       document.addEventListener('mousemove', handleMouseMove);
// //     };

// //     const handleMouseLeave = () => {
// //       document.removeEventListener('mousemove', handleMouseMove);
// //     };

// //     const divElement = divRef.current;

// //     if (divElement) {
// //       divElement.addEventListener('mouseenter', handleMouseEnter);
// //       divElement.addEventListener('mouseleave', handleMouseLeave);
// //     }

// //     return () => {
// //       if (divElement) {
// //         divElement.removeEventListener('mouseenter', handleMouseEnter);
// //         divElement.removeEventListener('mouseleave', handleMouseLeave);
// //       }
// //     };
// //   }, []);


//   return (

//     <div className="w-full h-screen relative" >
//      <div  className="blob flex justify-center align-center w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-500 to-purple-500 blur-[250px] transition-all ease-out duration-500 fixed pointer-events-none left-0 top-0 transform -z-9"></div>
//       <div className="flex">
//         <div className="w-1/2 h-screen  content-center pl-10 text-[5.5vw] tracking-tighter leading-snug font-bold font-['Antique_Olive']  ">
//           <motion.div
//             //   initial={{left:"100%"}}
//             //   animate={{left:0}}
//             //   transition={{ease:[0.25, 1, 0.5, 1],duration:3}}
//             className="relative w-full text-zinc-300 "
//           >
//             <h1>I'm Smit,</h1>
//             <h1 className="">Software Developer</h1>
//             <div className="flex gap-5">
//               {["based", "in", "India"].map((items, index) => {
//                 return (
//                   // eslint-disable-next-line react/jsx-key
//                   <div className="flex items-center">
//                     {index === 2 && (
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: "8.7vw" }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
//                         className="w-[8vw] h-[5vw] mr-4 rounded-2xl bg-cover bg-center bg-[url('https://cdn.pixabay.com/animation/2022/08/21/20/03/20-03-41-348_512.gif')]"
//                       ></motion.div>
//                     )}
//                     <h1>{items}</h1>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//         <motion.div
//           className="w-1/2 h-screen "
          
//         >
//           <Card />

//           {/* <Tilt> */}
//           {/*   <motion.div className="w-1/2 h-[60vh] bg-[#FFFDEA] translate-x-[50%] translate-y-[33%] rounded-2xl overflow-hidden"> */}
//           {/*     <div className="h-[60%] w-full content-center "> */}
//           {/*       <div className="w-[20vw] h-[34vh] bg-[url('/src/assets/smit.JPG')] bg-cover bg-left-bottom  border-[1px]  ml-[2.5vw] rounded-t-full"></div> */}
//           {/*     </div> */}
//           {/*     <div className="h-[40%] w-full "> */}
//           {/*       <div className="w-full h-2/3 px-5 py-4 "> */}
//           {/*         <h2 className='font-["Matter"] font-semibold text-[2vw] leading-none'> */}
//           {/*           Smit */}
//           {/*         </h2> */}
//           {/*         <h3 className="font-['Matter'] font-medium tracking-wide"> */}
//           {/*           SPIKY BIG SHOT */}
//           {/*         </h3> */}
//           {/*       </div> */}
//           {/*       <div className="w-full h-1/3 p-3  content-center"> */}
//           {/*         <div className="border-[1.5px] border-zinc-800 w-[8vw] h-[4vh] font-['Matter'] font-normal px-[1.1vw] text-md rounded-lg  content-center"> */}
//           {/*           <h3 className="">{getFormattedDate(today)}</h3> */}
//           {/*         </div> */}
//           {/*       </div> */}
//           {/*     </div> */}
//           {/*   </motion.div> */}
//           {/* </Tilt> */}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const LandingPage = () => {
  const divRef = useRef(null);
  const cursorRef = useRef(null);
  const [isBlobVisible, setIsBlobVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };

    const handleMouseEnter = () => {
      setIsBlobVisible(true);
      divRef.current.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      setIsBlobVisible(false);
      divRef.current.removeEventListener('mousemove', handleMouseMove);
    };

    const divElement = divRef.current;

    if (divElement) {
      divElement.addEventListener('mouseenter', handleMouseEnter);
      divElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener('mouseenter', handleMouseEnter);
        divElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={divRef} className="w-full h-screen relative overflow-hidden rounded-b-[4vw]">
      {isBlobVisible && (
        <div
          className="blob flex justify-center align-center w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-500 to-purple-500 blur-[250px] transition-all ease-out duration-500 absolute pointer-events-none"
          ref={cursorRef}
          style={{ top: 0, left: 0 }}
        ></div>
      )}
      <div className="flex">
        <div className="w-1/2 h-screen content-center pl-10 text-[5.5vw] tracking-tighter leading-snug font-bold font-['Antique_Olive']">
          <motion.div className="relative w-full text-zinc-300">
            <h1>I'm Smit,</h1>
            <h1 className="">Software Developer</h1>
            <div className="flex gap-5">
              {["based", "in", "India"].map((items, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    {index === 2 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "8.7vw" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                        className="w-[8vw] h-[5vw] mr-4 rounded-2xl bg-cover bg-center bg-[url('https://cdn.pixabay.com/animation/2022/08/21/20/03/20-03-41-348_512.gif')]"
                      ></motion.div>
                    )}
                    <h1>{items}</h1>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        <motion.div className="w-1/2 h-screen">
          <Card />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
