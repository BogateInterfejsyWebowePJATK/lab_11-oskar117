import React from "react";

export default function RandomNumbers() {
  return (
    <ul>
        {Array.apply(0, Array(10)).map(function (x, i) {
            return <li key={i}>{Math.floor(Math.random() * 20)}</li>
        })}
    </ul>   
  );
}