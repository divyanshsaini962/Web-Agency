interface ProjectProps {
  project: { title: string; description: string; imageUrl: string };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4" />
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}
