import React from "react";

interface ModalContentProps {
  title: string;
  subtitle: string;
  author: string;
  image: string;
  content: string;
  tags: string[];
  quote: string;
}

const ModalContent: React.FC<ModalContentProps> = ({
  title,
  subtitle,
  author,
  image,
  content,
  tags,
  quote,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div
        className="bg-cover h-64 text-center overflow-hidden"
        style={{
          height: "450px",
          backgroundImage: image,
        }}
      ></div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <a
              href="#"
              className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              {subtitle}
            </a>
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{title}</h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {author}
              </a>
            </p>
            <p className="text-base leading-8 my-5">{content}</p>
            <h3 className="text-2xl font-bold my-5">
              #1. À Propos ?
            </h3>
            <p className="text-base leading-8 my-5">{content}</p>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
              {quote}
            </blockquote>
            <p className="text-base leading-8 my-5">{content}</p>
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
