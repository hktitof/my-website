import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import TrouveTavoie from "./Descriptions/TrouveTavoie";
import FeverTokens from "./Descriptions/FeverTokens";
import IdealFresh from "./Descriptions/IdealFresh";
import AdvancedAgroManagement from "./Descriptions/AdvancedAgroManagement";
import Fantasia from "./Descriptions/Fantasia";
import SuperBerry from "./Descriptions/SuperBerry";
import EnsVision from "./Descriptions/EnsVision";
import YpredictAI from "./Descriptions/YpredictAI";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Vision":
        return <EnsVision />;
      case "YpredictAI":
        return <YpredictAI />;
      case "TrouveTavoie":
        return <TrouveTavoie />;
      case "FeverTokens":
        return <FeverTokens />;
      case "IdealFresh":
        return <IdealFresh />;
      case "Advanced Agro Management":
        return <AdvancedAgroManagement />;
      case "Fantasia":
        return <Fantasia />;
      case "SuperBerry":
        return <SuperBerry />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Vision");
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[352px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Vision"
            BarPosition={-10}
            BarAvobePosition={1}
            DescriptionJob="Vision"
            CompanyNameBackgroundColorGreen={[true, false, false, false, false, false,false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Ypredict.io"
            BarPosition={40}
            BarAvobePosition={129}
            DescriptionJob="YpredictAI"
            CompanyNameBackgroundColorGreen={[false, true, false, false, false, false, false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="TrouveTavoie"
            BarPosition={83}
            BarAvobePosition={257}
            DescriptionJob="TrouveTavoie"
            CompanyNameBackgroundColorGreen={[false, false, true, false, false, false,false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="FeverTokens"
            BarPosition={126}
            BarAvobePosition={385}
            DescriptionJob="FeverTokens"
            CompanyNameBackgroundColorGreen={[false, false, false, true, false, false,false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={4}
            CompanyName="IdealFresh"
            BarPosition={170}
            BarAvobePosition={513}
            DescriptionJob="IdealFresh"
            CompanyNameBackgroundColorGreen={[false, false, false, false, true, false,false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={5}
            CompanyName="SuperBerry"
            BarPosition={213}
            BarAvobePosition={641}
            DescriptionJob="SuperBerry"
            CompanyNameBackgroundColorGreen={[false, false, false, false, false, true,false,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={6}
            CompanyName="AA Management"
            BarPosition={258}
            BarAvobePosition={769}
            DescriptionJob="Advanced Agro Management"
            CompanyNameBackgroundColorGreen={[false, false, false, false, false, false,true,false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={7}
            CompanyName="Fantasia SME"
            BarPosition={302}
            BarAvobePosition={897}
            DescriptionJob="Fantasia"
            CompanyNameBackgroundColorGreen={[false, false, false, false, false, false, false,true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
