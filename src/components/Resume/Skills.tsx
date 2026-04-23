import { CSSProperties } from "react";

const Skills = ({ style }: { style?: CSSProperties }) => {
  return (
    <div className="card mt-4" style={style}>
      <p className="card-header ">Skills</p>
      <ul className="list-inside list-disc text-sm">
        <li>Proficiency in Reactjs/Nextjs, Nestjs, HTML, CSS, JavaScript/Typescript</li>
        <li>Responsive Design</li>
        <li>Web Performance Optimization</li>
        <li>Proficient use of source code management tool: GIT</li>
        <li>RESTful APIs, CI/CD, Docker, AWS</li>
      </ul>
    </div>
  );
};

export default Skills;
