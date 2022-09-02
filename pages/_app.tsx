import "../styles/globals.css";

import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
