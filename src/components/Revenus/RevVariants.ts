import { MotionProps } from "framer-motion";

export const variant7 = (delay: number): MotionProps["variants"] => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: "linear",
      duration: 1.5,
      delay,
    },
  },
});