import React, { useEffect, useState } from "react";
// import "../styles/Try.css";
import Img from "../components/smallComp/image/Img";

export default function Try() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Prevent the default scroll behavior to have a smoother zoom effect
  
      const zoomChangeAmount = 0.1; // Smaller increment for a smoother zoom
      let newZoomLevel = zoomLevel + (event.deltaY > 0 ? zoomChangeAmount : -zoomChangeAmount);
      newZoomLevel = Math.min(Math.max(newZoomLevel, 1), 4); // Clamp between 1 and 4
  
      setZoomLevel(newZoomLevel);
  
      // Adjust opacity based on the newZoomLevel, for a smoother transition
      const newOpacity = newZoomLevel < 1.5 ? Math.max(0, 1 - newZoomLevel / 1.5) : 0;
      setOpacity(newOpacity);
    };
  
    window.addEventListener("wheel", handleWheel, { passive: false });
  
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [zoomLevel, opacity]);

  return (
    <div className="App">
      <div
        className="layer first-layer"
        style={{ transform: `scale(${zoomLevel})`, opacity: opacity }}
      >
        <Img
          src={"/img/magnifying-glass.svg"}
          className={"magnifyingGlass"}
          alt={"Magnifying Glass"}
        />
      </div>
      <div
        className="layer second-layer"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        <div className="laptop-screen-container">
          <Img
            src={"/img/laptopscreen.svg"}
            className={"laptop-screen"}
            alt={"Laptop Screen"}
          />
        </div>
        <div className="zoomed-out-display-container">
          <Img
            src={"img/Zoomedoutdisplay.png"}
            className={"zoomed-out-display"}
            alt={"My Image"}
          />
        </div>
      </div>
      <div className={"ovalButton"}></div>
      <div className={"arrowContainer"}>
        <div className={"chevron"}></div>
        <div className={"chevron"}></div>
        <div className={"chevron"}></div>
      </div>
    </div>
  );
}
