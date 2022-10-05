import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


// this will return min and sec Tens and Units example of of seconds is 180 sec return is [3,0,0]
const getMinutesAndSeconds = (secondsCounts: number) => {
  if (secondsCounts >= 60) {
    const minutes = Math.floor(secondsCounts / 60);
    const secondsUnits = secondsCounts - minutes * 60;
    if (secondsUnits > 9) {
      const secondsUnit = Math.floor(secondsUnits / 10);
      return [minutes, secondsUnit, secondsUnits - secondsUnit * 10];
    } else {
      return [minutes, 0, secondsUnits];
    }
  } else {
    if (secondsCounts > 9) {
      const secondsTen = Math.floor(secondsCounts / 10);
      return [0, secondsTen, secondsCounts - secondsTen * 10];
    } else {
      return [0, 0, secondsCounts];
    }
  }
};
export default function TimerSpan({
  setIsFinished,
  inputLostFocus,
  seconds,
  timerCountingInterval,
  updateStatistics,
  
}) {
  const [secondsState, setSecondsState] = useState<number>(seconds.current);
  const timerSpanRef = useRef<HTMLSpanElement>(null);
  const [timerFinishedByItSelf,setTimerIsFinishedByItSelf] = useState<boolean>(false);

  useEffect(() => {
    if (inputLostFocus) {
      clearInterval(timerCountingInterval.current); //clear interval when input is lost focus
    } else {
      timerCountingInterval.current = setInterval(() => {
        console.log("Timer executing...", seconds.current);
        seconds.current--;
        setSecondsState(seconds.current);

        if (seconds.current > 0) {
          if (timerSpanRef.current) {
            const [minutes, secondsTen, secondsUnit] = getMinutesAndSeconds(seconds.current);
            timerSpanRef.current.innerText = `${minutes}:${secondsTen}${secondsUnit}`;
          }
        } else {
          // timer is Finished here by it self
          setTimerIsFinishedByItSelf(true);
        }
      }, 1000);
    }
  }, [setIsFinished, inputLostFocus, seconds, timerCountingInterval]);

  useEffect(() => {
    if (timerFinishedByItSelf == true) {
      setTimerIsFinishedByItSelf(false);
      updateStatistics();
      setIsFinished(true);
      clearInterval(timerCountingInterval.current);
    }
  }, [setIsFinished, timerCountingInterval, timerFinishedByItSelf, updateStatistics]);
  return (
    <>
      {secondsState <= 5 && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          ref={timerSpanRef}
          className="text-AAError md:text-xl text-sm"
        >
          0:05
        </motion.span>
      )}
      {secondsState <= 15 && secondsState > 5 && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          ref={timerSpanRef}
          className="text-AAError md:text-xl text-sm"
        >
          0:15
        </motion.span>
      )}
      {secondsState > 15 && <span ref={timerSpanRef} className="text-gray-400 md:text-xl text-sm"></span>}
    </>
  );
}
