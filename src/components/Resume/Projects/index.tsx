import { CSSProperties } from "react";
import Project from "./Project";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Internal Tool",
    date: "Jan 2025 - Present",
    description: [
      "An internal web app to manage workers, capacity, resource in a organization.",
    ],
    role: "Fullstack Developer",
    technologyUsed:
      "Backend: Express.Js, Redis, Bull, Websocket, Joi, PostgreSql, ... | Frontend: Angular, Bootstrap, ...",
    teamSize: "7 - 12",
    responsibilities: [
      "Providing solutions advice to customers",
      "Develop new features",
      "Review code",
    ],
  },
  {
    name: "Kickle App",
    date: "Aug 2025 - Nov 2025",
    description: [
      "An social app, allow users to manage tournament, and for the assessment of other people's abilities and attitudes.",
    ],
    role: "Backend Developer",
    technologyUsed:
      "NestJs, Meta API, RabbitMQ, AWS SES, PostgreSql, Socket.IO, Firebase, ...",
    teamSize: "3 - 5",
    responsibilities: [
      "Init, implement authentication, define rules",
      "Design database, design architecture",
      "Review code",
    ],
  },
  {
    name: "Orient Futures International Singapore (OFIS)",
    date: "Jun 2025 - Jan 2026",
    description: ["(B2B) Financial project to manage client requests."],
    role: "Frontend Leader",
    technologyUsed:
      "React, Javascript/Typescript, Azure/MSAL, Ant, Zustand, Yup, React-query, ...",
    teamSize: "7 - 12",
    responsibilities: [
      "Init, setup Gitlab action, implement MSAL, setup base (component, theme, ...), optimize build time, ...",
      "Estimate, break tasks",
      "Review code",
      "Daily sync-up with client & solution discussion",
    ],
  },
  {
    name: "Mha Intranet",
    date: "Oct 2024 - Jun 2025",
    description: [
      "Developed a Sharepoint intranet to enhance content management, collaboration and communication. Enable adminstrators to effeciently create and manage content, configure web parts, and organnize and engaging with information, improving departmental collaboration.",
    ],
    role: "Developer",
    technologyUsed: "React, Javascript/Typescript, SPFx, Pnp/Sp, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Define rules to match sonarqube",
      "Review code",
      "Daily sync-up with client & solution discussion",
      "Create webparts & implement sharepoint permission",
      "Custom sharepoint functions",
    ],
  },
  {
    name: "Management Social Accounts",
    date: "Aug 2024 - Oct 2024",
    description: [
      "Management social accounts of users and post posts on social medias simultaneously: Facebook, Instagram, Linkedin, Reddit, Youtube, ...",
    ],
    role: "Fullstack Developer",
    technologyUsed:
      "Frontend: HTML, CSS, Vite.js, React.js, Redux-toolkit, Ant Design, recharts, Google Api, Meta Api, ... | Backend: Nest.js, MongoDb, Passport.Js, AWS SES, Bull, Redis, ...",
    teamSize: "5 - 7",
    responsibilities: [
      "Manage team members, source code",
      "Create rules: eslint, prettier",
      "Integration 3rd party",
      "Design database",
      "Review code",
      "Research technologies to use for the project, solutions that optimize performance and user experience",
    ],
  },
  {
    name: "Fandelo One (Bluebottle Digital Vietnam)",
    date: "Nov 2023 - Jul 2024",
    description: [
      "Web app to manage all things finance, end-to-end. Track your pipeline and sync your existing finance system. Green-light bookings, sign contracts, ...",
    ],
    role: "Frontend Developer",
    technologyUsed:
      "HTML, CSS, Tailwindcss, NextAuth, Nextjs, React-query, Hellosign, Xero, Socket.IO, Springboot, MongoDb, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Init project: layout, styling, rules, implement authentication, ...",
      "Review code, manage source",
      "Discuss with BA & develop team to analysis requirements",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "Create backend api",
    ],
  },
  {
    name: "Fandelo Cms (Bluebottle Digital Vietnam)",
    date: "Jan 2023 - Jul 2024",
    description: ["Web app to manage contents and users for Fandelo native app"],
    role: "Frontend Developer",
    technologyUsed:
      "HTML, CSS, Tailwindcss, Nextjs, React-query, Ant Design, ...",
    teamSize: "5 - 10",
    responsibilities: [
      "Do all the Frontend stuffs, layout, styling",
      "Refactor, update project base",
      "Integration with back-end, 3rd party",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
    ],
  },
  {
    name: "Believe Tasmanian (Bluebottle Digital Vietnam)",
    date: "Jul 2023 - Sep 2023",
    description: [
      "This is the landing page of an organization that inspires and supports young men and women to play the sport of Tassie jumper, combined with selling athletic apparel in Hobart, TAS, Tasmania, Australia.",
    ],
    role: "Frontend Developer",
    technologyUsed: "Nextjs, HTML, CSS, Tailwindcss, Shopify Api, ...",
    teamSize: "10 - 15",
    responsibilities: [
      "Init, create base components, rules and develop",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "SEO optimization",
    ],
  },
  {
    name: "Fandelo landing page (Bluebottle Digital Vietnam)",
    date: "Feb 2023 - Apr 2024",
    description: [
      "Modern animated UI landing page to reboot Fandelo Cms into Fandelo One",
    ],
    role: "Frontend Developer",
    technologyUsed: "Nextjs, HTML, CSS, Tailwindcss, Frame motion, ...",
    teamSize: "2 - 5",
    responsibilities: [
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "SEO optimization",
    ],
  },
  {
    name: "Prism admin (Bluebottle Digital Vietnam)",
    date: "Apr 2022 - Jan 2023",
    description: [
      "Manage and connect organizations and individuals providing and using services for horse racing",
    ],
    role: "Frontend Developer",
    technologyUsed: "Angular, Hellosign, Xero, bootstrap, Redux, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Integration with back-end, 3rd party",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
    ],
  },
  {
    name: "Prism Trainer Website (Bluebottle Digital Vietnam)",
    date: "Apr 2022 - Jan 2023",
    description: ["Personal websites for Prism users"],
    role: "Developer",
    technologyUsed:
      "HTML, CSS, Reactjs, Nextjs, Ant design, Bootstrap, Tailwindcss, Chakra ui, ...",
    teamSize: "10 - 20",
    responsibilities: [
      "Do all the Frontend stuffs, layout, styling",
      "Research the latest technologies to use for the project, solutions that optimize performance and user experience",
      "SEO optimization",
    ],
  },
  {
    name: "Ui & utility typescript lib",
    description: [
      "React library based on Tailwindcss, Shadcn, built by Vite & Rollup.",
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
    technologyUsed: "React, Tailwindcss, Shadcn, Vite, Rollup, ...",
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
            date={project.date}
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
