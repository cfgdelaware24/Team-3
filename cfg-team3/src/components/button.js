"use client";

import { motion } from "framer-motion";

export default function Button(props) {
  const color = {
    red: "text-white bg-rose-600 hover:bg-rose-400",
    black: "text-black bg-transparent border-2 border-rose-600 hover:border-rose-400",
  };

  const size = {
    lg: "max-w-sm",
    md: "max-w-xs",
    sm: "max-w-[16rem]",
    xs: "max-w-[10rem]",
    fit: "max-w-fit",
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={"w-full " + size[props.size]}
    >
      <a
        href={props.href}
        className={"flex rounded-sm transition " + color[props.color]}
      >
        <button
          className={
            "px-3 py-3 w-full border-none text-xl font-semibold" +
            size[props.size]
          }
        >
          {props.text}
        </button>
      </a>
    </motion.div>
  );
}
