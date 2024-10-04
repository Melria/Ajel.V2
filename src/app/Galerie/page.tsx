import { Header } from "@/sections/Header";
import slide1 from "../../assets/slides_img/slide1.jpg";
import slide2 from "../../assets/slides_img/slide2.jpg";
import slide3 from "../../assets/slides_img/slide3.jpg";
import slide4 from "../../assets/slides_img/slide4.jpg";
import slide5 from "../../assets/slides_img/slide5.jpg";
import slide6 from "../../assets/slides_img/slide6.jpg";
import slide7 from "../../assets/slides_img/slide7.jpg";
import slide8 from "../../assets/slides_img/slide8.jpg";
import slide9 from "../../assets/slides_img/slide9.jpg";
import React from "react";

const page = () => {

  return (
    <>
      <Header />
      <div className="p-20">
        <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${slide1.src})`  , backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          <h2 className="text-4xl font-bold text-white text-center">Premier stage académique que nous avons lancé</h2>
          <p className="mt-2 text-white text-center">Faites défiler vers le bas pour la diapositive suivante</p>
        </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide2.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Première rencontre avec les parents pour présenter l'initiative.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide3.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Première rencontre avec les parents pour présenter l'initiative.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide4.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Prospection dans les établissements pour les bourses de formation gratuites durant les vacances.</h2>  
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide5.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Prospection dans les établissements pour les bourses de formation gratuites durant les vacances.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide6.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold">Attribution des bourses au meilleur élève.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide7.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Clôture de la formation et remise des attestations de participation.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide8.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Installation réseau dans le cadre d'un projet de distribution de connexion.</h2>
            <p className="mt-2 text-center">Faites défiler vers le bas pour la diapositive suivante</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white rounded-xl"
          style={{ backgroundImage: `url(${slide9.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-4xl font-bold text-center">Inauguration de DECODE.</h2>
            <p className="mt-2 text-center">Fin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
