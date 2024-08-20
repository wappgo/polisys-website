import React, { useEffect, useState, useRef } from "react";

const Counter = ({ end, duration = 6000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!counterRef.current) return;

      const rect = counterRef.current.getBoundingClientRect();
      const topOffset = window.innerHeight - rect.top;

      if (topOffset > 0 && topOffset < window.innerHeight) {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [end, duration]);

  return (
    <div className="counter-value" ref={counterRef}>
      {count+"+"}
    </div>
  );
};

export default Counter;
