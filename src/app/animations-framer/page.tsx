"use client";
import AnimatedBall from "@/components/animations/animated-framer";
import { useEffect, useReducer, useState } from "react";

export default function Page() {
  const [clicked, toggleClicked] = useReducer((s) => !s, false);
  const [duration, setDuration] = useState(0);
  const [bounce, setBounce] = useState(0);
  useEffect(() => {
    clicked && toggleClicked();
  });
  return (
    <div className="flex flex-col gap-2 p-10 ">
      <div className="flex flex-row justify-between">
        <div>
          <input type="radio" id="html" name="fav_language" value="comfy" /> 
          <label for="html">Comfy</label>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label>duration</label>
              <p>{duration}</p>
            </div>

            <input
              type="range"
              max="5"
              step="0.1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <div className="flex justify-between">
              <label>bounce</label>
              <p>{bounce}</p>
            </div>
            <input
              type="range"
              max="1"
              step="0.05"
              value={bounce}
              onChange={(e) => setBounce(e.target.value)}
            />
          </div>
        </div>
        <div>
          <input type="radio" id="css" name="fav_language" value="CSS" /> 
          <label for="css">Physics</label>
          <div className="flex flex-col gap-2">
            <label>stiffness</label>
            <input type="range" />
            <label>damping </label>
            <input type="range" />
            <label>mass</label>
            <input type="range" />
          </div>
        </div>
      </div>

      <button className="border border-black" onClick={toggleClicked}>
        animate
      </button>
      <h1>Control</h1>
      <AnimatedBall
        toggleAnimation={clicked}
        duration={duration}
        bounce={bounce}
      />
    </div>
  );
}
