import { CSSProperties } from "react";

const Summary = ({ style }: { style?: CSSProperties }) => {
  return (
    <div className="card" style={style}>
      <p className="card-header">Summary</p>
      <ul className="list-inside list-disc text-sm">
        <li>
          Full-stack Developer with ~4 years of experience building and
          maintaining scalable web applications.
        </li>
        <li>
          Strong experience with React, Next.js, Node.js, and NestJS, including
          REST/gRPC APIs and real-time communication.
        </li>
        <li>
          Worked on B2B and enterprise internal systems using cloud-native
          approaches with Docker and AWS.
        </li>
        <li>
          Strong in client communication and system design, with hands-on
          experience leading frontend teams and reviewing code.
        </li>
      </ul>
    </div>
  );
};

export default Summary;
