import React from 'react';
import profilePic from './assets/Profile pic AUG2024.jpg';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-indigo-800 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full transform transition duration-500 hover:shadow-indigo-400">
        <div className="mt-6 mb-4">
          <img src={profilePic} alt="Perfil de Damián" className="w-24 h-24 mx-auto rounded-full border-2 border-indigo-800" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center">Damián Medina</h1>
        <p className="text-lg text-gray-600 mt-1 text-center">Desarrollador Web & Especialista en Integración de Redes Sociales</p>

        <div className="mt-4">
          <h2 className="text-md font-semibold text-gray-700">Servicios Ofrecidos:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Diseño y Desarrollo Web</li>
            <li>Integración de Redes Sociales</li>
            <li>Optimización para Móviles</li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-semibold text-gray-700">Contacto:</h2>
          <p className="text-gray-600 flex items-center"><FaPhoneAlt className="mr-2 text-indigo-600" /> <span className="text-sm">Teléfono: <span className='font-bold'>+54-2932-459038</span></span></p>
          <p className="text-gray-600 flex items-center"><FaEnvelope className="mr-2 text-indigo-600" /> <span className="text-sm">Correo: <span className="break-words font-bold">marcosdamian054@gmail.com</span></span></p>
          <p className="text-gray-600 flex items-center">
            <FaGlobe className="mr-2 text-indigo-600" />
            <span className="text-sm">Sitio Web: <a href="https://damidevportafolio.vercel.app/" className="text-blue-500 hover:underline">{`https://damidevportafolio.vercel.app/`}</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
