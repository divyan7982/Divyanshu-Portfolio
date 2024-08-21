import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <a
            href="./Resume.pdf"
            download="Divyanshu_Choubey_Resume.pdf"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Download Resume
          </a>
        </div>
        <p>
          Hello, I'm Divyanshu, a passionate Web developer with a keen eye for
          MERN Stack. With a background in IT, I strive to create impactful and
          visually stunning Websites.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          B.Tech, Electronics and Communication Engineering, Maharaja Agrasen
          Institute Of Technology, 2021 - 2025
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          <li>Proficient in C++, Python, HTML, CSS, and JavaScript</li>
          <li>Experienced with MongoDB, NodeJS, ReactJS, and ExpressJS</li>
          <li>
            Strong grasp of Data Structures and Algorithms, Object-Oriented
            Programming, Artificial Intelligence, Database Management System,
            and Computer Networks
          </li>
          <li>
            Excellent problem-solving skills Effective communicator and
            collaborator
          </li>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <b>
            <h>Web Developer Intern</h>
          </b>
          <h2>Codsoft, OCT 2023</h2>
          <p>
            During my internship at CodSoft, I developed a responsive portfolio
            website, a landing page for an electronics shop, and a functional
            calculator application using HTML, CSS, and JavaScript. These
            projects showcased my ability to create engaging UI, implement
            interactive elements, and ensure a smooth user experience.
          </p>
        </span>
        <span>
          <br />
          <b>
            <h>Software Developer Intern</h>
          </b>
          <h2>Blustock Fintech, JULY 2024 - AUG 2024</h2>
          <p>
            During my internship at Bluestock Fintech, I collaborated with a
            team of five to develop three impactful projects that demonstrated
            our collective expertise in full-stack development and data
            management. Together, we built a Crypto Dashboard using ReactJS,
            integrating real-time cryptocurrency data through the CoinGecko API
            and visualizing trends with Chart.js. We also developed a MERN
            Finance Tracker that enables users to securely track and categorize
            their expenses, offering detailed financial insights. Additionally,
            we created a Web Scraping Project that automates the extraction,
            cleaning, and processing of data from various websites, showcasing
            our ability to manage and utilize data effectively
          </p>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <li>Selected as an Open Source Contributor In SWOC 2023</li>
          <li>Made Quality Contributions in Hacktoberfest 2022, 2023</li>
        </span>
      </div>
    </div>
  );
}

export default About;
