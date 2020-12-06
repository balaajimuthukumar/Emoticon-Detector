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
    myfunc(emojiDict[val]);
  }

  function click(item) {
    myfunc(emojiDict[item]);
  }
  return (
    <div className="App">
      <h1>Emoticon-Detector</h1>
      <input onChange={tap} />
      <p>{emo}</p>

      {Object.keys(emojiDict).map(function (item) {
        return (
          <span
            style={{ margin: "5px" }}
            onClick={() => click(item)}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
