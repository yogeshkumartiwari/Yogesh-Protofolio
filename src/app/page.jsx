import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const emailAddress = "yogesh12512@gmail.com";
  return (
    <>
      <div className="container mx-auto mt-28 h-full flex xl:flex-row flex-col items-center justify-center xl:gap-40">
        <div
          className={`relative h-60 w-60 ${styles["animate-bounce-up-down"]}`}
        >
          <Image
            src="/mypic.jpg"
            fill={true}
            objectFit="cover"
            className="absolute rounded-full border-4 border-white"
            alt="MyPic"
          />
        </div>
        <div className="text-[2em] font-bold text-slate-500 flex flex-col flex-wrap items-center xl:items-start gap-4">
          <p>Hi 👋, my name is </p>
          <p className="lg:text-[2.1em] sm:text-[1.5em] bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Yogesh Kumar
          </p>
          <p className="bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
            Coder, NITian
          </p>
          <div className="flex sm:flex-row flex-col items-center sm:gap-16 gap-10 mt-5">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1A_hssRIyAY23K9u1kGHvkTEtz4lFRx2A/view?usp=sharing"
              className="text-xl font-normal px-5 py-2 bg-violet-600 text-white rounded-full"
            >
              Resume
            </Link>
            <div className="flex gap-2">
              <Link
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center hover:bg-slate-100 text-slate-900 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-2 rounded-md"
                href={`mailto:${emailAddress}`}
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
                  class="h-[23px] w-[23px]"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                </svg>
                <span class="sr-only">Mail</span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center hover:bg-slate-100 text-slate-900 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-2 rounded-md"
                href="https://github.com/yogeshkumartiwari"
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
              <Link
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center hover:bg-slate-100 text-slate-900 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-2 rounded-md"
                href="https://www.linkedin.com/in/yogesh-kumar-a51707202/"
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
                  class="h-[23px] w-[23px]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span class="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full flex flex-col gap-4 lg:w-4/6 w-full px-16 mt-14">
        <h1 className="text-xl w-fit font-semibold linkUnderline linkUnderlineBlack">
          About Me.
        </h1>
        <p className="text-lg text-slate-600">
          I worked as an SDE Intern at Infoworks Data from January to June 2023.
          I completed my Master&#39;s from the National Institute of Technology
          Karnataka (NITK) Surathkal in 2023. Talking about my technical skills,
          I am proficient in Data Structures and Algorithms, OOPs, DBMS, SQL, MongoDB
          etc. Additionally, I have expertise in languages such as C++, Java, Python, Jenkins, Jmeter, GCP, Grafana
          and JavaScript.
        </p>
        <p className="text-lg text-slate-600">
          👀 I am currently seeking a job opportunity.
        </p>
      </div>
    </>
  );
}
