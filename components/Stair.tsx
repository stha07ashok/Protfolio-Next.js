import { motion } from "motion/react";

const Stair = () => {
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stair;
