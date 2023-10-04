import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "My Projects",
  description: "Projects Section",
};

const Projects = () => {
  return (
    <div className="container mx-auto mt-7 h-full flex flex-col gap-4 pb-10">
      <div className="mb-5 text-center text-[2.5em] bg-gradient-to-l from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Featured projects
      </div>
      <div className="flex lg:flex-row flex-col gap-14 mx-auto">
        <div className="container w-fit">
          <div className="mb-3 relative h-60 w-96 cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/eventsp.jpg"
              fill={true}
              className="rounded-2xl object-contain shadow-md"
              alt="NITK"
            />
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-semibold linkUnderline linkUnderlineBlack">
              Defend The Block
            </div>
            <div className="flex gap-1">
              <div className="hover:bg-slate-200 rounded-lg">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-slate-500 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-slate-900 h-9 px-2 rounded-md"
                  href="https://github.com/yogeshkumartiwari/Project1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
             {/* <div className="hover:bg-slate-200 rounded-lg">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-slate-500 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-slate-900 h-9 px-2 rounded-md"
                  href="https://eventsplatform-vishal1829.vercel.app/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right"
                  >
                    <line x1="7" x2="17" y1="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  <span className="sr-only">Preview</span>
                </Link>
              </div>
  */}
            </div>
          </div>
          <div className="text-slate-400 text-lg mt-1">
            Indo- China Border Security.
          </div>
        </div>
        <div className="container w-fit">
          <div className="mb-3 relative h-60 w-96 cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/shimg1.jpg"
              fill={true}
              className="rounded-2xl object-contain shadow-md"
              alt="NITK"
            />
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-semibold linkUnderline linkUnderlineBlack">
              Sale of Tribal Project
            </div>
            <div className="flex">
              <div className="hover:bg-slate-200 rounded-lg">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-slate-500 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-slate-900 h-9 px-2 rounded-md"
                  href="https://github.com/yogeshkumartiwari/TribalProduct"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-slate-400 text-lg mt-1">
            Selling product of Tribal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
