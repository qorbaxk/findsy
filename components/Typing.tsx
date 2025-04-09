"use client";

import { TypeAnimation } from "react-type-animation";

export interface ITyping {
  sequence: string[];
  repeat?: number;
}

const Typing = ({ sequence, repeat = 1 }: ITyping) => {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={50}
      repeat={repeat}
      style={{ whiteSpace: "pre-line" }}
      className="font-Mediasansextended"
    />
  );
};
export default Typing;
