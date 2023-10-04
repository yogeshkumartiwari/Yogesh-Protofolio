import Image from "next/image";
import React from "react";

export const metadata = {
  title: "My Education",
  description: "Education Section",
};

const Education = () => {
  return (
    <div className="container mx-auto mt-7 h-full flex flex-col gap-4 pb-10">
      <div className="mb-5 text-center text-[2.5em] bg-gradient-to-l from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Education
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-14 gap-8 mx-auto mb-3 py-6 px-6 w-4/5 items-center justify-center border-2 rounded-md shadow-md transition-transform transform hover:scale-105 duration-400 ease-in-out">
        <div className="relative h-40 w-60">
          <Image
            src="/nitk.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="NITK"
          />
        </div>
        <div className="md:text-[1.5em] text:md font-semibold text-slate-500 flex flex-col">
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto">
            College: National Institute of Technology Karnataka (NITK) Surathkal
          </p>
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto"> Course: Master of Computer Applications</p>
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto"> CGPA: 8.53</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-14 gap-8 mx-auto mb-3 py-6 px-6 w-4/5 items-center border-2 rounded-md shadow-md transition-transform transform hover:scale-105 duration-400 ease-in-out">
        <div className="relative h-40 w-60">
          <Image
            src="/du.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="NITK"
          />
        </div>
        <div className="md:text-[1.5em] text:md font-semibold text-slate-500 flex flex-col">
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto"> College: Ranchi University</p>
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto"> Course: Bachelor of Computer Applications</p>
          <p className="lg:w-fit lg:text-left text-center w-5/6 lg:mx-1 mx-auto"> Percentage: 75.5%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

// <div className="md:text-[1.5em] lg:w-5/6 w-4/5 lg:pl-0 pl-7 text:md font-semibold text-slate-500 flex flex-col">
