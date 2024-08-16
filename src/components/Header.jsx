import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-scroll";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleLinkClick = () => {
    setActive(false); // Close the header when a link is clicked
  };

  return (
    <motion.div
      initial={{ width: "100vw", height: "7rem" }}
      animate={
        active
          ? {
              width: "100vw",
              height: "100%",
              backgroundColor: "white",
              overflow: "hidden",
            }
          : { width: "100vw", height: "7rem" }
      }
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
      className="z-50 fixed font-['Antique_Olive'] tracking-tight font-bold text-[2.5vw] px-12 bg-transparent"
    >
      <div className="flex items-center justify-between py-7">
        <motion.h1
          initial={{ color: "#16F1D1" }}
          animate={active ? { color: "#A374FF" } : { color: "#16F1D1" }}
          className="text-[#16F1D1]"
        >
          SMIT
        </motion.h1>
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
          <motion.button
            initial={false}
            onClick={() => setActive((pv) => !pv)}
            className="relative w-16 h-16 rounded-full bg-[#A374FF]/100 transition-colors"
            animate={active ? "open" : "closed"}
            variants={{
              open: {
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#A374FF",
              },
              closed: { backgroundColor: "#A374FF" },
              transition: {
                duration: 0.1,
              },
            }}
          >
            <motion.span
              variants={VARIANTS.top}
              style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
            />
            <motion.span
              variants={VARIANTS.middle}
              style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
              className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
            />
            <motion.span
              variants={VARIANTS.bottom}
              style={{ bottom: "40%", left: "50%", x: "-50%", y: "50%" }}
              className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
            />
          </motion.button>
        </MotionConfig>
      </div>
      {active && (
        <motion.div className="w-full h-full flex">
          <div className="w-1/2 h-full pt-[70vh]">
            <h3 className="uppercase font-['Matter'] text-[#A374FF] tracking-widest text-xs font-medium">
              get in touch
            </h3>
            <h1 className="font-['Matter'] font-normal text-[3vw] text-zinc-900">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=smitvaishnav003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900"
              >
                smitvaishnav003@gmail.com
              </a>
            </h1>
          </div>
          <div className="w-1/2 h-full flex flex-col mt-[15%] px-10 gap-5">
            {["home", "skills", "projects", "contact-us"].map((word, index) => (
              <div key={index}>
                <Link
                  to={word}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust this value based on your header height
                  onClick={handleLinkClick}
                  className="cursor-pointer"
                >
                  <h1 className="flex z-[9] text-[7vw] tracking-tighter font-['Antique_Olive'] leading-none text-zinc-900">
                    {word.split("").map((item, i) => (
                      <motion.span
                        initial={{ x: "300%" }}
                        animate={{ x: "0" }}
                        transition={{
                          ease: [0.68, -0.6, 0.32, 1.6],
                          delay: i * 0.06,
                          duration: 1,
                        }}
                        className="inline-block translate-y-full"
                        key={i}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["40%", "50%", "50%"],
      backgroundColor: "black",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "40%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      backgroundColor: "black",
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["40%", "50%", "50%"],
      left: "50%",
      backgroundColor: "black",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "40%"],
      left: "50",
    },
  },
};

export default Header;

// import React, { useEffect, useState } from "react";
// import { motion, MotionConfig } from "framer-motion";

// function Header() {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos, visible]);

//   return (
//     <motion.div
//       initial={{ width: "100vw", height: "7rem" }}
//       animate={
//         active
//           ? {
//               width: "100vw",
//               height: "100%",
//               backgroundColor: "white",
//               overflow: "hidden",
//             }
//           : { width: "100vw", height: "7rem" }
//       }
//       transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
//       className="z-50 fixed font-['Antique_Olive'] tracking-tight font-bold text-[2.5vw] px-12 bg-transparent"
//     >
//       <div className="flex items-center justify-between py-7">
//         <motion.h1
//           initial={{ color: "#16F1D1" }}
//           animate={active ? { color: "#A374FF" } : { color: "#16F1D1" }}
//           className="text-[#16F1D1]"
//         >
//           SMIT
//         </motion.h1>
//         <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
//           <motion.button
//             initial={false}
//             onClick={() => setActive((pv) => !pv)}
//             className="relative w-16 h-16 rounded-full bg-[#A374FF]/100 transition-colors"
//             animate={active ? "open" : "closed"}
//             variants={{
//               open: {
//                 backgroundColor: "#FFF",
//                 borderWidth: 1,
//                 borderColor: "#A374FF",
//               },
//               closed: { backgroundColor: "#A374FF" },
//               transition:{
//                 duration:.1
//               }
//             }}
//           >
//             <motion.span
//               variants={VARIANTS.top}
//               style={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
//               className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
//             />
//             <motion.span
//               variants={VARIANTS.middle}
//               style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
//               className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
//             />
//             <motion.span
//               variants={VARIANTS.bottom}
//               style={{ bottom: "40%", left: "50", x: "-50%", y: "50%" }}
//               className="absolute h-[3px] w-5 bg-zinc-100 rounded-full"
//             />
//           </motion.button>
//         </MotionConfig>
//       </div>
//       {active && (
//         <motion.div className="w-full h-full flex">
//           <div className="w-1/2 h-full pt-[70vh]">
//             <h3 className="uppercase font-['Matter'] text-[#A374FF] tracking-widest text-xs font-medium">
//               get in touch
//             </h3>
//             <h1 className="font-['Matter'] font-normal text-[3vw] text-zinc-900">
//               smitvaishnav003@gmail.com
//             </h1>
//           </div>
//           <div className="w-1/2 h-full flex flex-col mt-[15%] px-10 gap-5">
//             {["home", "skills", "projects", "contact-us"].map((word, index) => (
//               <div key={index}>
//                 <h1 className="flex z-[9] text-[7vw] tracking-tighter font-['Antique_Olive'] leading-none text-zinc-900">
//                   {word.split("").map((item, i) => (
//                     <motion.span
//                       initial={{ x: "300%" }}
//                       animate={{ x: "0" }}
//                       transition={{
//                         ease: [0.68, -0.6, 0.32, 1.6],
//                         delay: i * 0.06,
//                         duration: 1,
//                       }}
//                       className="inline-block translate-y-full"
//                       key={i}
//                     >
//                       {item}
//                     </motion.span>
//                   ))}
//                 </h1>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

// const VARIANTS = {
//   top: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],
//       top: ["40%", "50%", "50%"],
//       backgroundColor: "black",
//     },
//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],
//       top: ["50%", "50%", "40%"],
//     },
//   },
//   middle: {
//     open: {
//       rotate: ["0deg", "0deg", "-45deg"],
//       backgroundColor: "black",
//     },
//     closed: {
//       rotate: ["-45deg", "0deg", "0deg"],
//     },
//   },
//   bottom: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],
//       bottom: ["40%", "50%", "50%"],
//       left: "50%",
//       backgroundColor: "black",
//     },
//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],
//       bottom: ["50%", "50%", "40%"],
//       left: "50",
//     },
//   },
// };

// export default Header;
