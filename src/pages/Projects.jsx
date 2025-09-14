import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "HiTeman" },
  { id: 2, title: "Resolving Issues in Educational Institutions" },
  { id: 3, title: "E-commerce Platform" },
];

export default function Projects() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-500 hover:underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
