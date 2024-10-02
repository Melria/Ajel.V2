"use client";

import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-20">
        Dashboard de l&apos;admin
      </h1>
      <div className="w-full mt-10 container mx-auto">
        <div className="bg-blue-100 p-2 rounded-t-lg">
          <div className="flex justify-center space-x-4">
            <button
              className={`px-4 py-2 font-semibold hover:border-b-2 border-slate-700 hover:bg-slate-100 focus:outline-none transition ease-in duration-200 ${
                activeTab === "tab1" ? "active border-b-2 border-slate-700" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              <span className="sm:text-xs md:text-md lg:text-lg">
                Creer un nouvel article
              </span>
            </button>
            <button
              className={`px-4 py-2 font-semibold hover:border-b-2 border-slate-700 hover:bg-slate-100 focus:outline-none transition ease-in duration-200 ${
                activeTab === "tab2"
                  ? "active active border-b-2 border-slate-700"
                  : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              <span className="sm:text-xs md:text-md lg:text-lg">
                Poster une photo dans la Galerie
              </span>
            </button>
            {/* <button
            className={`px-4 py-2 font-semibold hover:border-b-2 border-slate-700 hover:bg-slate-100 focus:outline-none transition ease-in duration-200 ${
              activeTab === "tab3" ? "active" : ""
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            Tab 3
          </button> */}
          </div>
        </div>

        <div
          className={`p-4 tab-content bg-white shadow-md rounded-lg ${
            activeTab === "tab1" ? "" : "hidden"
          }`}
        >
          <h2 className=" text-center mt-5 text-xl font-semibold text-slate-700">
            formulaire pour un blog
          </h2>
          <div>
            <div className="max-w-xl mx-auto mt-6 flex w-full flex-col border rounded-lg bg-white p-8">
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">Titre</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">tags</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">Image</label>
                <div className="flex-1 items-center mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <div className="items-center justify-center max-w-xl mx-auto">
                      <label
                        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                        id="drop"
                      >
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <span className="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span className="text-blue-600 ml-[4px]">
                              browse
                            </span>
                          </span>
                        </span>
                        <input
                          type="file"
                          name="file_upload"
                          className="hidden"
                          accept="image/png,image/jpeg"
                          id="input"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  Contenu
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-52 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <button className="rounded border-0 bg-slate-800 py-2 px-6 text-lg text-white hover:bg-slate-900 focus:outline-none">
                Publier
              </button>
            </div>
          </div>
        </div>
        <div
          className={`p-4 tab-content bg-white shadow-md rounded-lg ${
            activeTab === "tab2" ? "" : "hidden"
          }`}
        >
          <h2 className=" text-center mt-5 text-xl font-semibold text-slate-700">
            Poster une photo
          </h2>
          <div>
            <div className="max-w-xl mx-auto mt-6 flex w-full flex-col border rounded-lg bg-white p-8">
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  Concernant la photo
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="text-sm leading-7 text-gray-600">Image</label>
                <div className="flex-1 items-center mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <div className="items-center justify-center max-w-xl mx-auto">
                      <label
                        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                        id="drop"
                      >
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <span className="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span className="text-blue-600 ml-[4px]">
                              browse
                            </span>
                          </span>
                        </span>
                        <input
                          type="file"
                          name="file_upload"
                          className="hidden"
                          accept="image/png,image/jpeg"
                          id="input"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="rounded border-0 bg-slate-800 py-2 px-6 text-lg text-white hover:bg-slate-900 focus:outline-none">
                Publier
              </button>
            </div>
          </div>
        </div>
        {/* <div
        className={`p-4 tab-content bg-white shadow-md rounded-lg ${
          activeTab === "tab3" ? "" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">
          Tab 3 Content
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </p>
      </div> */}
      </div>
    </>
  );
};

export default Dashboard;
