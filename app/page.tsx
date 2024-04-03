"use client";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const words = [
  {
    text: "I am a Students",
    className: "text-white",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex xl:justify-between relative overflow-hidden w-full">
        <Hero />
        {/* Text Container */}
        <div className="absolute top-0 md:top-12 xl:px-32 ml-5 md:w-1/2 text-white ">
          <h1 className="text-6xl">
            Hi There 👋, <br />
            <span className="underline underline-offset-2 decoration-utama">
              Virgi&apos;s Here!
            </span>
          </h1>
          <h2 className="text-2xl mt-4">
            I am a
            <Typewriter
              options={{
                strings: ["Students", "Frontend Developer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="my-6">
            I am a student with a strong interest in web development,
            particularly frontend development. I have experience in HTML, CSS,
            JavaScript, and React. I am also familiar with other web development
            technologies such as Git, Webpack, and npm.
          </p>
          <div className="glow absolute -z-10 -left-20 top-12 md:hidden"></div>
          <a href="mailto:virgiawan.muhamad@gmail.com">
            <Button>Contact Me</Button>
          </a>
        </div>
        {/* {Image Container } */}
        <div className="md:mt-3 md:w-1/2 md:px-32 hidden lg:block">
          <Image
            src="/Me2.png"
            alt="Me"
            width={500}
            height={500}
            className="rounded-full w-100%"
          />
          <div className="glow absolute -z-10 top-12"></div>
        </div>
      </main>
    </>
  );
}
