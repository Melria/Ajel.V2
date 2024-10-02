import React from "react";
import ajelIcon from "@/assets/ajel icon.png";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <a href="https://amethgalarcio.web.app/" target="_blank">
                <Image
                  src={ajelIcon}
                  alt="ajel icon"
                  width={100}
                  height={100}
                />
              </a>
              <p className="m-0 text-[16px] font-semibold dark:text-white">
                Connectez-vous
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Postez les différentes nouvelles et actualités
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400 ">
              Mot de passe
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              placeholder="••••••••"
            />
          </div>
          <div className="mt-5">
            <Link href={"/Admin/Dashboard"}>
              <button className="py-1 px-8 bg-slate-700 hover:bg-slate-800 focus:ring-offset-slate-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
