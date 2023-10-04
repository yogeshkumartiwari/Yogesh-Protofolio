"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();


  const handleClick = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? 'closed' : 'open');
  };

  const menuVariantsOpen = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 1 },
        y: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
    closed: {
      opacity: 0,
      y: -50, // Adjust this value to control the slide distance
    },
  };


  return (
    <>
    <div className="sticky top-0 z-50 bg-white inset-x-0">
      <div className="relative container mx-auto h-16 flex justify-between items-center xl:px-28 px-16 mt-4">
        <Link
          href="/"
          className={`lg:text-[2em] text-[1.8em] text-violet-700 font-extrabold ${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
        >
          My Portfolio
        </Link>
        <ul className="lg:flex gap-9 text-xl font-medium hidden">
          <Link
            href="/"
            className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
          >
            <li>Home</li>
          </Link>
          <Link
            href="/education"
            className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
          >
            <li>Education</li>
          </Link>
          <Link
            href="/experience"
            className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
          >
            <li>Experience</li>
          </Link>
          <Link
            href="/projects"
            className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
          >
            <li>Projects</li>
          </Link>
          <Link
            href="/achievements"
            className={`${styles.linkUnderline} ${styles.linkUnderlineBlack}`}
          >
            <li>Achievements</li>
          </Link>
        </ul>
        <motion.button
          initial={{ scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="lg:hidden cursor-pointer"
          onClick={handleClick}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </motion.svg>
        </motion.button>
        {isOpen && (
          <motion.div
            variants={menuVariantsOpen}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            className="lg:hidden absolute right-14 top-16 z-50 shadow-md flex flex-col gap-2 w-5.6/12 p-3 mx-3 bg-white text-indigo-500 rounded-md text-lg font-medium"
          >
            <Link
              href="/"
              className="hover:bg-indigo-500 px-4 py-1 rounded-lg hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/education"
              className="hover:bg-indigo-500 px-4 py-1 rounded-lg hover:text-white"
            >
              Education
            </Link>
            <Link
              href="/experience"
              className="hover:bg-indigo-500 px-4 py-1 rounded-lg hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="hover:bg-indigo-500 px-4 py-1 rounded-lg hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className="hover:bg-indigo-500 px-4 py-1 rounded-lg hover:text-white"
            >
              Achievements
            </Link>
          </motion.div>
        )}
      </div>
      <div className="border-2 border-gray-200 mt-2"></div>
      </div>
    </>
  );
};

export default Navbar;
