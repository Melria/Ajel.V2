"use client";

import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
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
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="badge">Testimonials</div>
        </div>
        <div>
          <h2 className="font-extrabold text-2xl text-center md:text-[46px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
            Ils nous font confiance
          </h2>
          <p className="mt-5 text-center text-[22px] leading-[30px] text-slate-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            labore nulla dolores exercitationem, optio velit soluta atque odio
            id nisi.
          </p>
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
