import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Research and Projects
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://ieeexplore.ieee.org/document/10429991" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/ResearchPaper.png"} alt={"ResearchPaper Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/ResearchPaper.png"} alt={"ResearchPaper Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Using Deep Reinforcement Learning And Formal Verification in Safety Critical Systems</span>
                <a href="https://ieeexplore.ieee.org/document/10429991" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CSULB Research Foundation
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  In my research paper published by <span className="text-AAsecondary">IEEE</span>
                    , I explored the intricate world of <span className="text-AAsecondary">Deep Reinforcement Learning (DRL)</span> and its pivotal role in modern Artificial Intelligence.
                   The paper delves into various DRL techniques and the real-life challenges they face, alongside a comprehensive analysis of formal verification techniques.
                    Our study provides a systematic review of methodologies, tools, and frameworks employed in DRL and formal verification, aiming to enhance the 
                    decision-making process in <span className="text-AAsecondary">Safety Critical Systems</span>. This research is anticipated to contribute significantly to the field,
                     fostering a deeper understanding of the processes involved.
                </p>

              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Reinforcement Learning</span>
                <span className="pr-4 z-10">Formal Methods</span>
                <span className="pr-4 z-10">Safety Critical Systems</span>
                <span className="pr-4 z-10">Deep Reinforcement Learning</span>
                <span className="pr-4 z-10">Formal Verification</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://ieeexplore.ieee.org/document/10429991" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 22 West Media */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://22westmedia.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
          transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/img/22westmedia.png"} alt={"22 West Media Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/22westmedia.png"} alt={"22 West Media Background"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://22westmedia.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    22 West Media
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  22 West is a student-run, student-driven multimedia company at Long Beach State University, encompassing a radio station, video production company, and magazine. The platform features a live music player and streams support capabilities, built on React v18 and Node, hosted using Netlify and InMotion Hosting. The team utilized Figma for design setup, with a lot going on behind the scenes to ensure a seamless user experience.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
              text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React v18</span>
                <span className="pr-4 z-10">Node</span>
                <span className="pr-4 z-10">Netlify</span>
                <span className="pr-4 z-10">InMotion Hosting</span>
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* Add GitHub and external link icons with appropriate links here */}
              </div>
            </div>
          </div>
        </div>

       {/* // ?  Project Aimagine */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://devpost.com/software/aimagine"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
          transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/img/aimagine.jpg"} alt={"Aimagine Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/MarinaHacksProject.png"} alt={"Aimagine Background"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"https://devpost.com/software/aimagine"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Aimagine: An AI-powered sketch-to-image tool
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Aimagine is a fun and easy web app for creating digital images. Draw something and give a prompt, collaborate with friends in a room. Powered by React, Node, Flask, and Google Colab GPU. This project won us the MarinaHacks 3.0 version. We used stable diffusion and a 3 server architecture to implement it. It makes for a cool tool for kids to work on their side projects and much more.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
              text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Node</span>
                <span className="pr-4 z-10">Flask</span>
                <span className="pr-4 z-10">Google Colab GPU</span>
                <span className="pr-4 z-10">Stable Diffusion</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* Add GitHub and external link icons with appropriate links here */}
                <ExternalLink url={"https://devpost.com/software/aimagine"} router={router} />
                <GithubIcon link="https://github.com/satyam04sharma/MarinaHack3.0" />
              </div>
            </div>
          </div>
        </div>


        {/* // ?  Project Find Yo Passion */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/findyopassion"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
          transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img src={"/img/Findyopassion.png"} alt={"Find Yo Passion Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/Findyopassion.png"} alt={"Find Yo Passion Background"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={"/findyopassion"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Find Yo Passion
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Find Yo Passion is an AI based interactive web application designed to help users identify potential career paths based on their interests and preferences.

        After the user has completed the questionnaire, the application processes the user's answers and recommends 3 potential career paths based on the options that the user selected. 
        Built with Da vinci model to get the most accurate prediction. It uses js, and material -UI and Figma. Built at Beach Hacks, California State University - Long Beach, BeachHacks 7.0.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
              text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">Material-UI</span>
                <span className="pr-4 z-10">Da Vinci Model</span>
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/satyam04sharma/CareerCompass" />
                {/* <ExternalLink url={"/findyopassion"} router={router} /> */}
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project Interview.IO */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://interviewio.netlify.app" target={"_blank"} rel="noreferrer">
              <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
                <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                  <span className="text-AAsecondary text-xl">In Progress...</span>
                </div>
              </a>

              <Img src={"/img/Interviewio.png"} alt={"Interview.IO Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/interviewio-background.png"} alt={"Interview.IO Background"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://interviewio.netlify.app" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Interview.IO
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Interview.IO uses GPT3.5 to give you AI-powered interviews. This app uses GPT.3.5 with custom prompts to give you an analysis of your interviews and helps you prepare for real ones. Our plan is to navigate this experience to a Lamma model fine-tuned for tech interviews.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
              text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">GPT</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                {/* Add GitHub icon with appropriate link here */}
                <a href="https://interviewio.netlify.app" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
