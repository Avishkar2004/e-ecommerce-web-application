import React from 'react';
import newHome from "../assets/photos/newHome.png";
import playstore from "../assets/photos/googleplay.png";
import applestore from "../assets/photos/appstore.svg";

const FindANewHome = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Mockup Image */}
        <div className="flex justify-center md:justify-start md:mr-8 mb-8 md:mb-0">
          <img
            src={newHome}
            alt="Mobile Mockup 1"
            className="w-64 md:w-72 mx-auto md:mx-0"
          />
        </div>
        {/* Text and Buttons */}
        <div className="text-center md:text-left md:ml-8">
          <h2 className="text-4xl font-bold text-[#f73a50]">
            Find A New Home On The Go
          </h2>
          <p className="mt-4 text-gray-700">Download our app</p>
          <p className="mb-6 text-gray-500">Where convenience is at your fingertip</p>
          <div className="flex justify-center md:justify-start">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img
                src={playstore}
                alt="Google Play Store"
                className="w-32 h-auto mr-4"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src={applestore}
                alt="App Store"
                className="w-32 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindANewHome;
