import { wordsStatus,Data,ActiveWordWithIndex } from "../Types/types";

/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
export const getData = async (
  arg_state: React.Dispatch<React.SetStateAction<Data>>,
  setActiveWordWithIndex: React.Dispatch<React.SetStateAction<ActiveWordWithIndex>>,
  setRoundCounter: React.Dispatch<React.SetStateAction<number>>,
  roundCounter: number
) => {
  fetch("/api/typing/10")
    .then(response => response.json())
    .then(data => {
      // ?UNCOMMENT THIS TO MODIFY THE QUOTE FOR TESTING
      // data.quote = "j";
      const wordsAndStatus: wordsStatus = []; // this aaay will hold the words and their status
      data.quote.split(" ").forEach((item: string, index: number) => {
        const word = () => {
          if (data.quote.split(" ").length - 1 == index) {
            return item;
          } else {
            return item + " ";
          }
        };
        wordsAndStatus.push({
          word: word(),
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
      const temArray: Data = [wordsAndStatus, [], { CursorPosition: 0 }]; //temporary array to hold the data

      /**
       * @@explanation for the following action
       * this will will convert data to array of char then push each char to the tempArray second Array
       * as objects with background default value ""
       */
      data.quote.split("").forEach((item: string, index: number) => {
        // pushing the char to the tempArray second Array
        temArray[1].push({
          char: item,
          charColor: "text-gray-500",
        });
      });
      setRoundCounter(roundCounter + 1);
      setActiveWordWithIndex({ wordIndex: 0, wordDetail: temArray[0][0] }); // set the first active word as active after Data is loaded
      /**
       * @stateChange : this will change the state that contains the data
       */
      arg_state(temArray);
    })
    .catch(err => console.error(err));
};

type CharAndColor = { char: string; charColor: string };
// this function will calculate the wpm
export const calculateWpm = (input: CharAndColor[], time: number) => {
  let cpm = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].charColor == "text-AAsecondary") {
      cpm++;
    } else if (input[i].charColor == "text-gray-500") {
      break;
    }
  }
  return Math.floor(Math.round((cpm / time) * 60) / 5);
};

// this function will calculate the accuracy
export const calculateAccuracy = (input: CharAndColor[]) => {
  let correct = 0;
  let incorrect = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].charColor == "text-AAsecondary") {
      correct++;
    } else if (input[i].charColor == "text-AAerror") {
      incorrect++;
    }
  }
  return Math.floor((correct * 100) / input.length);
};

// this will handle onCharChange event and will update the states
export const handleOnChangeInput = (
  input: string,
  event: React.ChangeEvent<HTMLInputElement>,
  activeWordWithIndex: ActiveWordWithIndex,
  setActiveWordWithIndex:React.Dispatch<React.SetStateAction<ActiveWordWithIndex>>,
  myText:Data,
  setMyText:React.Dispatch<React.SetStateAction<Data>>,
  setIsFinished:React.Dispatch<React.SetStateAction<boolean>>,
  timerCountingInterval:React.MutableRefObject<undefined>,
  updateStatistics:() => void,
) => {
  /**
   * @nextForLoop
   * this for loop to give the char its default color back, starting from activeWord first char index
   * this loop will help  when user delete a character
   */
  for (let j = activeWordWithIndex.wordDetail.indexFrom; j < myText[1].length; j++) {
    myText[1][j].charColor = "text-gray-500";
  }

  // start validating from this index CharIndex initial
  let targetWordIndexIncrement = activeWordWithIndex.wordDetail.indexFrom;
  input.split("").forEach((element, index) => {
    myText[1][targetWordIndexIncrement].charColor =
      element === myText[1][targetWordIndexIncrement].char ? "text-AAsecondary" : "text-AAError";
    targetWordIndexIncrement++;
  });
  // checks if input is equal to the active word ( true => set inputValue to "" )
  if (input.localeCompare(activeWordWithIndex.wordDetail.word) == 0) {
    const nextWordIndex = activeWordWithIndex.wordIndex + 1;
    setActiveWordWithIndex({
      wordIndex: nextWordIndex,
      wordDetail: myText[0][nextWordIndex],
    });
    event.target.value = ""; // clear the input
  }

  // set the cursor position to next target Char that will be typed of the active word
  /**
   * @note : normal for loop is used here to break the loop
   */
  for (let i = 0; i < myText[1].length; i++) {
    if (myText[1][i].charColor.localeCompare("text-gray-500") == 0) {
      myText[2].CursorPosition = i;
      break;
    }
  }
  setMyText([...myText]); // update the state
  // Checking if the user finished typing by checking if the last char gray color is changed!
  if (!(myText[1][myText[1].length - 1].charColor === "text-gray-500")) {
    console.log("Player Finished typing!!");
    updateStatistics(); // update statistics
    /**
     * @note :  next line will prevent from showing the previous text when user restarts
     *  by checking !(myText[1].length==0)
     */
    myText[1] = [];
    setMyText([...myText]);
    setIsFinished(true);
    clearInterval(timerCountingInterval.current); // stop the timer
  }
};
