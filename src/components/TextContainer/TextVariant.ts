import { MotionProps } from "framer-motion";

export const variant2 = (delay: number): MotionProps["variants"] => ({
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


export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  