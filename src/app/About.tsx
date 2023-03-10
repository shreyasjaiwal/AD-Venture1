import React from "react";
import Home from "./assets/team.png";
import Image from "next/image";
import Link from 'next/link';
const About = () => {
  return (
    <div className="w-full bg-center bg-cover custom-img2 py-16 px-4 section" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image className="w-[400px] h-[400px] mx-auto my-6" src={Home} alt="CricketPlayer..." />
        
        <div className="flex flex-col justify-center">
          <p className="text-[#ffffff] text-xl font-bold">ABOUT AD-VENTURE</p>
          <h1 className="md:text-2xl sm:2xl text-2xl font-bold py-4">Ad-venture is a competition for designing advertisements that tests a one &apos s ability to combine
creativity with marketing strategy and produce an advertisement that will entice consumers to
purchase your company &apos s products.</h1>
          <p className="">
          </p>
          
          <Link href='./Int.pdf' download><button className="text-[#ffffff] w-[200px] rounded-md font-medium my-8 mx-auto md:mx-0 py-3 bg-[#000300] hover:scale-105 hover:text-white duration-200">Instructions-Guide</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
