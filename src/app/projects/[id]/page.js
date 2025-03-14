import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";

export default function ProjectDetailsPage({ params }) {
  const { id } = params;
  // Convert 'id' to number and find the matching project
  const project = projects.find(p => p.id === Number(id));

  // Handle "not found" if no project with that ID exists
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link
          href="/"
          className="inline-block mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="mb-6">{project.overview}</p>

      <div className="mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="object-cover w-full max-w-2xl h-auto rounded"
        />
      </div>

      {/* Additional images, if any */}
      {project.additionalImages?.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-6">
          {project.additionalImages.map((imgSrc, index) => (
            <div key={index} className="relative w-72 h-44">
              <Image
                src={imgSrc}
                alt={`Extra image ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

      {/* Embed video */}
      {project.videoUrl && (
        <div className="mb-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={project.videoUrl}
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Code snippets */}
      {project.codeSnippets?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Code Snippets</h2>
          {project.codeSnippets.map((snippet, idx) => (
            <pre key={idx} className="bg-gray-800 p-4 rounded text-left overflow-auto mb-4">
              <code>{snippet}</code>
            </pre>
          ))}
        </div>
      )}

      <Link
        href="/"
        className="inline-block mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}

