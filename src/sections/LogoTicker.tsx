"use client";

import ajelConnect from "@/assets/ajel connect secondary.png";
import ajelStore from "@/assets/ajel store secondary.png";
import ajelAcademy from "@/assets/ajel academy secondary.png";
import ajelAnalytics from "@/assets/ajel analytics secondary.png";
import met from "@/assets/met secondary.png";
import qcic from "@/assets/QCIC .png";
import aec from "@/assets/aec.png";
import pearsonEducation from "@/assets/pearson .png";
import osi from "@/assets/osi.png";
import adNova from "@/assets/adnova secondary.png";
import decode from "@/assets/decode secondary.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%", // Use curly braces instead of parentheses
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop", // Use curly braces instead of parentheses
              }}
            >
              <Image
                src={ajelConnect}
                alt="ajel connect logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelAcademy}
                alt="ajel academy logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelStore}
                alt="ajel store logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelAnalytics}
                alt="ajel analytics logo"
                className="logo-ticker-image"
              />
              <Image src={qcic} alt="qcic logo" className="logo-ticker-image" />
              <Image src={aec} alt="aec logo" className="logo-ticker-image" />
              <Image
                src={adNova}
                alt="adnova logo"
                className="logo-ticker-image"
              />
              <Image
                src={pearsonEducation}
                alt="pearson logo"
                className="logo-ticker-image"
              />
              <Image src={osi} alt="osi logo" className="logo-ticker-image" />
              <Image src={met} alt="met logo" className="logo-ticker-image" />
              <Image
                src={decode}
                alt="decode logo"
                className="logo-ticker-image"
              />

              {/* Second set of logos for animation */}
              <Image
                src={ajelConnect}
                alt="ajel connect logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelAcademy}
                alt="ajel academy logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelStore}
                alt="ajel store logo"
                className="logo-ticker-image"
              />
              <Image
                src={ajelAnalytics}
                alt="ajel analytics logo"
                className="logo-ticker-image"
              />
              <Image src={qcic} alt="qcic logo" className="logo-ticker-image" />
              <Image src={aec} alt="aec logo" className="logo-ticker-image" />
              <Image
                src={adNova}
                alt="adnova logo"
                className="logo-ticker-image"
              />
              <Image
                src={pearsonEducation}
                alt="pearson logo"
                className="logo-ticker-image"
              />
              <Image src={osi} alt="osi logo" className="logo-ticker-image" />
              <Image src={met} alt="met logo" className="logo-ticker-image" />
              <Image
                src={decode}
                alt="decode logo"
                className="logo-ticker-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
