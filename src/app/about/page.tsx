"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import AnimatedBrain from "@/components/AnimatedBrain";
const AboutPage = () => {
  const containerRef: any = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef: any = useRef();
  const isSkillRefInView: any = useInView(skillRef, { margin: "-100px" });
  const experienceRef: any = useRef();
  const isExperienceRefInView: any = useInView(experienceRef, {
    margin: "-100px",
  });
  const skills = [
    "After Effects",
    "Premiere Pro",
    "TailwindCSS",
    "Illustrator",
    "TypeScript",
    "JavaScript",
    "Kubernetes",
    "Photoshop",
    "Bootstrap",
    "Firebase",
    "AdobeXD",
    "Next.js",
    "MongoDB",
    "Node.js",
    "Express",
    "Python",
    "Docker",
    "GitHub",
    "GitLab",
    "React",
    "Figma",
    "HTML5",
    "CSS3",
    "Java",
    "Jira",
    "Git",
    "UI5",
    "SASS",
    "AWS",
    "GCP",
  ];
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className=" flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48  lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui
              atque eum adipisci pariatur animi ratione, incidunt, quae cum quam
              voluptatum quis soluta dignissimos temporibus cumque molestias
              nemo necessitatibus tempore?
            </p>
            {/* BIOGRAPHY Quote */}
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
              <Image src="/sign.png" alt="signature" width={100} height={100} />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-2 text-sm rounded cursor-pointer text-white bg-[#0F172A] hover:text-[#0F172A] hover:bg-[#e9e7e7]"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* Experience TITLE */}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              {/* EXP 1 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">
                    {" "}
                    Full Stack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    qui atque eum adipisci pariatur animi ratione, incidunt,
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    12 March 2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SBTi
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXP 2 */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">
                    {" "}
                    Full Stack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    qui atque eum adipisci pariatur animi ratione, incidunt,
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    28 June 2023 - 29 Feb 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SAP
                  </div>
                </div>
              </div>

              {/* EXP 3 */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">
                    {" "}
                    Full Stack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    qui atque eum adipisci pariatur animi ratione, incidunt,
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    23 Aug 2021 - 24 Feb 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Systems Limited
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <AnimatedBrain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
