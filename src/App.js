import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😍": "Love It",
  "☹️": "Sad",
  "😭": "Crying",
  "😡": "Angry",
  "😮": "Surprised"
};

export default function App() {
  var [emo, myfunc] = useState("");

  function tap(event) {
    var val = event.target.value;
    if (typeof emojiDict[val] === "undefined") {
      myfunc("Please apply a valid emoticon, copy paste one from below icons");
    } else {
      myfunc(emojiDict[val]);
    }
  }

  function click(item) {
    myfunc(emojiDict[item]);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "#00FF00" }}>Emoticon-Detector</h1>
      <input
        style={{ border: "1px solid #00FF00" }}
        onChange={tap}
        placeholder="Input your emoji"
      />
      <p>{emo}</p>

      {Object.keys(emojiDict).map(function (item) {
        return (
          <span
            style={{ margin: "5px", padding: "1rem" }}
            onClick={() => click(item)}
            key={item}
          >
            {item}
          </span>
        );
      })}
      <p style={{ backgroundColor: "#00FF00", fontFamily: "cursive" }}>
        The first emoji were created in 1999 by Japanese artist Shigetaka
        Kurita. Kurita worked on the development team for “i-mode,” an early
        mobile internet platform from Japan's main mobile carrier, DOCOMO.
      </p>
    </div>
  );
}
