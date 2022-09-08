import React, { useEffect } from "react";

/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
const getData = async arg_state => {
  fetch("https://api.quotable.io/random?minLength=200")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      arg_state(data.content.split("")); // ? this will set the state as an array of characters
    })
    .catch(err => console.error(err));
};

export default function Home() {
  const [myText, setMyText] = React.useState(null);
  useEffect(() => {
    console.log("test 1");
    getData(setMyText); // setMyText is the callback function
    console.log("test 2");
  }, []);
  console.log("page re-rendered...");
  return (
    <div className="bg-AAprimary h-screen w-full flex items-center">
      <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
        <span className="text-gray-600 lg:text-3xl md:text-xl sm:text-xl ">
          {/* {myText?.map((char, index) => {
            return(
              <span key={index} className="bg-red-800 text-white">{char}</span>
            )
          })|| <></>} */}
          <span className="text-AAsecondary">P</span>
          <span className="text-AAError">e</span>
          <span className=" text-AAError">o</span>
          <span className="text-AAsecondary">p</span>
          <span className="text-AAsecondary">l</span>
          <span className="text-AAsecondary">e</span>
          <span className=""> </span>
          <span className="">P</span>
          <span className="">e</span>
          <span className="">o</span>
          <span className="">p</span>
          <span className="">l</span>
          <span className="">e</span>
        </span>
        {/**
         * @textInput
         */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600 
              py-2 px-4 focus:outline-none "
            placeholder=""
          />
        </div>
      </main>
    </div>
  );
}
