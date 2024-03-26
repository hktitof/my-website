import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Try from "./Try";
// import Script from 'next/script';


export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  const debounceTimer = useRef(null); // For debouncing

  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
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
    }, 500);

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
  return () => {
    // Also clear the timer when the component unmounts
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
  };
    }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Satyam Sharma - Software Engineer",
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: "/WebLogo.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://satyamsharma.com`} />
        <link rel="canonical" href={`https://satyamsharma.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Satyam Sharma" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@satyamstar1996" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* <!-- Google tag (gtag.js) --> */}
      </Head>
      
      {ShowElement ? (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
          <Startup />
          <div className="h-full"></div>
        </div>
      ) : (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
          <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
          <MyName finishedLoading={context.sharedState.finishedLoading} />
          <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
          {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef}/> : null}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : null}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : null}
          {context.sharedState.finishedLoading ? <GetInTouch /> : null}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={"https://github.com/satyam04sharma/Portfolio24"} hideSocialsInDesktop={true} />
          ) : null}
          {!isProd && <ScreenSizeDetector />}
        </div>
      )
      }

    </>
  );  
}
