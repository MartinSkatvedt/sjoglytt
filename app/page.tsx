"use client";

import Image from "next/image";
import BigLogo from "./components/logo";
import SectionContainer from "./components/sectionContainer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="flex flex-col w-full">
      <SectionContainer className="relative w-full h-[100vh]">
        <Image
          src="/images/sea.jfif"
          alt="Picture of view of the sea"
          priority
          fill
          className="object-cover max-h-[95vh] object-center w-full"
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

      <SectionContainer className="flex flex-col sm:flex-row items-center justify-between h-auto gap-8 sm:gap-0 py-4 sm:py-0">
        <div className="text-center flex flex-col gap-10 items-center justify-center w-full">
          <h2 className="font-normal text-6xl">Velkommen!</h2>
          <p className="w-full sm:w-[50%] xl:w-[30%] mx-auto font-normal text-xl px-4">
            Rorbuen ligger på Moster i Bømlo kommune, og har en størrelse på 110
            kvm fordelt på to etasjer. I tillegg har den en hems på 13 kvm.
            Flott uteområde på bakkeplan, samt en terrasse på ca 12 kvm i 2.
            etasje.
          </p>
        </div>
        <div className="w-3/5">
          <Image
            src="/images/cabin_from_sea.png"
            alt="Picture of view of the pier"
            className="object-cover object-center w-full max-h-[90vh]"
            width={437}
            height={597}
            quality={100}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#D3E1E5] flex gap-8 py-4 sm:py-24 px-2 sm:px-20 flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/3 bg-red-500 h-full">
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

      <SectionContainer className="flex flex-col sm:flex-row items-center justify-between h-auto gap-8 sm:gap-0 flex-wrap-reverse sm:flex-nowrap py-4 sm:py-0">
        <div className="w-3/5 bg-green-500">
          <Image
            src="/images/cabin.png"
            alt="Picture of view of the pier"
            className="object-cover object-center w-full max-h-[90vh]"
            width={708}
            height={814}
            quality={100}
          />
        </div>
        <div className="text-center flex flex-col gap-10 items-center justify-center w-full">
          <h2 className="font-normal text-6xl">Innhold</h2>
          <p className="w-full sm:w-[50%] xl:w-[30%] mx-auto font-normal text-xl px-4">
            Første etasje inneholder entré, 2 soverom, 1 bad og stue + kjøkken.
            Andre etasje inneholder 1 soverom, 1 bad + stue og kjøkken. Rorbuen
            er fullt møblert, godt utstyrt og har en høy standard. Den har
            elbil-lader og 3 parkeringsplasser.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#E1E5D3] flex flex-col sm:flex-row items-center justify-between h-auto gap-8 sm:gap-0 py-4 sm:py-0">
        <div className="text-center flex flex-col gap-10 items-center justify-center w-full">
          <h2 className="font-normal text-6xl">Booking</h2>
          <p className="w-full sm:w-[50%] xl:w-[30%] mx-auto font-normal text-xl px-4">
            Ved booking eller andre spørsmål, kontakt Åse Jensen på tlf{" "}
            <a href="tel:+4790038174">900 36 174</a>.
          </p>
        </div>
        <div className="w-3/5">
          <Image
            src="/images/sunny-sea.jfif"
            alt="Picture of view of the pier"
            className="object-cover object-center w-full max-h-[90vh]"
            width={599}
            height={668}
            quality={100}
          />
        </div>
      </SectionContainer>
    </main>
  );
};

export default Home;
