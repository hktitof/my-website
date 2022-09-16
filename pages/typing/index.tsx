import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
type ActiveWordWithIndex = {
  wordIndex: number;
  wordDetail: {
    word: ReturnType<() => string>;
    typedStatus: boolean;
    indexFrom: number;
    indexTo: number;
  };
};
type Data = [wordsStatus, [{ char: string; charColor: string }?], { CursorPosition: number }];
type wordsStatus = [{ word: string; typedStatus: boolean; indexFrom: number; indexTo: number }?];
type ActiveWordIndex = { index: number; word: string } | null;
type InputAndCursorPos = { input: string; cursorPos: number };
/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
const getData = async arg_state => {
  fetch("https://api.quotable.io/random?minLength=20")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.content = "People.";
      const wordsAndStatus: wordsStatus = []; // this aaay will hold the words and their status
      data.content.split(" ").forEach((item: string, index: number) => {
        const word = () => {
          if (data.content.split(" ").length - 1 == index) {
            return item;
          } else {
            return item + " ";
          }
        };
        wordsAndStatus.push({
          word: word(),
          typedStatus: false,
          indexFrom: 0,
          indexTo: 0,
        });
      });
      // getting index of the first char and last char in the text.
      let LastIndex = 0;
      wordsAndStatus.forEach((item, index) => {
        if (index == 0) {
          item.indexFrom = 0;
          item.indexTo = item.word.length - 1;
          LastIndex = item.indexTo;
        } else {
          item.indexFrom = LastIndex + 1;
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
  // ? this will be an array of characters for now
  const [myText, setMyText] = React.useState<Data>([[], [], { CursorPosition: 0 }]);
  const [activeWordWithIndex, setActiveWordWithIndex] = useState<ActiveWordWithIndex>(null);
  const [inputAndCursorPos, setInputAndCursorPos] = useState<InputAndCursorPos>(
    { input: "", cursorPos: 0 } // if input is "abc" cursorPos is 3, so to remove b index is 1 that means cursorPos - 2
  );
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (myText[0].length === 0) {
      getData(setMyText); // setMyText is the callback function
    } else if (activeWordWithIndex === null) {
      setActiveWordWithIndex({ wordIndex: 0, wordDetail: myText[0][0] }); // set the first active word as active after Data is loaded
      inputRef.current.focus();
    }
  }, [myText, activeWordWithIndex]);

  const handleOnChangeInput = (input: string, event: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * @nextForLoop
     * this for loop to give the char its default color back, starting from activeWord first char index
     * this for loop will help  when user delete a character
     */
    for (let j = activeWordWithIndex.wordDetail.indexFrom; j < myText[1].length; j++) {
      myText[1][j].charColor = "text-gray-500";
    }

    // start validating from this index CharIndex initial
    let targetWordIndexIncrement = activeWordWithIndex.wordDetail.indexFrom;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === myText[1][targetWordIndexIncrement].char) {
        myText[1][targetWordIndexIncrement].charColor = "text-AAsecondary";
      } else {
        myText[1][targetWordIndexIncrement].charColor = "text-AAError";
      }
      targetWordIndexIncrement++;
    }
    // checks if input es equal to the active word ( true => set inputValue to "" )
    if (
      input.localeCompare(activeWordWithIndex.wordDetail.word) == 0 &&
      input[input.length - 1].localeCompare(" ") == 0
    ) {
      const nextWordIndex = activeWordWithIndex.wordIndex + 1;
      setActiveWordWithIndex({
        wordIndex: nextWordIndex,
        wordDetail: myText[0][nextWordIndex],
      });
      event.target.value = "";
    }

    //? INFORMATIONAL : this will set the ActiveWordIndex to next word is the user typed last two words incorrectly
    // if (
    //   input.length == activeWordWithIndex.wordDetail.word.length + myText[0][activeWordWithIndex.wordIndex+1].word.length
    // ) {
    //   const nextWordIndex = activeWordWithIndex.wordIndex + 1;
    //   setActiveWordWithIndex({
    //     wordIndex: nextWordIndex,
    //     wordDetail: myText[0][nextWordIndex],
    //   });
    //   event.target.value = "";
    // }

    // set the cursor position to next target Char that will be typed of the active word
    for (let i = 0; i < myText[1].length; i++) {
      if (myText[1][i].charColor.localeCompare("text-gray-500") == 0) {
        console.log("not typed index : ", i);
        myText[2].CursorPosition = i;
        break;
      }
    }

    setMyText([...myText]);
    if (
      activeWordWithIndex.wordIndex == myText[0].length - 1 &&
      !(myText[1][myText[1].length - 1].charColor === "text-gray-500")
    ) {
      console.log("Player Finished typing!!")
      setIsFinished(true);
    }
  };

  console.log("page re-rendered...");
  console.log("data : ", myText);
  console.log("Active Word : ", activeWordWithIndex);
  console.log("input : ", inputAndCursorPos.input);
  console.log("CursorPosition : ", myText[2].CursorPosition);
  const handleWordsAndChars = () => {
    for (let j = 0; j < myText[0].length; j++) {}
  };
  const space = " ";
  return (
    <div className="bg-AAprimary h-screen w-full flex items-center">
      <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
        {!isFinished && (
          <>
            {" "}
            <div
              key={987987}
              className="lg:text-3xl md:text-xl sm:text-xl hover:cursor-pointer  flex flex-wrap"
              onClick={() => inputRef.current.focus()}
            >
              {myText[0].map((word, index) => {
                return (
                  <div key={index} className="flex ">
                    {word.word.split("").map((char, i) => {
                      if (
                        char.localeCompare(" ") == 0 &&
                        myText[1][word.indexFrom + i].charColor.localeCompare("text-AAError") == 0
                      ) {
                        return (
                          <div key={i} className={`relative text-AAError`}>
                            {i + word.indexFrom == myText[2].CursorPosition ? (
                              <motion.span
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                  opacity: { duration: 0.8, repeat: Infinity },
                                }}
                                className="absolute left-0 w-[3px] lg:h-8 sm:bottom-0 sm:h-5 h-4 rounded bg-AAsecondary "
                              ></motion.span>
                            ) : (
                              <></>
                            )}
                            _
                          </div>
                        );
                      } else if (char.localeCompare(" ") == 0) {
                        return (
                          <div key={i} className="relative ">
                            {i + word.indexFrom == myText[2].CursorPosition ? (
                              <motion.span
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                  opacity: { duration: 0.8, repeat: Infinity },
                                }}
                                className="absolute left-0 w-[3px] lg:h-8 sm:bottom-0 sm:h-5 h-4 rounded bg-AAsecondary "
                              ></motion.span>
                            ) : (
                              <></>
                            )}
                            &nbsp;
                          </div>
                        );
                      } else {
                        return (
                          <div key={i} className={`relative ${myText[1][word.indexFrom + i].charColor}`}>
                            {char}
                            {i + word.indexFrom == myText[2].CursorPosition ? (
                              <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                  opacity: { duration: 0.8, repeat: Infinity },
                                }}
                                className="absolute left-0 w-[3px] lg:h-8 sm:bottom-0 sm:h-6 h-4 rounded bg-AAsecondary "
                              ></motion.div>
                            ) : (
                              <></>
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
            {/**
             * @textInput
             */}
            <input
              ref={inputRef}
              type="text"
              className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600 
              py-2 px-4 focus:outline-none "
              onChange={e => {
                handleOnChangeInput(e.target.value, e);
                console.log("passed input : ", e.target.value);
              }}
              onKeyDownCapture={e => {
                // prevent cursor in input from jumping two characters
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length + 1);
                  inputRef.current.focus();
                }
              }}
            />
          </>
        )}
        {isFinished && (
          <>
            <div className="flex items-center">
              <div className="text-AAsecondary">You finished!!</div>
            </div>
          </>
        )}

        <div className="w-full flex justify-center flex-col">
          <button onClick={() => {}} className="w-24 border-2 px-8 py-1 rounded text-sm text-white">
            Test 1
          </button>
        </div>
      </main>
    </div>
  );
}
