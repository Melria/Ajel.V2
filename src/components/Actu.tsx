"use client";

import { Header } from "@/sections/Header";
import React, { useState } from "react";
import closeIcon from "@/assets/close.svg";
import Image from "next/image";
import ModalContent from "@/components/ModalContent";

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
      title: "Revenge of the Never Trumpers",
      subtitle: "Election, Politics",
      author: "Ahmad Sultani",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Election", "people", "Election2020", "trump", "Joe"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Trump Steps Back Into Coronavirus Spotlight",
      subtitle: "Politics, Election",
      author: "John Doe",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Coronavirus", "Election", "Politics"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Revenge of the Never Trumpers",
      subtitle: "Election, Politics",
      author: "Ahmad Sultani",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Election", "people", "Election2020", "trump", "Joe"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Trump Steps Back Into Coronavirus Spotlight",
      subtitle: "Politics, Election",
      author: "John Doe",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Coronavirus", "Election", "Politics"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Revenge of the Never Trumpers",
      subtitle: "Election, Politics",
      author: "Ahmad Sultani",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Election", "people", "Election2020", "trump", "Joe"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Trump Steps Back Into Coronavirus Spotlight",
      subtitle: "Politics, Election",
      author: "John Doe",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Coronavirus", "Election", "Politics"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Revenge of the Never Trumpers",
      subtitle: "Election, Politics",
      author: "Ahmad Sultani",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Election", "people", "Election2020", "trump", "Joe"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Trump Steps Back Into Coronavirus Spotlight",
      subtitle: "Politics, Election",
      author: "John Doe",
      image:
        "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tags: ["Coronavirus", "Election", "Politics"],
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    // Add more articles here...
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
                    backgroundImage:
                      "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')",
                  }}
                  title="Woman holding a mug"
                ></div>
              </a>
              <div className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <a
                    href="#"
                    className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    Election
                  </a>
                  <a
                    href="#"
                    className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalOpen(articles[0]);
                    }}
                  >
                    Revenge of the Never Trumpers
                  </a>
                  <p className="text-gray-700 text-base mt-2">
                    Meet the Republican dissidents fighting to push Donald Trump
                    out of office—and reclaim their party
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.slice(1).map((article, index) => (
                <div key={index} className="">
                  <a href="#">
                    <div
                      className="h-40 bg-cover text-center overflow-hidden"
                      style={{
                        backgroundImage: `url(${article.image})`,
                      }}
                      title="Woman holding a mug"
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
              {
                <p className="w-6 h-6 fill-gray-900">
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
                </p>
              }
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Actu;
