import React, { useState } from "react";
import Alert from '@mui/material/Alert';



const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8dc227d-232a-4f57-b0b7-38e9daa543e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();


    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="relative w-screen h-screen">
  
  <div className="-z-1 absolute w-[500px] h-[500px] rounded-full translate-x-[50%] inset-0 bg-gradient-to-r from-yellow-500 via-purple-500 to-red-500 blur-[250px]"></div>
  <div className=" -z-1 absolute w-[500px] h-[500px] rounded-full translate-x-[200%] translate-y-[60%] inset-0 bg-gradient-to-r from-yellow-500 via-teal-500 to-red-500 blur-[250px]"></div>
  <div className="absolute font-['Matter'] backdrop-blur-3xl shadow-lg container w-full md:w-3/4 lg:w-1/2 h-[80%] md:h-[70%] lg:h-[60%] bg-[#141414]/70 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden">
    <form className="grid grid-rows-12 h-full" onSubmit={onSubmit}>
      <div className="bg-[#141414] col-span-2 relative w-full items-center px-3 flex gap-[5px]">
        <span className="w-[14px] h-[14px] rounded-full bg-red-500"></span>
        <span className="w-[14px] h-[14px] rounded-full bg-yellow-500"></span>
        <span className="w-[14px] h-[14px] rounded-full bg-zinc-600"></span>
        <div className="absolute w-full h-full text-center content-center">
          <h3 className="font-['Matter'] text-white/90">Get in touch</h3>
        </div>
      </div>
      <div className="col-span-2 px-5 border-b-[1px] text-lg content-center border-zinc-100/10">
        <div className="flex gap-5">
          <h1 className="text-white/90">To</h1>
          <h1 className="text-white/90">smitvaishnav003@gmail.com</h1>
        </div>
      </div>
      <div className="px-5 border-b-[1px] text-lg content-center border-zinc-100/10 col-span-2">
        <div className="flex gap-5">
          <h1 className="text-white/90">From</h1>
          <input
            type="email"
            className="bg-transparent w-full text placeholder-zinc-100/20 text-md focus:outline-none text-white  "
            placeholder="your@email.com"
            name="email"

            required
          />
        </div>
      </div>
      <div className="col-span-2 content-center text-lg border-zinc-100/10 border-b-[1px] px-5">
        <div className="flex gap-5">
          <h1 className="text-white/90">Subject</h1>
          <input
            type="text"
            className="bg-transparent w-full text placeholder-zinc-100/20 focus:outline-none text-white"
            placeholder="A cool subject"
            name="subject"
            required
          />
        </div>
      </div>
      <div className="row-span-7 border-zinc-100/10 border-b-[1px] col-span-2">
        <div className="w-full h-full px-5 py-3 text-lg">
          <textarea
            name="message"
            style={{ resize: "none", boxSizing: "border-box" }}
            className="w-full h-full bg-transparent focus:outline-none text-white/90 placeholder-zinc-100/20"
            placeholder="Say Something"
            required
          ></textarea>
        </div>
      </div>
      <div className="text-lg col-span-2 px-5">
        <div className="w-full h-full flex justify-end items-center">
          <button type="submit" className="w-[15%] h-[70%] bg-zinc-600 rounded-lg text-white/90">
            Send
          </button>
        </div>
      </div>
      <div className="bg-teal-600 col-span-2"></div>
      <div className="bg-purple-600 col-span-2"></div>
      <div className="bg-green-600 col-span-2"></div>
      <div className="bg-yellow-600 col-span-2"></div>
      <div className="bg-red-600 col-span-2"></div>
      <div className="bg-pink-600 col-span-2"></div>
    </form>
  </div>
</div>
  );
};

export default Footer;

// <div className="absolute grid font-['Matter'] backdrop-blur-3xl shadow-lg container w-full md:w-3/4 lg:w-1/2 h-[80%] md:h-[70%] lg:h-[60%] bg-[#141414]/70 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden">
//         <div className="relative w-full h-11 bg-[#141414] items-center px-3 flex gap-[5px]">
//           <span className="w-[14px] h-[14px] rounded-full bg-red-500"></span>
//           <span className="w-[14px] h-[14px] rounded-full bg-yellow-500"></span>
//           <span className="w-[14px] h-[14px] rounded-full bg-zinc-600"></span>
//           <div className="absolute w-full h-full text-center content-center">
//             <h3 className="font-['Matter'] text-white/90">Get in touch</h3>
//           </div>
//         </div>
//         <div className="px-5 text-lg">
//           <div className="flex gap-5 py-3 mt-1 border-b-[1px] border-zinc-100/30">
//             <h1 className="text-white/90">To</h1>
//             <h1 className="text-white/90">smitvaishnav003@gmail.com</h1>
//           </div>
//           <div className="flex py-3 border-b-[1px] border-zinc-100/30 gap-3">
//             <h1 className="text-white/90">From</h1>
//             <input
//               type="email"
//               className="bg-transparent w-full text placeholder-zinc-100/20 text-md focus:outline-none text-white"
//               placeholder="your@email.com"
//             />
//           </div>
//           <div className="flex py-3 border-b-[1px] border-zinc-100/0 gap-3">
//             <h1 className="text-white/90">Subject</h1>
//             <input
//               type="text"
//               className="bg-transparent w-full text placeholder-zinc-100/20 focus:outline-none text-white"
//               placeholder="A cool subject"
//             />
//           </div>
//         </div>
//         <div className="w-full h-[40vh] md:h-[30vh] border-t-[1px] border-zinc-100/30">
//           <textarea
//             name="text"
//             id=""
//             placeholder="Say Something"
//             className="w-full h-full px-5 py-3 bg-transparent placeholder-zinc-100/20 text-lg  focus:outline-none text-white"
//           ></textarea>
//         </div>
//         <div className="w-full h-[7vh] content-center border-t-[1px] border-zinc-100/30 flex justify-end items-center pr-5">
//           <button className="rounded-lg py-2 px-7 text-white/90 bg-zinc-600/50">
//             send
//           </button>
//         </div>
//       </div>