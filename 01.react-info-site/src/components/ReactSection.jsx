import React from "react";

const arr = [
  "Was first released in 2013",
  "Was originally created by Jordan Walke",
  "Has well over 100K starts on Github",
  "Is maintained by Facebook",
  "Powers thousands of enterprise apps, including mobile apps",
];

const ReactSection = () => {
  return (
    <div className="react-sec">
      <h1>Fun facts about React</h1>

      <ol>
        {arr.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
};

console.log(ReactSection);
export default ReactSection;
