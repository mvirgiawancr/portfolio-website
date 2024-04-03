import React from "react";
import Title from "./Title";
import Card from "./Card";
import {
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "CSS",
    icon: <SiCss3 className="text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl" />,
  },
  {
    name: "React JS",
    icon: <SiReact className="text-5xl" />,
  },
  {
    name: "Next Js",
    icon: <SiNextdotjs className="text-5xl" />,
  },
];

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <div className="flex justify-center flex-wrap items-center gap-10">
        {skills.map((skill) => (
          <Card key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  );
};

export default Skills;
