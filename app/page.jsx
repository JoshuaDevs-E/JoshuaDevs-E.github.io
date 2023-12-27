// @react-server
'use client';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import './btn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const projects = [
    {
      img: 'https://i.postimg.cc/FKwd4kGj/Chat.png',
      title: 'Chat App With React + Vite',
      description: 'La aplicación de chat con React + Vite demuestra mis habilidades como programador.',
      link: 'https://joshuapena.me/chat/',
    },
    {
      img: 'https://i.postimg.cc/Jh03yq5J/state-menjo.png',
      title: 'React State Management',
      description: 'En este proyecto se verá el manejo de estado de React.',
      link: 'https://joshuapena.me/react-state/',
    },
    {
      img: 'https://i.postimg.cc/cJzRfnFz/profile.png',
      title: 'Social Media Portal',
      description: 'Es una página donde se encuentran las redes sociales que más frecuento.',
      link: 'https://joshuapena.me/profile/',
    },
    {
      img: 'https://i.postimg.cc/pXHrPgXF/header.png',
      title: 'P.I.C.H.E.H.S.',
      description: 'Página informativa de orientación para estudiantes de 6to grado del C.E.M.A.S.',
      link: 'https://github.com/JoshuaDevs-E/PICLEHS.git',
    },
    {
      img: 'https://i.postimg.cc/Znt6MhtF/Solutions-And-Business-Services-html-css.png',
      title: 'Solutions And Business Services',
      description: 'Esta es una plantilla de una página para crear soluciones comerciales.',
      link: 'https://joshuapena.me/Solutions-And-Business-Services-html-css/',
    },
    {
      img: 'https://i.postimg.cc/13GwYzyW/Captura-de-pantalla-2023-12-16-165400.png',
      title: 'X-Color',
      description: 'Editor de color para HTML y CSS con React.',
      link: 'https://github.com/JoshuaDevs-E/palette-color-generator.git',
    },
    {
      img: 'https://i.postimg.cc/Bvmr6t7R/Captura-de-pantalla-2023-12-19-223752.png',
      title: 'Generador de Tweets Con TypeScript',
      description: 'Generador de Tweets con TypeScript.',
      link: 'https://github.com/JoshuaDevs-E/Tweets-Generator-with-TypeScript-and--TailwindCss.git',
    },
  ];

  return (
    <div className="min-h-screen relative html">
      <button className="fixed top-0 right-0 m-4 bg-white text-black px-4 py-2 rounded" onClick={toggleMenu} style={{ zIndex: 1000 }}>
        <img width={40} src="https://i.postimg.cc/vTgfvF33/barra-de-menus.png" alt="Menu" />
      </button>
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white bg-opacity-90 transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ zIndex: 1000 }}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 text-black text-2xl">
          <li style={{ color: '#000', margin: '40px' }}>
            <Link href="#home" onClick={handleMenuClick}>
              Inicio
            </Link>
          </li>
          <li style={{ color: '#000', margin: '40px' }}>
            <Link href="#projects" onClick={handleMenuClick}>
              Proyectos
            </Link>
          </li>
          <li style={{ color: '#000', margin: '40px' }}>
            <Link href="#skills" onClick={handleMenuClick}>
              Habilidades
            </Link>
          </li>
          <li style={{ color: '#000', margin: '40px' }}>
            <Link href="#contact" onClick={handleMenuClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      {/* Sección de Inicio */}
      <div
        id="home"
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/CL63zX1v/pexels-jakub-novacek-924824.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="text-black text-center">
            <img src="https://i.postimg.cc/4d7pdm33/tu-foto.jpg" alt="Profile" className="rounded-full mx-auto mt-2 w-40 h-40" />
            <h1 className="text-4xl font-bold mb-6">Joshua Emil P. R.</h1>
            <center>
              <p className="text-1xl w-1/2">
                ¡Hola! Soy Joshua, un desarrollador web junior. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como React, Next.js y Tailwind CSS.
              </p>
            </center>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Sección de Proyectos */}
      <div
        id="projects"
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/gjGfmVN8/pexels-fauxels-3183186.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="text-black text-center">
            <h2 className="text-4xl font-bold mb-6">Proyectos Destacados</h2>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="w-full p-6 shadow-md cont-2">
        {projects.map((project, index) => (
          <div key={index} className="flex bg-white m-4 rounded-md mb-4 text-center justify-center">
            <img src={project.img} alt={project.title} className="rounded-t-md m-6 img" width={'600px'} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                En Vivo
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full p-6 shadow-md cont">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-t-md" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                En Vivo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Habilidades */}
      <div
        id="skills"
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/xCR85PZ4/pexels-mati-mango-5952651.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="text-black text-center">
            <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="habilities h-screen inset-0 bg-white bg-opacity-80 flex items-center justify-center">
        <div className="skills-buttons">
          <button className="html-button">
            <i className="fab fa-html5"></i> HTML
          </button>
          <button className="css-button">
            <i className="fab fa-css3"></i> CSS
          </button>
          <button className="js-button">
            <i className="fab fa-js"></i> JavaScript
          </button>
          <button className="python-button">
            <i className="fab fa-python"></i> Python
          </button>
          <button className="flask-button">
            <i className="fas fa-pepper-hot"></i> Flask
          </button>
          <button className="mysql-button">
            <i className="fas fa-database"></i> MySQL
          </button>
          <button className="react-button">
            <i className="fab fa-react"></i> React
          </button>
          <button className="react-vite-button">
            <i className="fas fa-bolt"></i> React + Vite
          </button>
          <button className="git-button">
            <i className="fab fa-git-alt"></i> Git
          </button>
          <button className="figma-button">
            <i className="fab fa-figma"></i> Figma
          </button>
          <button className="bootstrap-button">
            <i className="fab fa-bootstrap"></i> Bootstrap
          </button>
          <button className="nodejs-button">
            <i className="fab fa-node-js"></i> Node.js
          </button>
          <button className="mongodb-button">
            <i className="fab fa-creative-commons-sa"></i> MongoDB
          </button>
          <button className="sqlite-button">
            <i className="fas fa-database"></i> SQLite
          </button>
          <button className="c-button">C</button>
          <button className="nextjs-button">
            <i className="fas fa-arrow-right"></i>Next.js
          </button>
          <button className="typescript-button">
            <i className="fab fa-js"></i>TypeScript
          </button>
        </div>
      </div>

      {/* Sección de Contacto */}
      <div
        id="contact"
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/XJM1Lf5d/pexels-chept-cormani-1416530.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="text-black text-center">
            <div className="text-4xl font-bold mb-6">
              {[
                { icon: faGithub, color: '#000', label: 'GitHub', link: 'https://github.com/JoshuaDevs-E' },
                { icon: faInstagram, color: '#C13584', label: 'Instagram', link: 'https://www.instagram.com/joshua.epr/' },
              ].map((i, index) => (
                <a
                  href={i.link}
                  key={index}
                  target='__blank'
                  className="flex items-center space-x-2 m-8"
                  style={{ backgroundColor: `${i.color}`, padding: '10px', borderRadius: '10px' }}
                >
                  <FontAwesomeIcon icon={i.icon} size="2x" color={'#fff'} />
                  <span className='text-white'>{i.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
