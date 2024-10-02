import React from "react";

// Define the props interface for the Service component
interface ServiceProps {
  title: string;
  description: string;
  link: string;
  svgIcon: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  link,
  svgIcon,
}) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-600 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-orange-600 transition-all duration-300 group-hover:bg-orange-400">
          {/* SVG Icon */}
          {svgIcon}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
