import SectionContainer from "./sectionContainer";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/utils/utils";

type SectionWithTextProps = {
  className?: string;

  title: string;
  text: ReactNode | string;

  imSrc: string;
  imAlt: string;
  imHeight: number;
  imWidth: number;
  imgClassName?: string;
};

const SectionWithText = (props: SectionWithTextProps) => {
  const {
    className,
    title,
    text,
    imSrc,
    imAlt,
    imHeight,
    imWidth,
    imgClassName,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionContainer
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between h-auto gap-8 sm:gap-0 py-4 sm:py-0",
        className
      )}
    >
      <div
        className={cn(
          "text-center flex flex-col gap-10 items-center justify-center w-full transition-all duration-[1s]",
          isInView ? "opacity-100" : "opacity-0"
        )}
        ref={ref}
      >
        <h2 className="text-6xl">{title}</h2>
        <p className="w-full sm:w-[70%] xl:w-[50%] mx-auto font-normal text-xl px-4">
          {text}
        </p>
      </div>

      <div className={cn("w-3/5", imgClassName)}>
        <Image
          src={imSrc}
          alt={imAlt}
          className="object-cover object-center w-full max-h-[90vh]"
          width={imWidth}
          height={imHeight}
          quality={100}
        />
      </div>
    </SectionContainer>
  );
};

export default SectionWithText;
