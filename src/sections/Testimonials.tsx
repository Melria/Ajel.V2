"use client";

import React from "react";
import avatar1 from "@/assets/user.png";
import avatar2 from "@/assets/user.png";
import avatar3 from "@/assets/user.png";
import avatar4 from "@/assets/user.png";
import avatar5 from "@/assets/user.png";
import avatar6 from "@/assets/user.png";
import avatar7 from "@/assets/user.png";
import avatar8 from "@/assets/user.png";
import avatar9 from "@/assets/user.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    text: "AJEL a transformé notre approche stratégique. Grâce à leur expertise en suivi de projets, nous avons atteint nos objectifs plus rapidement que prévu.",
    imageSrc: avatar1.src,
    name: "Emilie Nguimkeu",
  },
  {
    text: "L'accompagnement d'AJEL a boosté notre productivité. Leur soutien constant est essentiel pour notre équipe.",
    imageSrc: avatar2.src,
    name: "Boris Tchoua",
  },
  {
    text: "Avec AJEL, j'ai pu gérer mes projets avec une sérénité inégalée. Leur suivi personnalisé est vraiment précieux.",
    imageSrc: avatar3.src,
    name: "Amina Ndo",
  },
  {
    text: "Leur capacité à comprendre nos besoins et à nous offrir des conseils adaptés a été déterminante pour notre réussite.",
    imageSrc: avatar4.src,
    name: "Kofi Makoumbou",
  },
  {
    text: "AJEL rend la planification d'événements beaucoup plus facile. Leur accompagnement à chaque étape garantit une exécution sans faille.",
    imageSrc: avatar5.src,
    name: "Léa Mbouda",
  },
  {
    text: "Les conseils d'AJEL en gestion de projet sont inestimables. Ils savent comment nous aider à surmonter tous nos défis.",
    imageSrc: avatar6.src,
    name: "Jules Ndong",
  },
  {
    text: "Depuis que nous travaillons avec AJEL, notre communication interne s'est améliorée, rendant notre collaboration plus fluide.",
    imageSrc: avatar7.src,
    name: "Nina Essono",
  },
  {
    text: "Avec AJEL, nous avons des outils et des conseils qui facilitent le suivi de nos progrès et nous aident à atteindre nos objectifs sans stress.",
    imageSrc: avatar8.src,
    name: "Olivier Etonde",
  },
  {
    text: "L'approche personnalisée et l'écoute active d'AJEL font d'eux un partenaire essentiel pour notre développement.",
    imageSrc: avatar9.src,
    name: "Fatou Boubakari",
  },
];



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Testimonials Column Component
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <motion.div
      className={props.className}
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <div className="flex flex-col gap-6 pb-6 ">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name }, index) => (
              <div
                key={index}
                className="card-class p-5 bg-gray-100 rounded-lg shadow"
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    alt={name}
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                    src={imageSrc}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5">{name}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

// Main Testimonials Component
export const Testimonials = () => {
  return (
    <section className="bg-white mt-2.5">
      <div className="container mt-2.5">
        <div className="flex justify-center">
          <div className="badge">Témoignage</div>
        </div>
        <div>
          <h2 className="font-extrabold text-2xl text-center md:text-[46px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
            Ils nous font confiance
          </h2>
          {/* <p className="mt-5 text-center text-[22px] leading-[30px] text-slate-800">
            Aucune description.
          </p> */}
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden ">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
