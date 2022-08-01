import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useEffect, useState } from "react";
import SocialMediaEmail from "../components/Home/SocialMediaArround/SocialMediaEmail";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
export default function Home() {
  const [ShowElement,setShowElement] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShowElement(true);
    },4500);
    setTimeout(()=>{
      setShowElement(false);
    },10400);
  },[])
  return (
    <div className="relative h-screen bg-AAprimary w-full ">
      <ThisCantBeReached/>
      {ShowElement ? <Startup/>:<></>}
      <Header />
      <MyName />
      {/* <SocialMediaEmail />
      <AboutMe /> */}
    </div>
  );
}
