import React from "react";
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

const Filiale = () => {
  return (
    <div className="min-h-screen p-4" id="filiales">
      <div className="container mx-auto pt-12 pb-20">
        <h2 className="font-extrabold text-2xl text-center md:text-[46px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
          Nos Filiales
        </h2>
        <p className="text-gray-700 text-lg text-center mb-12">
        AJEL CORPORATION a sous sa tutelle 11 filiales avec des fonctions et objectifs bien distingués mais tous épousant la même vision. Ces filiales sont les suivantes :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={adNova} alt="ad nova" height={50} />
            <p className="text-gray-700 text-sm">
            AD NOVA est un département dans DECODE spécialisé dans le marketing avec pour objectif d’aider tout business présent sur les réseaux sociaux à augmenter leur chiffre d’affaires et d’avoir plus de conversion et de digitaliser leur communication.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={aec} alt="aec" height={50} />
            <p className="text-gray-700 text-sm">
            AEC, qui signifie African and Environmental Construction, est le département spécialisé dans le génie civil avec pour vision de se spécialiser dans les bureaux d’études et dans la réalisation des projets.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelAcademy} alt="ajel academy" height={50} />
            <p className="text-gray-700 text-sm">
            AJEL ACADEMY est le département spécialisé dans les formations courts et longs termes dans des logiciels tels que AutoCAD, ArchiCAD, Adobe, SolidWorks, etc ; et des domaines tels que la conception mécanique, conception architectural, développement web, etc.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelAnalytics} alt="ajel analytics" height={50} />
            <p className="text-gray-700 text-sm">
            AJEL STORE se charge de la vente de plusieurs accessoires comme par exemple des accessoires électronique (souris, clé USB, disque dur, clavier, etc), accessoires mécaniques (tournevis, EPI, chaussures de sécurité, mètre, etc), accessoires réseautiques et plein d’autres.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelConnect} alt="ajel connect" height={50} />
            <p className="text-gray-700 text-sm">
            AJEL CONNECT est le département responsable de la distribution de la connexion internet, l’implémentation de l’IPTV (Internet Protocol Television) à domicile et dans les entreprises.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelStore} alt="ajel store" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={decode} alt="decode" height={50} />
            <p className="text-gray-700 text-sm">
            DECODE est le département spécialisé sur le développement informatique. Convaincus que le développement informatique ne se limite pas à la création des sites web ou d’applications, DECODE a pour ambition de devenir une référence africaine dans le domaine des TIC.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={met} alt="met" height={50} />
            <p className="text-gray-700 text-sm">
            MET, qui signifie Mechanical and Electronic Technology, jumelle les compétences de trois domaines : la mécanique, l’électricité et l’électronique. MET œuvre afin d’être une référence en Afrique en termes de design et de réalisation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={osi} alt="osi" height={50} />
            <p className="text-gray-700 text-sm">
            OSI, qui signifie Open Space Invest, est le département est celui qui gère et harmonise toute la comptabilité (actionnariat, investissement et le budget de fonctionnement de l’ensemble du conglomérat) avec pour objectif de devenir une banque dans le long terme.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image
              src={pearsonEducation}
              alt="pearson pearson Education "
              height={50}
            />
            <p className="text-gray-700 text-sm">
            PEARSON EDUCATION est le département spécialisé dans les certifications reconnues de façon internationale. PEARSON EDUCATION dispose à ce jour d’un agrément de CERTIPORT administré par PEARSON VUE, l’entreprise Américaine la mieux cote au monde en termes de certification.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={qcic} alt="qcic" height={50} />
            <p className="text-gray-700 text-sm">
            QCIC, qui signifie Quintessence Chemical Innovation Company, est le département spécialisé dans la recherche et développement de nouvelles substances chimiques, de procédés et de technologies révolutionnaires qui apportent des avantages signifiants dans divers domaines (environnement, industrie, santé).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filiale;
