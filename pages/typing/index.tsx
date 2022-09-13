import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
type ActiveWordWithIndex = {
  wordIndex: number;
  wordDetail: {
    word: string;
    typedStatus: boolean;
    indexFrom: number;
    indexTo: number;
  };
};
type Data = [
  wordsStatus,
  [{ char: string; charColor: string }?],
  { CursorPosition: number }
];
type wordsStatus = [
  { word: string; typedStatus: boolean; indexFrom: number; indexTo: number }?
];
type ActiveWordIndex = { index: number; word: string } | null;
type InputAndCursorPos = { input: string; cursorPos: number };
/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
const getData = async arg_state => {
  fetch("https://api.quotable.io/random?minLength=100")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const wordsAndStatus: wordsStatus = []; // this aaay will hold the words and their status
      data.content.split(" ").forEach((item: string, index: number) => {
        wordsAndStatus.push({
          word: item,
          typedStatus: false,
          indexFrom: 0,
          indexTo: 0,
        });
      });
      let LastIndex = 0;
      wordsAndStatus.forEach((item, index) => {
        if (index == 0) {
          item.indexFrom = 0;
          item.indexTo = item.word.length - 1;
          LastIndex = item.indexTo;
        } else {
          item.indexFrom = LastIndex + 2;
          item.indexTo = item.indexFrom + item.word.length - 1;
          LastIndex = item.indexTo;
        }
      });
      const temArray: Data = [wordsAndStatus, [], { CursorPosition: 0 }];

      /**
       * @@explanation for the following action
       * this will will convert data to array of char then push each char to the tempArray second Array
       * as objects with background default value ""
       */
      data.content.split("").forEach((item: string, index: number) => {
        // pushing the char to the tempArray second Array
        temArray[1].push({
          char: item,
          charColor: "text-gray-500",
        });
      });

      arg_state(temArray); // ? this will set the state as an array of characters
    })
    .catch(err => console.error(err));
};

// verify if key is a character

export default function Home() {
  /**
   * the follwwing state will is type of
   * @type [[string[]],[{char:string,charColor:string}]]
   */
  const [myText, setMyText] = React.useState<Data>([
    [],
    [],
    { CursorPosition: 0 },
  ]); // ? this will be an array of characters for now
  const [activeWordWithIndex, setActiveWordWithIndex] =
    useState<ActiveWordWithIndex>(null);
  const [inputAndCursorPos, setInputAndCursorPos] = useState<InputAndCursorPos>(
    { input: "", cursorPos: 0 } // if input is "abc" cursorPos is 3, so to remove b index is 1 that means cursorPos - 2
  );
  const itemRef = useRef([]);
  useEffect(() => {
    if (myText[0].length === 0) {
      getData(setMyText); // setMyText is the callback function
    } else if (activeWordWithIndex === null) {
      setActiveWordWithIndex({ wordIndex: 0, wordDetail: myText[0][0] }); // set the first active word as active after Data is loaded
    }
  }, [myText, activeWordWithIndex]);

  const handleOnChangeInput = (
    input: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    /**
     * @nextForLoop
     * this for loop to give the char its default color back, starting from activeWord first char index
     * this for loop will help  when user delete a character
     */
    for (
      let j = activeWordWithIndex.wordDetail.indexFrom;
      j < myText[1].length;
      j++
    ) {
      myText[1][j].charColor = "text-gray-500";
    }
    let targetWordIndexIncrement = activeWordWithIndex.wordDetail.indexFrom; // start validating from this index CharIndex initial
    for (let i = 0; i < input.length; i++) {
      if (input[i] === myText[1][targetWordIndexIncrement].char) {
        myText[1][targetWordIndexIncrement].charColor = "text-AAsecondary";
      } else {
        myText[1][targetWordIndexIncrement].charColor = "text-AAError";
      }
      targetWordIndexIncrement++;
      if (
        input
          .slice(0, input.length - 1)
          .localeCompare(activeWordWithIndex.wordDetail.word) == 0 &&
        input[input.length - 1].localeCompare(" ") == 0
      ) {
        const nextWordIndex = activeWordWithIndex.wordIndex + 1;

        setActiveWordWithIndex({
          wordIndex: nextWordIndex,
          wordDetail: myText[0][nextWordIndex],
        });
        event.target.value = "";
      }
    }
    // set the cursor position to next target Char that will be typed of the active word
    for (let i = 0; i < myText[1].length; i++) {
      if (myText[1][i].charColor.localeCompare("text-gray-500") == 0) {
        console.log("not typed index : ", i);
        myText[2].CursorPosition = i;
        break;
      }
    }
    setMyText([...myText]);
  };
  const isAllowedKey = (key: string) => {
    const allowedKeys = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      ":",
      ";",
      '"',
      "'",
      "<",
      ">",
      "?",
      "/",
      "\\",
      "~",
      "`",
      " ",
    ];
    if (allowedKeys.includes(key)) {
      return true;
    }
    return false;
  };

  console.log("page re-rendered...");
  console.log("data : ", myText);
  console.log("Active Word : ", activeWordWithIndex);
  console.log("input : ", inputAndCursorPos.input);
  console.log("CursorPosition : ", myText[2].CursorPosition);
  return (
    <div className="bg-AAprimary h-screen w-full flex items-center">
      <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
        <span className="lg:text-3xl md:text-xl sm:text-xl ">
          {myText[1]?.map((item, index) => {
            if (
              item.char.localeCompare(" ") == 0 &&
              item.charColor.localeCompare("text-AAError") == 0
            ) {
              return (
                <span key={index} className={`${item.charColor}`}>
                  _
                </span>
              );
            } else {
              return (
                <>
                  
                  <span
                    key={index}
                    ref={el => (itemRef.current[index] = el)}
                    className={`relative  ${item.charColor}`}
                  >
                    {myText[2].CursorPosition === index ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        opacity: { duration: 0.8, repeat: Infinity },
                      }}
                      className="absolute  z-10 w-[3px] h-8 rounded bg-AAsecondary "
                    ></motion.span>
                  ) : (
                    <></>
                  )}
                    {item.char}
                  </span>
                </>
              );
            }
          }) || <></>}
        </span>
        {/**
         * @textInput
         */}
        <input
          type="text"
          className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600 
              py-2 px-4 focus:outline-none "
          onChange={e => {
            handleOnChangeInput(e.target.value, e);
            console.log("passed input : ", e.target.value);
          }}
          // onKeyDown={e => {
          //   console.log("key  : ", e.key);
          //   if (isAllowedKey(e.key)) {
          //     setInputAndCursorPos({
          //       input: inputAndCursorPos.input + e.key,
          //       cursorPos: inputAndCursorPos.cursorPos + 1,
          //     });
          //   } else {
          //     if (e.key === "Backspace") {
          //       if(inputAndCursorPos.input.length > 0){
          //         setInputAndCursorPos({
          //           input: ()=>{
          //             if(inputAndCursorPos.input.length<2 && inputAndCursorPos.cursorPos==1){// if input contains only one character
          //               return "";
          //             }else{

          //             }
          //           },
          //           cursorPos: inputAndCursorPos.cursorPos - 1,
          //         });
          //       }
          //     }
          //   }
          // }}
        />
        <div className="w-full flex justify-center flex-col">
          <button
            onClick={() => {
              // handleSelect(true);
              // myText[1][1].charColor = "text-AAsecondary";
              // setMyText([...myText]);
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
