"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <>
      <section
        ref={heroRef}
        className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fcb73f,#EAEEFE_100%)] overflow-x-clip"
      >
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[478px]">
              {/* <div className="badge">ajel-corporation v2.0</div> */}
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-orange-500 to-orange-600 text-transparent bg-clip-text mt-6 ">
                Des solutions adaptées à vos besoins.
              </h1>
              <p className="text-xl text-slate-800 mt-6">
              Nous nous engageons à œuvrer ensemble pour contribuer à l'éducation et à la promotion de l'entrepreneuriat au Cameroun. Notre devise : « JEUNES, PENSONS À DEMAIN ». 

              </p>
              <div className="flex gap-1 items-center mt-[30px] ">
                <button className="btn btn-text border border-slate-800 hover:bg-slate-50/20 transition ease-in duration-200">
                  <a href="#form">Contactez-nous</a>
                </button>
                <button className="btn btn-primary gap-1 font-bold">
                  <span>
                    <a href="#services">Nos services</a>
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <motion.img
                src={cogImage.src}
                alt="cog Image"
                className="md:h-full md:absolute md:w-auto md:max-w-none md:-left-6 lg:left-0"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut", // Reverse animation on repeat
                }}
              />
              <motion.img
                src={cylinderImage.src}
                width={220}
                height={220}
                alt="cylinder Image"
                className="hidden md:block -top-8 -left-32 md:absolute"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={noodleImage.src}
                width={220}
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                alt="noodle Image"
                style={{
                  rotate: 30,
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
