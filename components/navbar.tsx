import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const icons = [
  {
    name: "Github",
    icon: <FaGithub className="text-white text-3xl"></FaGithub>,
    link: "https://github.com/mvirgiawancr",
  },
  {
    name: "X",
    icon: <FaXTwitter className="text-white text-3xl"></FaXTwitter>,
    link: "https://x.com/mvirgiawancr",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-white text-3xl"></FaInstagram>,
    link: "https://instagram.com/mvirgiawancr",
  },
];

const navbar = () => {
  return (
    <nav className={roboto.className}>
      <div className="flex min-h-24 justify-between items-center px-8 mb-9">
        <h1 className="text-3xl font-bold underline underline-offset-2 decoration-utama text-white decoration-4">
          Moch Virgiawan
        </h1>
        <div className="flex gap-8 p-3 items-center justify-center">
          {icons.map((icon) => (
            <Link href={icon.link} key={icon.name} className="hover:scale-75 ">
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default navbar;
