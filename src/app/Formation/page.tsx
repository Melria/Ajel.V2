"use client";

import { Header } from "@/sections/Header";
import emailjs from '@emailjs/browser';
import { CheckIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
// Images from the public/assets/formation directory
const courses = [
  {
    image: "/formation/image-1.jpg", // Update these paths to match your image names
  },
  {
    image: "/formation/image-2.jpg",
  },
  {
    image: "/formation/image-3.jpg",
  },
  {
    image: "/formation/image-4.jpg", // Update these paths to match your image names
  },
  {
    image: "/formation/image-5.jpg",
  },
  {
    image: "/formation/image-6.jpg",
  },
  {
    image: "/formation/image-7.jpg",
  },
  {
    image: "/formation/image-8.jpg",
  },
];
interface ICourse {
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  training: number
}
const Page = () => {
  const formRef = useRef();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [form, setForm] = useState<ICourse>()
  const handleSelect = (index: number) => {
    // if (selectedCourse === null) {
    // }
    //@ts-ignore
    setForm({ ...form, training: index + 1 })
    const inputElement = document.getElementById('training');


    if (inputElement) {
      //@ts-ignore
      inputElement.value = index + 1;
    }
    setSelectedCourse(index); // Set only if no course is selected
  };

  function changeElement(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    //@ts-ignore
    setForm({ ...form, [name]: value })

  }

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form data ", form);
    emailjs
      .sendForm('service_6mkydgf', 'template_ka2ys6q', formRef.current, {
        publicKey: 'LYpgvx9dWWHdgsq-r',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Votre message à été envoyé avec succès !!!")
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }
  return (
    <>
      <Header />
      <h2 className="text-center font-bold text-lg mt-5">
        Enregistrement pour la formation
      </h2>
      <div className="container mx-auto">
        <p className="text-center mt-5">
          Merci de prendre un moment pour remplir le formulaire
          d&prime;inscription à notre formation. Votre participation est
          essentielle pour nous permettre de mieux organiser et adapter le
          contenu à vos besoins.
        </p>
        <div className="p-6 space-y-6">
          <form ref={formRef} onSubmit={submitForm}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="firstname"
                  onChange={changeElement}
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Apple Imac 27”"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  name="lastname"
                  onChange={changeElement}
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={changeElement}
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={changeElement}
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
            </div>
            <input
              type="number"
              name="training"
              onChange={changeElement}
              id="training"

            />
            <div className="mt-20">
              <h2 className="text-xl font-semibold">
                Sélectionnez une formation :
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer relative"
                    onClick={() => handleSelect(index)}
                  >
                    {/* Image */}
                    <img
                      src={course.image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>

                    {/* Button or Check Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {selectedCourse === index ? (
                        <div className="bg-white p-2 rounded-lg">
                          <CheckIcon className="h-6 w-6 text-green-500" />
                        </div> // Display check icon if selected
                      ) : (
                        <button
                          className={`bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors `}
                        // disabled={selectedCourse !== null} // Disable further selection after first choice
                        >
                          choisir cette formation
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-950 transition-colors `}
            // disabled={selectedCourse !== null} // Disable further selection after first choice
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
