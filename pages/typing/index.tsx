import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Data = [wordsStatus, [{ char: string; charColor: string }?]];
type wordsStatus = [{ word: string; typedStatus: boolean }?];
type ActiveWordIndex = { index: number; word: string } | null;
/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
const getData = async arg_state => {
  fetch("https://api.quotable.io/random?minLength=200")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const wordsAndStatus: wordsStatus = []; // this aaay will hold the words and their status
      data.content.split(" ").forEach((item: string, index: number) => {
        wordsAndStatus.push({ word: item, typedStatus: false });
      });
      const temArray: Data = [wordsAndStatus, []];

      /**
       * @@explanation for the following action
       * this will will convert data to array of char then push each char to the tempArray second Array
       * as objects with background default value ""
       */
      data.content.split("").forEach((item: string, index: number) => {
        temArray[1].push({
          char: item,
          charColor: "text-gray-600",
        });
      });
      arg_state(temArray); // ? this will set the state as an array of characters
    })
    .catch(err => console.error(err));
};

export default function Home() {
  /**
   * the follwwing state will is type of
   * @type [[string[]],[{char:string,charColor:string}]]
   */
  const [myText, setMyText] = React.useState<Data>([[], []]); // ? this will be an array of characters for now
  const [activeWordIndex, setActiveWordIndex] = useState<ActiveWordIndex>(null);
  const [move, setMove] = useState(false);
  const elemRef = useRef<HTMLSpanElement>(null);
  const [elemWidth, setElemWidth] = useState(0);
  const [elemP, setElemP] = useState("");
  const [selected, setSelected] = useState(false);
  const [moveCursor, setMoveCursor] = useState(false);
  const CounterChar = useRef<number>(0);
  const listRef = useRef([]);
  useEffect(() => {
    if (myText[0].length === 0) {
      getData(setMyText); // setMyText is the callback function
    } else if (activeWordIndex === null) {
      setActiveWordIndex({ index: 0, word: myText[0][0].word }); // set the first active word as active after Data is loaded
    }
  }, [myText, activeWordIndex]);
  useEffect(() => {
    if (!(elemP.length > 0)) {
      // checking if the state is empty meaning not set yet
      console.log("getting Text..");
      setElemP("P");
    } else {
      console.log("getting size per each character..");
    }
  }, [elemP]);
  const handleSelect = (status: boolean) => {
    setSelected(status);
  };
  const handleMove = (status: boolean) => {
    setMoveCursor(status);
    setElemWidth(elemRef?.current?.offsetWidth - 2);
  };
  const handleOnChangeInput = (input: string) => {
    const length = input.length;
    [...input].forEach((char, index) => {
      if (char === myText[1][index].char) {
        myText[1][index].charColor = "text-AAsecondary";
      } else {
        myText[1][index].charColor = "text-AAError";
      }
    });
    setMyText([...myText]);
  };
  const isAllowedKey = (key: number) => {
    /**
     * @allowedKeys
     * check the following URL for allowed Keys :
     * https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
     */
    if (key >= 48 && key <= 90) {
      return true;
    }
    if (key >= 96 && key <= 111) {
      return true;
    }
    if (key >= 186 && key <= 222) {
      return true;
    }
    return false;
  };

  console.log("page re-rendered...");
  console.log("data : ", myText);
  console.log("Active Word : ", activeWordIndex);
  return (
    <div className="bg-AAprimary h-screen w-full flex items-center">
      <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
        <span className="lg:text-3xl md:text-xl sm:text-xl tracking-right">
          {myText[1]?.map((item, index) => {
            return (
              <span key={index} className={`${item.charColor}`}>
                {item.char}
              </span>
            );
          }) || <></>}
          {/* <span ref={elemRef} className="relative">
            {selected ? (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: [1, 0], x: elemWidth }}
                transition={{
                  opacity: { duration: 0.8, repeat: Infinity },
                }}
                className="absolute w-[3px] h-full rounded bg-AAsecondary "
              ></motion.div>
            ) : (
              ""
            )}
            P
          </span> */}
        </span>
        {/**
         * @textInput
         */}
        <input
          type="text"
          className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600 
              py-2 px-4 focus:outline-none "
          onChange={e => {
            // handleOnChangeInput(e.target.value);
          }}
          onKeyDown={e => {
            console.log("code : ",e.key)
          }}
          // onChange={e => {
          //   setInput(e.target.value);
          // }}
        />
        <div className="w-full flex justify-center flex-col">
          <button
            onClick={() => {
              // handleSelect(true);
              myText[1][1].charColor = "text-AAsecondary";
              setMyText([...myText]);
            }}
            className="w-24 border-2 px-8 py-1 rounded text-sm text-white"
          >
            Test 1
          </button>
          <button
            onClick={() => handleMove(true)}
            className="w-24 border-2 px-8 py-1 rounded text-sm text-white"
          >
            Test 2
          </button>
          <button className="w-24 border-2 px-8 py-1 rounded text-sm text-white">
            Test 3
          </button>
        </div>
      </main>
    </div>
  );
}
