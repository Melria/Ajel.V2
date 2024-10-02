import React from "react";

const Contact = () => {
  return (
    <div className="relative isolate bg-white" id="form">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full strokeGray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="white"
                ></rect>
                <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                ></rect>
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contactez-nous
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              corrupti tempore commodi explicabo earum incidunt!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:contact@yourcompany.com"
                  >
                    contact@yourcompany.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Addresse</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                </dt>
                <dd>Douala, Cameroun</dd>
              </div>
            </dl>
          </div>
        </div>
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-slate-600 focus:outline-none sm:text-sm sm:leading-6 transition-all"
                    name="firstName"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-slate-600 focus:outline-none sm:text-sm sm:leading-6 transition-all"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="first-name"
                    className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-slate-600 focus:outline-none sm:text-sm sm:leading-6 transition-all"
                    name="email"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-slate-600 focus:outline-none sm:text-sm sm:leading-6"
                    name="message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="btn btn-primary md:text-sm lg:text-md">
                Soumettre
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
