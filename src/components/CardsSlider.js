import React from "react";
import { useEffect, useState } from "react";
import chevron from "./../chevron.svg";

export const CardsSlider = ({ scrolledItem }) => {
  // Max Scroll
  let [maxScroll, setMaxScroll] = useState(0);
  let scroll = 0;

  // Scroll Fucntionality
  useEffect(() => {
    setMaxScroll(scrolledItem.current.scrollWidth);
  }, [scrolledItem]);

  const swipRight = () => {
    scroll += window.innerWidth;
    scrolledItem.current.scrollTo(scroll, 0);
    if (scroll >= maxScroll) {
      scroll = 0;
      scrolledItem.current.scrollTo(scroll, 0);
    }
  };
  const swipLeft = () => {
    scroll -= window.innerWidth;
    scrolledItem.current.scrollTo(scroll, 0);
    if (scroll < 0) scroll = 0;
  };

  // Auto scrolling
  const seconds = 2;
  // useEffect(() => {
  setInterval(() => {
    if (typeof window !== "undefined") {
      // Code accessing window
      scroll += window.innerWidth;
      scrolledItem.current.scrollTo(scroll, 0);

      if (scroll > maxScroll) {
        scroll = 0;
        scrolledItem.current.scrollTo(scroll, 0);
      }
    }
  }, seconds * 1000);
  // });

  return (
    <div className="w-full absolute top-1/2">
      <div className="md:flex md:justify-between md:px-60 z-50 hidden">
        <img
          src={chevron}
          alt={"Chevron"}
          className="rounded-full w-11 h-11 rotate-90 bg-primary-1 flex items-center justify-center text-xl shadow-sm text-white cursor-pointer z-50"
          onClick={() => swipLeft()}
        />
        <img
          src={chevron}
          alt={"Chevron"}
          className="rounded-full w-11 h-11 shadow-sm -rotate-90 bg-primary-1 flex items-center justify-center text-xl text-white cursor-pointer z-50"
          onClick={() => swipRight()}
        />
      </div>
    </div>
  );
};
