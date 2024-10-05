import React from "react";
import Button from "./button";

export default function mailing() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10 text-center">
      <p className="text-4xl">Subscribe to our Newsletter</p>
      <p>
        Discover how our email updates can help you prevent sudden cardiac
        arrest in the young.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="text-center border-b-2 border-rose-400 pb-1 mb-5 focus:outline-none"
        />
        <Button text="Subscribe" size="md" color="black" />
      </form>
    </div>
  );
}
