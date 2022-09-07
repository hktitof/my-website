import React, { useEffect } from "react";

/**
 * @note use minLength & maxLength to limit the quote length
 * @default_URL : https://api.quotable.io/random?minLength=100&maxLength=140
 */
const getData = async arg_state => {
  fetch("https://api.quotable.io/random?minLength=200")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      arg_state(data.content);
    })
    .catch(err => console.error(err));
};

export default function Home() {
  const [myText, setMyText] = React.useState(null);
  useEffect(() => {
    console.log("test 1");
    getData(setMyText);// setMyText is the callback function
    console.log("test 2")
  }, []);
  console.log("page re-rendered...");
  return (
    <div className="bg-AAprimary h-screen w-full flex items-center">
      <main className="px-8">
      <span className="text-gray-700 text-3xl text-center">{myText}</span>

      </main>
    </div>
  );
}
