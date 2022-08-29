import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useEffect, useState } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
export default function Home() {
  const [ShowElement,setShowElement] = useState(false);
  const [ShowThisCantBeReached,setShowThisCantBeReached] = useState(true);
  const [ShowMe,setShowMe] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowElement(true);
    },4500);
    setTimeout(()=>{
      setShowElement(false);
    },10400);
    setTimeout(()=>{
      setShowThisCantBeReached(false);
    },5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(()=>{
      setShowMe(true);
    },10400);
  },[])
  return (
    // ? h-screen is changed to be deleted 
    // ? because it's making it fixed for the whole page
    <div className="relative h-screen bg-AAprimary w-full ">
      {/* {ShowThisCantBeReached?<ThisCantBeReached/>:<></>}
      {ShowElement ? <Startup/>:<></>}
      <Header />
      <MyName />
      <SocialMediaArround />
      {ShowMe?<AboutMe />:<></>}
      {ShowMe? <WhereIHaveWorked />:<></>}
      {ShowMe? <SomethingIveBuilt/>:<></>}
      {ShowMe? <GetInTouch/>:<></>}
      {ShowMe? <Footer />:<></>} */}

      <SomethingIveBuilt/>
      
      
    </div>



  );
}
