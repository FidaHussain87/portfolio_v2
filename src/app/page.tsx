import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero_image.png"
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
      {/* Content Container */}
      <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2  gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Full Stack Developer</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          I am a Full Stack Developer with 4 years of experience in the field. I
          have worked with multiple clients and have delivered quality work in
          time.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4 w-full">
          <Button>View My Work</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
