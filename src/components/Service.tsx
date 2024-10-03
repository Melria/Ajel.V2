import React from "react";
import Image from "next/image"; // Import Image from next/image

// Define the props interface for the Service component
interface ServiceProps {
  image: string;
}

const Service: React.FC<ServiceProps> = ({
 image
}) => {
  return (
    <div className="group relative cursor-pointer bg-transparent  shadow-xl ring ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <Image src={image} alt="service" className="w-full h-full object-cover" /> 
    </div>
  );
};

export default Service;
