"use client";

import BigLogo from "../logo";
import SectionContainer from "../sectionContainer";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <SectionContainer className="relative w-full">
      <Image
        src="/images/hero.png"
        alt="Picture of view of the sea"
        priority
        fill
        className="object-cover max-h-[95vh] object-center w-full"
        quality={100}
      />
      <motion.div
        layout
        initial={{
          top: "30%",
        }}
        animate={{
          top: "50%",
        }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute left-1/2 translate-x-[-50%] translate-y-[-50%] w-4/5 sm:w-3/5"
      >
        <BigLogo className="w-full" />
      </motion.div>
    </SectionContainer>
  );
};

export default Hero;
