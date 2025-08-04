'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "../Assets/HeroPage.png";
import heroIcon1 from "../Assets/HeroIcon1.png";
import heroIcon2 from "../Assets/HeroIcon2.png";
import heroIcon3 from "../Assets/HeroIcon3.png";
import heroIcon4 from "../Assets/HeroIcon4.png";
import { motion } from "framer-motion";
const Hero = () => {
  const heroStatsData = [
    { num: "200+", text: "Happy Customers" },
    { num: "10K+", text: "Properties For Clients" },
    { num: "16+", text: "Years of Experience" },
  ];

  const cardData = [
    { icon: heroIcon1, text: "Find Your Dream Home" },
    { icon: heroIcon2, text: "Unlock Your Property Value" },
    { icon: heroIcon3, text: "Effortless Property Management" },
    { icon: heroIcon4, text: "Smart Investements, Informed Decisions" },
  ];
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col-reverse lg:items-start items-center">
        <motion.div
          initial={{ x: -100, opacity: 0.4 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8 mt-5"
        >
          <h2 className="md:text-4xl text-3xl lg:text-5xl lg:w-[70%] leading-relaxed">
            Discover Your Dream Propery with Estatein.
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <span className="flex items-center gap-10">
            <Button className="bg-black/20">Learn more</Button>
            <Button className="bg-black">Browse Properties</Button>
          </span>

          <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center gap-3 py-6">
            {heroStatsData.map((data, idx) => (
              <div
                className="shadow shadow-white/20 border-x border-gray-500 rounded-xl lg:px-3 sm:px-2 px-5 py-6 lg:text-start md:text-start text-center w-[80%] flex-grow cursor-pointer hover:scale-105 transition-all hover:shadow-xl bg-primary/10"
                key={idx}
              >
                <h2 className="text-2xl font-bold">{data.num}</h2>
                <p className="text-gray-500 lg:text-md md:text-xs text-sm">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <Image
            className="lg:rounded-none md:rounde-none rounded-lg"
            src={heroImage}
            alt=""
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 justify-between py-3">
        {cardData.map((data, id) => (
          <div
            className="flex flex-col items-center lg:px-12 px-4 shadow-lg rounded-lg bg-black/70 hover:bg-black text-white py-3 justify-center gap-3"
            key={id}
          >
            <Image src={data.icon} alt="" />
            <p className="text-center lg:text-md text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
