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
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How does the billing work?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Can I get a refund for my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Is there a free trial?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a free trial of our software for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I contact support?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  If you need help with our platform or have any other
                  questions, you can contact the company support team by
                  submitting a support request through the website or by
                  emailing support@ourwebsite.com.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                    <SvgDown />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We may offer discounts or promotions from time to time. To
                  stay up-to-date on the latest deals and special offers, you
                  can sign up for the company newsletter or follow it on social
                  media.
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
