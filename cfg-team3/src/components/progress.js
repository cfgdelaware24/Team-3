import React from "react";

export default function Progress({ current, total, text }) {
  const percentage = (current / total) * 100;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0df",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      {text && (
        <p
          className="absolute text-center"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          {text}
        </p>
      )}
      <div
        className="bg-rose-600 p-3.5"
        style={{
          width: `${percentage}%`,
          height: "20px",
          borderRadius: "8px",
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
}
