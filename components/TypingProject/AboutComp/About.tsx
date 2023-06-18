import Img from "..//Image/Img";
export default function About() {
  return (
    <div
      className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 
                    flex md:flex-row flex-col md:space-x-12 items-center space-y-4 pt-24 
                    opacity-70   hover:opacity-100 duration-500
                    
                     "
      // opacity-10   hover:opacity-100 duration-500
    >
      <div className="flex-none  w-32 lg:w-44 flex justify-center items-center">
        <Img src="gdscCercle.png" alt="About picture" className="opacity-80" />
      </div>
      <div className="flex flex-col space-y-8  items-center">
        <span className="font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300 text-center">
          What&apos;s this project for?
        </span>
        <span className="font-sans italic  sm:text-base text-sm text-gray-400 text-center">
          Most jobs do not explicitly require certain typing speeds, but that&apos;s because basic typing skills are
          taken as a given. Thus, you should{" "}
          <span className="font-bold text-gray-300">aim for a typing speed of at least 40 WPM</span> to keep up a
          standard level of efficiency at work..However this project aim to help you to improve your typing speed by
          tracking your progress in each round and give you a score based on your typing speed and accuracy.
        </span>
      </div>
    </div>
  );
}
