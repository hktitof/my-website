import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL(Postgres)",
      "HTML",
      "CSS",
    ],
    ["Django", "ReactJS", "Next.js", "Bootstrap", "Cypress", "SCSS", "Celery"],
    ["Postman", "Docker", "DBeaver", "Redux", "Redis", "AWS", "Git"],
    ["DBMS", "DSA", "GitHub", "VS Code", "PyCharm"],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hey there! I&apos;m Shuvrasish, a seasoned software engineer
                with a knack for crafting robust solutions that excel in the
                digital realm. My journey began with a profound interest in
                technology during my college days, which led me to explore
                programming and problem-solvin. Over the years, I&apos;ve honed
                my skills and expertise to become proficient in a variety of
                domains, specializing in web development and system
                architecture.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Throughout my career, I&apos;ve spearheaded numerous projects,
                each presenting unique challenges and opportunities for
                innovation. From designing and implementing Role-Based Access
                Control (RBAC) systems to engineering scalable email
                notification services using cutting-edge technologies like
                Amazon SES, SNS, and Celery, I&apos;ve consistently delivered
                high-impact solutions that exceed expectations.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                My expertise extends to architecting cloud infrastructures,
                automating critical operational tasks, and optimizing data
                processing workflows. I thrive in dynamic environments where I
                can leverage my skills to drive meaningful advancements and
                solve complex problems. With a strong foundation in languages
                like Python, JavaScript, and C++, coupled with proficiency in
                frameworks such as Django, ReactJS, and Next.js, I&apos;m
                well-equipped to tackle any challenge that comes my way.
              </span>
            </div>

            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              {technologies.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-row space-x-2 items-center"
                >
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    {techGroup.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/me3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/me3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
