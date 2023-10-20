import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Tech from "./Tech";

const FadeDown = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <>
      <motion.div
        className="px-4 md:px-24 lg:px-60 mt-8 md:mt-32"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
      >
        <h1 className="font-medium text-lg md:text-xl my-3 text-gray-700 font-raleway tracking-wider">
          Hi, my name is
        </h1>
        <motion.h1
          className=" font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Emmanuel Mensah
        </motion.h1>
        <motion.p
          className="mt-3 whitespace-normal text-gray-700 font-bold text-3xl md:text-5xl md:mb-10"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          I build digital experiences for the web.
        </motion.p>
        <p className="mt-6 text-justify md:text-lg mb-12 lg:w-2/3">
          I am a Frontend Engineer and I focus on building unique digital
          experiences for the web. I am dedicated to continuous learning and
          embracing emerging technologies for innovative solutions.
        </p>
        <div className="flex flex-row justify-evenly mt-24 px-12 md:px-36 lg:gap-6 lg:justify-center">
          <a
            href="https://github.com/preshlele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="hover:text-hover-300 text-lg md:text-3xl " />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-mensah-141b42191/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="hover:text-hover-300 text-lg md:text-3xl" />
          </a>
          <FiTwitter className="hover:text-hover-300 text-lg md:text-3xl" />
          <a href="mailto:emomensa@gmail.com">
            <FiMail className="hover:text-hover-300 text-lg md:text-3xl" />
          </a>
        </div>
      <Tech />
      </motion.div>
    </>
  );
};

export default FadeDown;
