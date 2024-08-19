"use client";

import Image from "next/image";
import BigLogo from "./components/logo";
import SectionContainer from "./components/sectionContainer";
import { motion } from "framer-motion";
import SectionWithText from "./components/sectionWithText";

const Home = () => {
  return (
    <main className="flex flex-col w-full">
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

      <SectionWithText
        title="Velkommen!"
        text="Rorbuen ligger på Moster i Bømlo kommune, og har en størrelse på 110
            kvm fordelt på to etasjer. I tillegg har den en hems på 13 kvm.
            Flott uteområde på bakkeplan, samt en terrasse på ca 12 kvm i 2.
            etasje."
        imSrc="/images/velkommen.png"
        imAlt="Picture of the cabin from the sea"
        imHeight={437}
        imWidth={597}
        imgClassName="sm:p-[10vh]"
      />

      <SectionContainer className="bg-[#D3E1E5] flex gap-8 py-4 sm:py-24 px-2 sm:px-20 flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/3 h-full">
          <Image
            src="/images/living_room.png"
            alt="Picture of the living room"
            className="object-cover object-center max-h-[90vh]"
            fill
            quality={100}
          />
        </div>

        <div className="relative w-full sm:w-1/3 h-full">
          <Image
            src="/images/kitchen.png"
            alt="Picture of the kitchen"
            className="object-cover object-center max-h-[90vh]"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-full sm:w-1/3 h-full">
          <Image
            src="/images/bedroom.png"
            alt="Picture of the bedroom"
            className="object-cover object-center max-h-[90vh]"
            fill
            quality={100}
          />
        </div>
      </SectionContainer>

      <SectionWithText
        className="sm:flex-row-reverse"
        title="Innhold"
        text="Første etasje inneholder entré, 2 soverom, 1 bad og stue + kjøkken. Andre etasje inneholder 1 soverom, 1 bad + stue og kjøkken. Rorbuen er fullt møblert, godt utstyrt og har en høy standard. Den har elbil-lader og 3 parkeringsplasser."
        imSrc="/images/innhold.png"
        imAlt="Picture of the cabin"
        imHeight={814}
        imWidth={708}
      />

      <SectionWithText
        className="bg-[#E1E5D3]"
        title="Booking"
        text={
          <>
            Ved booking eller andre spørsmål, kontakt Åse Jensen på tlf{" "}
            <a href="tel:+4790038174">900 36 174</a>.
          </>
        }
        imSrc="/images/booking.png"
        imAlt="Picture of view of the pier"
        imWidth={599}
        imHeight={668}
      />
    </main>
  );
};

export default Home;
