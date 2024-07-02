import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import javascript from "../../public/javascript.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "EazyMart",
      description: "EazyMart is an eCommerce website built using ReactJS.",
      videoLink: "https://www.youtube.com/mongodb-video",
      sourceLink: "https://github.com/divyan7982/EazyMart",
    },
    {
      id: 2,
      logo: reactjs,
      name: "DC-SOCIAL",
      description: "DC-SOCIAL is a social media website focusing on frontend development.",
      videoLink: "https://www.youtube.com/express-video",
      sourceLink: "https://github.com/divyan7982/DCSocial",
    },
    {
      id: 3,
      logo: reactjs,
      name: "AeroCast",
      description: "AeroCast is a weather application developed with ReactJS.",
      videoLink: "https://www.youtube.com/reactjs-video",
      sourceLink: "https://github.com/divyan7982/weather-App",
    },
    {
      id: 4,
      logo: nodejs,
      name: "ChitChat",
      description: "ChitChat is a chat application using NodeJS for the backend.",
      videoLink: "https://www.youtube.com/nodejs-video",
      sourceLink: "https://github.com/divyan7982/ChitChat",
    },
    {
      id: 5,
      logo: reactjs,
      name: "EchoBeat",
      description: "EchoBeat is a music player built with ReactJS.",
      videoLink: "https://www.youtube.com/python-video",
      sourceLink: "https://github.com/divyan7982/EchoBeat",
    },
    {
      id: 6,
      logo: reactjs,
      name: "Expense Tracker",
      description: "Expense Tracker is a financial tracking application using ReactJS.",
      videoLink: "https://www.youtube.com/java-video",
      sourceLink: "https://github.com/divyan7982/Expense-Tracker",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, videoLink, sourceLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Video
                </a>
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
