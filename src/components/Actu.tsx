"use client";

import { Header } from "@/sections/Header";
import React, { useState } from "react";
import ModalContent from "@/components/ModalContent";
import image1 from "../assets/actus_img/adnova.jpg";
import image2 from "../assets/actus_img/aec.jpg";
import image3 from "../assets/actus_img/commerce.jpg";
import image4 from "../assets/actus_img/connexion.jpg";
import image5 from "../assets/actus_img/education.jpg";
import image6 from "../assets/actus_img/decode.jpg";
import { url } from "inspector";

interface Article {
  title: string;
  subtitle: string;
  author: string;
  image: string;
  content: string;
  tags: string[];
  quote: string;
}

const Actu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleModalOpen = (content: Article) => {
    setModalOpen(true);
    setModalContent(
      <ModalContent
        title={content.title}
        subtitle={content.subtitle}
        author={content.author}
        image={content.image}
        content={content.content}
        tags={content.tags}
        quote={content.quote}
      />
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const articles: Article[] = [
    {
      title: "AD NOVA - Digital Marketing",
      subtitle: "Marketing",
      author: "L'équipe AD NOVA",
      image:
        `url(${image1.src})`,
      content:
        "AD NOVA est un département dans DECODE spécialisé dans le marketing avec pour objectif d’aider tout business présent sur les réseaux sociaux à augmenter leur chiffre d’affaires et d’avoir plus de conversion et de digitaliser leur communication.",
      tags: ["Marketing", "Digital", "Social Media"],
      quote: "Augmentez votre visibilité en ligne avec AD NOVA.",
    },
    {
      title: "AEC - African and Environmental Construction",
      subtitle: "Génie Civil",
      author: "L'équipe AEC",
      image:
        `url(${image2.src})`,
      content:
        "AEC, qui signifie African and Environmental Construction, est le département spécialisé dans le génie civil avec pour vision de se spécialiser dans les bureaux d’études et dans la réalisation des projets.",
      tags: ["Construction", "Génie Civil"],
      quote: "Bâtissons l'avenir avec AEC.",
    },
    {
      title: "AJEL ACADEMY - Formations Techniques",
      subtitle: "Éducation",
      author: "L'équipe AJEL ACADEMY",
      image:
        `url(${image3.src})`,
      content:
        "AJEL ACADEMY est le département spécialisé dans les formations courts et longs termes dans des logiciels tels que AutoCAD, ArchiCAD, Adobe, SolidWorks, etc ; et des domaines tels que la conception mécanique, conception architecturale, développement web, etc.",
      tags: ["Formation", "Techniques", "Logiciels"],
      quote: "Formez-vous pour un avenir meilleur avec AJEL ACADEMY.",
    },
    {
      title: "AJEL CONNECT - Connexion Internet",
      subtitle: "Connexion",
      author: "L'équipe AJEL CONNECT",
      image:
        `url(${image4.src})`,
      content:
        "AJEL CONNECT est le département responsable de la distribution de la connexion internet, l’implémentation de l’IPTV (Internet Protocol Television) à domicile et dans les entreprises.",
      tags: ["Internet", "IPTV"],
      quote: "Restez connecté avec AJEL CONNECT.",
    },
    {
      title: "AJEL STORE - Vente d'Accessoires",
      subtitle: "Commerce",
      author: "L'équipe AJEL STORE",
      image:
        `url(${image5.src})`,
      content:
        "AJEL STORE se charge de la vente de plusieurs accessoires comme des accessoires électroniques, mécaniques, réseautiques, et plus encore.",
      tags: ["Accessoires", "Commerce"],
      quote: "Trouvez tout ce dont vous avez besoin chez AJEL STORE.",
    },
    {
      title: "DECODE - Développement Informatique",
      subtitle: "Technologie",
      author: "L'équipe DECODE",
      image:
        `url(${image6.src})`,
      content:
        "DECODE est le département spécialisé sur le développement informatique. Convaincus que le développement informatique ne se limite pas à la création de sites web ou d’applications, DECODE a pour mission de répondre à tous vos besoins numériques.",
      tags: ["Développement", "Informatique"],
      quote: "Innovons ensemble avec DECODE.",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <Header />
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-5">
              <a href="#">
                <div
                  className="bg-cover bg-center text-center overflow-hidden"
                  style={{
                    minHeight: "300px",
                    backgroundImage: `url(${image1.src})`,
                  }}
                  title="AD NOVA Marketing"
                ></div>
              </a>
              <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <a
                    href="#"
                    className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalOpen(articles[0]);
                    }}
                  >
                    AD NOVA - Digital Marketing
                  </a>
                  <p className="text-gray-700 text-base mt-2">
                    Augmentez votre chiffre d'affaires et digitalisez votre communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.slice(1).map((article, index) => (
                <div key={index}>
                  <a href="#">
                    <div
                      className="h-40 bg-cover text-center overflow-hidden"
                      style={{
                        backgroundImage: article.image,
                      }}
                      title={article.title}
                    ></div>
                  </a>
                  <a
                    href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalOpen(article);
                    }}
                  >
                    {article.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          onClick={handleModalClose}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-10 w-3/4 h-3/4 overflow-y-scroll mt-32 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 p-5"
              onClick={handleModalClose}
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L8 16M8 8L16 16"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Actu;
