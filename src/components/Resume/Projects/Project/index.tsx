export interface ProjectProps {
  name: string;
  description: (string | React.ReactElement)[];
  role: string;
  technologyUsed: string;
  teamSize?: string;
  responsibilities?: string[];
}

const Project = ({
  name,
  description,
  role,
  technologyUsed,
  teamSize,
  responsibilities,
}: ProjectProps) => {
  return (
    <div>
      <p className="font-bold">{name}</p>
      <ul>
        <li>
          <span className="font-semibold">Description:</span>
          <ul className="border-l-2 border-primary-300 pl-2">
            {description.map((item) => (
              <li key={typeof item === "string" ? item : (item.key as string)}>
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-semibold">Role:</span> {role}
        </li>
        <li>
          <span className="font-semibold">Technology used:</span>{" "}
          {technologyUsed}
        </li>
        {teamSize && (
          <li>
            <span className="font-semibold">Number of members:</span> {teamSize}
          </li>
        )}
        {responsibilities && (
          <li>
            <span className="font-semibold">Responsibilities:</span>
            <ul className="border-l-2 border-primary-300 pl-2">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Project;
