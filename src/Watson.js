import React from "react";
import JsonData from "./data/watsonLog.json";

export default function Watson() {
  return (
    <div className="App">
      {JsonData.map((data, key) => {
        return <h1 key={key}>{data.start}</h1>;
      })}
    </div>
  );
}
