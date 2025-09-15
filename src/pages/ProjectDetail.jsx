import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="p-10">Project not found</p>;
  }

  return (
    <div className="p-10  lg:mx-20 text-justify">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-gray-700">{project.longDescription}</p>
      {project.longDescriptionparagraf2 && (
        <p className="mb-6 text-gray-700">{project.longDescriptionparagraf2}</p>
      )}
      <strong className="text-2xl">{project.subjudul}</strong>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4">
        {project.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} screenshot ${index}`}
            className={`rounded-lg shadow ${
              project.gallery.length === 3 && index === 2
                ? "md:col-span-2 md:mx-auto"
                : ""
            }`}
          />
        ))}
      </div>

      <p className="mt-6 mb-5 text-gray-700">{project.longDescription2}</p>
      <p className="mt-1 mb-10 text-gray-700">
        {project.longDescription2paragraf2}
      </p>

      <strong className="text-2xl">{project.subjudul2}</strong>
      <div className="mt-5">
        <img src={project.image2} alt="" />
      </div>
      <div className="flex justify-center">
        {project.video && (
          <video className="h-[27rem]" src={project.video} controls />
        )}
      </div>

      <div>
        <p>{project.longDescription3}</p>
      </div>

      <p>{project.longDescription3}</p>
    </div>
  );
}
