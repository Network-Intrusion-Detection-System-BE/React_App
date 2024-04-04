import React from "react";
import { Link } from "react-router-dom";
("use-client");

function HomePage() {
  return (
    <div className="my-auto mx-auto px-4 py-40 text-white">
      <div className="flex flex-col md:flex-row justify-between space-x-7">
        <div className="w-full md:w-1/2">
          <img
            src="hero-image.jpg"
            alt="Hero Image"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 pt-8 md:pt-0">
          <h1 className="text-4xl font-bold text-center md:text-left mb-8">
            Advanced Network Security with ML-powered NIDS
          </h1>
          <p className="text-xl text-center md:text-left mb-12">
            Empower Your Network's Defense: Harnessing Machine Learning for
            Unparalleled Security
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/landpage">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
