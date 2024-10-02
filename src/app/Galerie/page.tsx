import { Header } from "@/sections/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="p-20">
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-200 rounded-xl">
            <h2 className="text-4xl font-bold">The First slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-700 text-white rounded-xl">
            <h2 className="text-4xl font-bold">The Second slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-teal-700 text-white rounded-xl">
            <h2 className="text-4xl font-bold">The Third slide</h2>
            <p className="mt-2">Scroll Down</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-blue-300 rounded-xl">
            <h2 className="text-4xl font-bold">The Fourth slide</h2>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-600 text-white rounded-xl">
            <h2 className="text-4xl font-bold">The Fifth slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-slate-700 text-white rounded-xl">
            <h2 className="text-4xl font-bold">The Sixth slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-700 text-white rounded-xl">
            <h2 className="text-4xl font-bold">The Seventh slide</h2>
            <p className="mt-2">Scroll Down</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-pink-300 rounded-xl">
            <h2 className="text-4xl font-bold">The Eightth slide</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
