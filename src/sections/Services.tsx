import React from "react";
import Service from "@/components/Service";

// Example data for the services
const ConnectIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        d="M10,21 C7.50000053,23.5 5.00000002,23 3,21 C0.999999977,19 0.500000114,16.5 3.00000004,14 C5.49999997,11.5 5.99999998,11 5.99999998,11 L13.0000005,18 C13.0000005,18 12.4999995,18.5 10,21 Z M14.0003207,3 C16.5,0.499999776 19,0.999999776 21.001068,3 C23.002136,5.00000022 23.5,7.49999978 21.001068,10 C18.5021359,12.5000002 18.0007478,13 18.0007478,13 L11,6 C11,6 11.5006414,5.50000022 14.0003207,3 Z M11,9.9999 L8.5,12.4999999 L11,9.9999 Z M14,13 L11.5,15.5 L14,13 Z"
      ></path>{" "}
    </g>
  </svg>
);

const EducateIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M8.316 2.07a.75.75 0 00-.632 0l-7 3.25a.75.75 0 000 1.36l1.434.666A.746.746 0 002 7.75V11a.75.75 0 00.158.46L2.75 11l-.592.46.001.002.001.001.003.004.008.01a1.882 1.882 0 00.103.12c.068.076.165.178.292.299.254.24.63.555 1.132.866C4.706 13.388 6.217 14 8.25 14c2.037 0 3.44-.615 4.345-1.266a5.32 5.32 0 00.977-.902 3.916 3.916 0 00.322-.448l.007-.012.003-.004v-.002h.001c0-.001 0-.002-.655-.366l.655.365A.754.754 0 0014 11V7.75a.747.747 0 00-.118-.404l1.434-.666a.75.75 0 000-1.36l-7-3.25zM12.5 7.988L8.316 9.93a.75.75 0 01-.632 0L3.5 7.988v2.723a5.585 5.585 0 00.99.776c.804.5 2.043 1.013 3.76 1.013 1.713 0 2.81-.51 3.468-.984a3.812 3.812 0 00.782-.745V7.988zM8 8.423L2.781 6 8 3.577 13.219 6 8 8.423z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);

const cogIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke="#FFFFFF"
        strokeWidth="2"
      ></path>{" "}
    </g>
  </svg>
);

const RenewIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M12 20C9.47362 20 7.22075 18.8289 5.75463 17M12 4C14.9611 4 17.5465 5.60879 18.9297 8M4 12C4 9.47362 5.17107 7.22075 7 5.75463M20 12C20 14.8339 18.5265 17.3236 16.3039 18.7448M19.3 5V8H16.3M8 16.3H5V19.3M16.3 16V19H19.3M4.7002 5H7.7002V8"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const serviceData = [
  {
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam.",
    link: "#",
    svgIcon: ConnectIcon,
  },
  {
    title: "Learn Next.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam.",
    link: "#",
    svgIcon: EducateIcon,
  },
  {
    title: "Learn Express",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam..",
    link: "#",
    svgIcon: cogIcon,
  },
  {
    title: "Learn TypeScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam..",
    link: "#",
    svgIcon: RenewIcon,
  },
  {
    title: "Learn Express",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam..",
    link: "#",
    svgIcon: cogIcon,
  },
  {
    title: "Learn TypeScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime odit suscipit mollitia quos id, corporis debitis tempore deleniti aliquam..",
    link: "#",
    svgIcon: RenewIcon,
  },
];

const Services = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      id="services"
    >
      <div className="container mx-auto">
        <h2 className="font-extrabold text-2xl text-center md:text-[46px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
          Nos services
        </h2>
        <p className="my-10 text-center text-[22px] leading-[30px] text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          impedit repellendus assumenda
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              svgIcon={service.svgIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
