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

      // remove the Interval of Scrolling for the navBar
      
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  // !TODO : reteste NavBar

  useEffect(() => {
    // if (!context.sharedState.finishedLoading) {
    //   if(typeof window !== "undefined"){
    //     window.addEventListener("scroll", ()=>{

    //       console.log("Scrolling here, ",window.scrollY);
    //     });

    //   }
    // }
    console.log("context.sharedState.finishedLoading", context.sharedState.finishedLoading);
  }, [context.sharedState.finishedLoading]);

  return (
    // ? h-screen is changed to be deleted
    // ? because it's making it fixed for the whole page
    <div className="relative h-screen bg-AAprimary w-full ">
      {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
      {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
      <Header finishedLoading={context.sharedState.finishedLoading} />
      <MyName finishedLoading={context.sharedState.finishedLoading} />
      <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
      {context.sharedState.finishedLoading ? <AboutMe /> : <></>}
      {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
      {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
      {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
      {/* {ShowMe? <Footer />:<></>} */}
    </div>
  );
}
