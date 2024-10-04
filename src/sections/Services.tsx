import React from "react";
import Service from "@/components/Service";



const serviceData = [
  {
    image: require('../assets/Service1.jpg'),
  },
  {
    image: require('../assets/Service2.jpg'),
  },
  {
    image: require('../assets/Service3.jpg'),
  },
  {
    image: require('../assets/Service4.jpg'),
  },
  {
    image: require('../assets/Service5.jpg'),
  },
  {
    image: require('../assets/Service6.jpg'),
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
        Nos Dirigeants
        </h2>
        <p className="my-10 text-center text-[22px] leading-[30px] text-slate-800">
        Nos dirigeants sont des visionnaires engagés, dédiés à promouvoir l'entrepreneuriat et l'éducation au Cameroun.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
