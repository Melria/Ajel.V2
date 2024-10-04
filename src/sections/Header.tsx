"use client";

import Logo from "@/assets/ajel icon.png";
import CloseIcon from "@/assets/close.svg"; // new close icon component
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // add state to track menu open state

  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20 scroll-smooth">
        <div className="flex justify-center items-center py-3 bg-slate-700 text-white text-sm mx-auto gap-3">
          <p className="hidden md:block ml-5 text-slate-50/80">
          Chez AJEL, nous croyons en l'avenir des jeunes talents.
          </p>
          <p className="ml-5">+237 6 90 32 87 34</p>
          <p>info@ajel-osi.org</p>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="flex justify-between items-center md:flex-row flex-col">
              <div className="flex justify-between items-center w-full md:w-auto">
                <Image src={Logo} alt="logo" height={60} width={60} />
                {menuOpen ? (
                  <CloseIcon
                    className="h-8 w-8 md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  />
                ) : (
                  <MenuIcon
                    className="h-8 w-8 md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                  />
                )}
              </div>
              {menuOpen && (
                <nav className="flex flex-col gap-6 text-slate-700 items-end bg-transparent mt-5 md:hidden w-full">
                  <a
                    href="#"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Accueil
                  </a>
                  <a
                    href="/Formation"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Formations
                  </a>
                  <a
                    href="#apropos"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Ajel
                  </a>
                  <a
                    href="#services"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Services
                  </a>
                  <a
                    href="#filiales"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Filiales
                  </a>
                  <a
                    href="/Actu"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Actualitées
                  </a>
                  <a
                    href="/Galerie"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    Galérie
                  </a>
                  <a
                    href="#faqs"
                    className="hover:underline transition-all hover:font-semibold"
                  >
                    FAQs
                  </a>
                  <button className="btn btn-primary md:text-sm lg:text-md">
                    <a href="#form">Contactez-nous</a>
                  </button>
                </nav>
              )}
              <nav className="hidden md:flex gap-6 text-slate-700 items-center">
                <a
                  href="#"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Accueil
                </a>
                <a
                  href="/Formation"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Formations
                </a>
                <a
                  href="#apropos"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Ajel
                </a>
                <a
                  href="#services"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Services
                </a>
                <a
                  href="#filiales"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Filiales
                </a>
                <a
                  href="/Actu"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Actualitées
                </a>
                <a
                  href="/Galerie"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  Galérie
                </a>
                <a
                  href="#faqs"
                  className="hover:underline transition-all hover:font-semibold"
                >
                  FAQs
                </a>
                <button className="btn btn-primary md:text-sm lg:text-md">
                  <a href="#form">Contactez-nous</a>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
