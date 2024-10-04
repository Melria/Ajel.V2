"use client";

import React from "react";
import SvgDown from "@/components/SvgDown";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import StarImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";

const Faqs = () => {
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
    <section className="bg-white" ref={heroRef} id="faqs">
      <div className="bg-white relative w-full px-6 pt-10 pb-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Questions fréquemment posées
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Quelle est la mission d'AJEL ?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Nous avons pris l'engagement d'œuvrer dans un cadre commun et noble afin de contribuer à l'éducation et à la promotion de l'entrepreneuriat au Cameroun. Notre devise est : « JEUNES, PENSONS À DEMAIN ».
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Quels types de services proposez-vous ?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  AJEL offre une gamme de services à travers ses différentes filiales, incluant des formations professionnelles, des conseils en gestion de projets, et des solutions en marketing digital.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Combien de filiales avez-vous ?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  AJEL regroupe 11 filiales, chacune ayant des objectifs distincts mais travaillant toutes ensemble vers notre vision commune.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Comment puis-je vous contacter pour des questions ?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Pour toute question, vous pouvez nous contacter via notre formulaire sur le site ou par email à info@ajel-osi.org. Nous sommes là pour vous aider.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Avez-vous des événements ou des initiatives à venir ?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Oui, nous organisons régulièrement des événements et des ateliers pour encourager l'entrepreneuriat et le développement des compétences. Suivez-nous sur nos réseaux sociaux pour les annonces.
                </p>
              </details>
            </div>
          </div>
          <motion.img
            src={springImg.src}
            alt="Kite Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{
              translateY,
            }}
          />
          <motion.img
            src={StarImg.src}
            alt="tube Image"
            height={240}
            width={240}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
