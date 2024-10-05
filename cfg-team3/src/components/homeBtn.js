import React from "react";

export default function HomeBtn({ text, isTransparent }) {
  return (
    <>
      {isTransparent ? (
        <button className="bg-transparent border-2 border-red-400 p-5 rounded-md">
          {text}
        </button>
      ) : (
        <button className="bg-red-400 p-5 rounded-md">{text}</button>
      )}
    </>
  );
}
