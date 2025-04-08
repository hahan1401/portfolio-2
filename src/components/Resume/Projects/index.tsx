import { CSSProperties } from "react";
import Project from "./Project";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Mha Intranet",
    description: [
      "Developed a Sharepoint intranet to enhance content management, collaboration and communication. Enable adminstrators to effeciently create and manage content, configure web parts, and organnize and engaging with information, improving departmental collaboration.",
    ],
    role: "Frontend Developer",
    technologyUsed: "React, Javascript/Typescript, SPFx, Pnp/Sp, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Define rules to match sonarqube",
      "Create webparts & implement sharepoint permission",
      "Custom sharepoint functions",
    ],
  },
  {
    name: "Portfolio",
    description: [
      <Link
        key="https://hahan-portfolio.vercel.app/"
        href="https://hahan-portfolio.vercel.app/"
        target="_blank"
        className="text-link"
      >
        https://hahan-portfolio.vercel.app/
      </Link>,
    ],
    role: "Owner",
    technologyUsed: "Vite, React, Rollup, …",
  },
  {
    name: "React ui & utility typescript lib",
    description: [
      "React library base on Tailwindcss, Shadcn, built by Vite & Rollup.",
      <Link
        key="https://github.com/hahan1401/ui-lib"
        href="https://github.com/hahan1401/ui-lib"
        target="_blank"
        className="text-link"
      >
        https://github.com/hahan1401/ui-lib
      </Link>,
      <Link
        key="https://www.npmjs.com/package/hahan-ui-lib"
        href="https://www.npmjs.com/package/hahan-ui-lib"
        target="_blank"
        className="text-link"
      >
        https://www.npmjs.com/package/hahan-ui-lib
      </Link>,
    ],
    role: "Owner",
    technologyUsed: "Nextjs, Fammer motion, ...",
  },
  {
    name: "Spring authentication & authorization",
    description: [
      "Personal project for studying authentication & authorization: ",
      <Link
        key="https://github.com/hahan1401/spring-authentication-authorization"
        href="https://github.com/hahan1401/spring-authentication-authorization"
        target="_blank"
        className="text-link"
      >
        https://github.com/hahan1401/spring-authentication-authorization
      </Link>
    ],
    role: "Owner",
    technologyUsed: "Springboot",
  },
  {
    name: "Management Social Accounts",
    description: [
      "Management social accounts of users and manage posts on social medias: Facebook, Instagram, Linkedin, Reddit, Youtube, ...",
    ],
    role: "Fullstack Developer",
    technologyUsed:
      "React, Atn desing, Tailwindcss, Google Api, Meta Api, NestJs, MongoDb, ...",
    teamSize: "3 - 5",
    responsibilities: [
      "Integration with 3rd party, create rules",
      "Review code",
      "Design database ",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "Deploy, separate env",
    ],
  },
  {
    name: "Fandelo One",
    description: [
      "Web app to manage all things finance, end-to-end. Track your pipeline and sync your existing finance system. Green-light bookings, sign contracts, …",
    ],
    role: "Frontend Developer",
    technologyUsed:
      "Next.Js, Tanstack quey, Tanstack table, Next-auth, Hellosign, Xero, Mantine, Tailwindcss, Spring boot, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Contribute to first base Frontend stuffs: layout, styling, rules, implement authentication, …",
      "Discuss with BA & Develop team to analysis requirements",
      "Review code. ",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "Create docker deploy script",
      "Create backend api",
    ],
  },
  {
    name: "Fandelo Cms",
    description: [
      "Web app to manage content for Fandelo native app, manage users",
    ],
    role: "Frontend Developer",
    technologyUsed:
      "HTML, CSS, Tailwindcss, NextAuth, Nextjs, Hellosign, Xero, Socket, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Create app base on Nextjs",
      "Contribute to first base Frontend stuff, layout, styling",
      "Research the latest technologies to use for the project, solutions that optimize performance and userexperience",
    ],
  },
  {
    name: "Fandelo One landing page",
    description: [
      "Landing Page to Reboot Fandelo Cms into Fandelo one with Modern Animated UI",
    ],
    role: "Frontend Developer",
    technologyUsed:
      "HTML, CSS, Tailwindcss, NextAuth, Nextjs, Hellosign, Xero, Socket, ...",
    teamSize: "3 - 5",
    responsibilities: [
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience.",
      "SEO optimization.",
    ],
  },
  {
    name: "Prism admin",
    description: [
      "Manage and connect organizations and individuals providing and using services for horse racing",
    ],
    role: "Frontend Developer",
    technologyUsed: "Angular, Hellosign, Xero, bootstrap, Redux, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Integration with backend, 3rd party",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience.",
    ],
  },
  {
    name: "Believe Tasmanian, Prism Trainer Website, ...",
    description: [
      "Landing page for an organization that inspire and support young women and men to play in the Tassie jumper in Hobart, TAS, Australia, Tasmania",
      "Personal websites for Prism users",
    ],
    role: "Frontend Developer",
    technologyUsed: "Angular, Hellosign, Xero, bootstrap, Redux, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Integration with backend, 3rd party",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience.",
    ],
  },
];
const Projects = ({ style }: { style?: CSSProperties }) => {
  return (
    <div className="card mt-4" style={style}>
      <p className="card-header">Projects</p>
      <div className="border-l-2 border-link pl-3 flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            role={project.role}
            technologyUsed={project.technologyUsed}
            teamSize={project.teamSize}
            responsibilities={project.responsibilities}
          />
        ))}
        {/* <div>
          <p className="font-bold">Fandelo Cms</p>
          <ul>
            <li>
              Description: Web app to manage content for Fandelo native app,
              manage users
            </li>
            <li>Role: Frontend Developer</li>
            <li>
              Technology used: HTML, CSS, Tailwindcss, NextAuth, Nextjs,
              Hellosign, Xero, Socket, ...
            </li>
            <li>Number of members: 10 - 20</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>Create app base on Nextjs</li>
                <li>
                  Contribute to first base Frontend stuff, layout, styling
                </li>
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border-primary/20 mt-3 border-t pt-1">
          <p className="font-bold">Believe Tasmanian</p>
          <ul>
            <li>
              Description: Landing page for an organization that inspire and
              support young women and men to play in the Tassie jumper in
              Hobart, TAS, Australia, Tasmania
            </li>
            <li>Role: Frontend Developer</li>
            <li>Technology used: Nextjs, HTML, CSS, Tailwindcss, ...</li>
            <li>Number of members: 10 - 15</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>Init, create base components, develop.</li>
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience.
                </li>
                <li>SEO optimization.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border-primary/20 mt-3 border-t pt-1">
          <p className="font-bold">Fandelo landing page</p>
          <ul>
            <li>Description: Landing page for launch campain Fandelo app</li>
            <li>Role: Frontend Developer</li>
            <li>
              Technology used: Nextjs, HTML, CSS, Tailwindcss, Frame motion, ...
            </li>
            <li>Number of members: 2-5</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience.
                </li>
                <li>SEO optimization.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border-primary/20 mt-3 border-t pt-1">
          <p className="font-bold">Prism admin</p>
          <ul>
            <li>
              Description: Manage and connect organizations and individuals
              providing and using services for horse racing
            </li>
            <li>Role: Frontend Developer</li>
            <li>Technology used: Angular, Hellosign, Xero, bootstrap, ...</li>
            <li>Number of members: 2-5</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>Integration with backend, 3rd party</li>
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border-primary/20 mt-3 border-t pt-1">
          <p className="font-bold">Prism Trainer Website</p>
          <ul>
            <li>Description: Personal websites for Prism users</li>
            <li>Role: Frontend Developer</li>
            <li>
              Technology used: HTML, CSS, Reactjs, Nextjs, Ant design, Boostrap,
              Tailwindcss, Charka ui, ...
            </li>
            <li>Number of members: 10 - 20</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>Do all the Frontend stuffs, layout, styling</li>
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience.
                </li>
                <li>SEO optimization</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="border-primary/20 mt-3 border-t pt-1">
          <p className="font-bold">Prism Trainer Website</p>
          <ul>
            <li>Description: Personal websites for Prism users</li>
            <li>Role: Frontend Developer</li>
            <li>
              Technology used: HTML, CSS, Reactjs, Nextjs, Ant design, Boostrap,
              Tailwindcss, Charka ui, ...
            </li>
            <li>Number of members: 10 - 20</li>
            <li>
              Responsibilities:{" "}
              <ul className="border-l-2 border-primary-300 pl-2">
                <li>Do all the Frontend stuffs, layout, styling</li>
                <li>
                  Research the latest technologies to use for the project,
                  solutions that optimize performance and user experience.
                </li>
                <li>SEO optimization</li>
              </ul>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
