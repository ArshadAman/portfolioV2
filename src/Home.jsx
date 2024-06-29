import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";

const Home = () => {
  const [pageX, setX] = useState(0);
  const [pageY, setY] = useState(0);

  useEffect(() => {
    function updateMousePosition(event) {
      const positionx = event.pageX;
      const positiony = event.pageY;
      setX(positionx);
      setY(positiony);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const gradientX = pageX; 
  const gradientY = pageY;
  return (
    <div
      className="flex justify-center px-96 bg-[#0f172a] text-[#5b677b] transition duration-300"
      style={{
        backgroundImage: `radial-gradient( 600px at ${gradientX}px ${gradientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div className="intro">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Arshad
          </h1>
          <h4 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Devloper
          </h4>
          <p className="mt-4 max-w-xs leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            quam temporibus doloremque ad quo corrupti
          </p>

          <ul className="space-y-5 my-20 flex flex-col">
            <a
              href="#about"
              className="flex items-center uppercase text-sm group cursor-pointer active:text-slate-200"
            >
              <div className="w-8 h-[1px] bg-slate-200 mr-4 transition-all group-hover:w-16"></div>{" "}
              About
            </a>
            <a
              href="#experience"
              className="flex items-center uppercase text-sm group cursor-pointer"
            >
              <div className="w-8 h-[1px] bg-slate-200 mr-4 transition-all group-hover:w-16"></div>{" "}
              Experience
            </a>
            <a
              href="#projects"
              className="flex items-center uppercase text-sm group cursor-pointer"
            >
              <div className="w-8 h-[1px] bg-slate-200 mr-4 transition-all group-hover:w-16"></div>{" "}
              Projects
            </a>
          </ul>
        </div>

        <div className="social space-x-5">
          <i className="fab fa-facebook hover:text-slate-200 text-2xl cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-slate-200 text-2xl cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-slate-200 text-2xl cursor-pointer"></i>
          <i className="fab fa-linkedin hover:text-slate-200 text-2xl cursor-pointer"></i>
        </div>
      </div>
      <div className="right lg:top-0 lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div className="about mb-32 space-y-4" id="about">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem libero adipisci itaque voluptatum commodi, accusamus
            iure quo similique harum ut, omnis obcaecati voluptatibus velit
            fugit error doloremque aut ipsam natus animi distinctio incidunt
            excepturi. Quis eum officiis magnam aspernatur dolorum. Qui
            laudantium repellendus alias excepturi eveniet debitis maxime,
            saepe, sed molestias animi eligendi quos, ex illo quibusdam dolorum
            blanditiis tenetur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
            reiciendis molestias eum ea odit itaque ad eius soluta vero
            accusantium alias harum enim perferendis fugiat rem tempore,
            excepturi earum dicta. Ex reprehenderit, delectus perspiciatis
            aspernatur consectetur illum voluptas dolore voluptates.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            sapiente sint, culpa incidunt aspernatur voluptas excepturi cum
            magni veritatis officia fugiat laudantium dolor non, necessitatibus
            similique consequuntur fuga error minima.
          </p>
        </div>
        <div className="experience flex flex-col" id="experience">
          <Card />
          <Card />
          <Card />
          <a href="#" className="mb-8 mt-10 text-slate-200">
            View Full Resume
          </a>
        </div>
        <div className="projects" id="projects">
          <Card></Card>
          <Card></Card>
          <Card></Card>

          <a href="#">View Project Archieve</a>
        </div>
        <div className="blog">
          <Card></Card>
          <Card></Card>
        </div>

        <div className="footer-text">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
          text is set in the Inter typeface.
        </div>
      </div>
    </div>
  );
};

export default Home;
