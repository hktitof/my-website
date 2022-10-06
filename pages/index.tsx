import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);
    setTimeout(() => {
      setShowElement(false);
    }, 10400);
    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowMe(true);
    }, 10400);
  }, [context.sharedState]);
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
      {ShowMe? <GetInTouch/>:<></>} */}
      {/* {ShowMe? <Footer />:<></>} */}

      {/* <WhereIHaveWorked /> */}
      <div className="w-full h-full flex justify-center items-center text-lg text-AAsecondary">Currently in the development...</div>
    </div>
  );
}
