"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { projects } from "../data/projects"; // <-- import your data here

// The rest of your arrays can stay the same:
const extracurriculars = [
  {
    title: "Spartan Analytics Consulting Group",
    role: "Team Lead",
    duration: "Jan 2022 - Dec 2022",
    description: "Oversaw consulting projects, helped new members and drove results",
  },
  {
    title: "Michigan State University Esports Club Association",
    role: "Esports Athlete",
    duration: "Jan 2020 - Dec 2020",
    description: "Competed at the highest level, securing a top-15 finish in both grand events and contributing to MSU’s top ranking in esports",
  },
  {
    title: "Sigma Chi Fraternity",
    role: "Pledge Master",
    duration: "Aug 2017 - May 2018",
    description: "Led and mentored 20+ pledges through the initiation process, ensuring adherence to a structured curriculum and successfully initiating the entire class",
  }
  // Add more entries as you like
];
const workExperiences = [
  {
    company: "DataAnnotation",
    role: "AI Training",
    duration: "May 2024 - Present",
    description: ["Designed prompts to challenge LLMs in math, coding, ML, and data analysis; engineered adversarial prompts to induce errors and refine model behavior; revised responses for accuracy, efficiency, and guideline adherence; created coded solutions tailored to prompts, enhancing AI training"]
    },
    {
      company: "North",
      role: "Data Science Intern",
      duration: "May 2024 - Aug 2024",
      description:[
        "Built a Python-based standalone application for on-demand team member metric tracking, report generation, and data search with Snowflake integration; streamlined data manipulation and transformation, enabling leadership to generate reports in seconds instead of hours",
         "Executed an in-depth analysis of underwriting escalation tickets, leveraging IP geolocation for validation, association mining for underwriting rules, and Sigma BI for dashboard development; automated weekly reporting in Airflow, reducing ticket volume by 35%"],
    },
    {
      company: "Michigan Automotive Group",
      role: "Sales Analyst",
      duration: "Jan 2022 - May 2024",
      description: ["Retrieved and preprocessed raw data from CRM, conducted data analysis, and established KPIs for the salesforce; defined new metric expectations, boosting and sustaining sales month-over-month by 15%",
        "Developed a Python-based mass email automation tool (MIME, smtplib), launching segmented marketing campaigns and driving a 10% month-over-month sales increase",
        "Orchestrated the entire sales cycle, overseeing lead coordination, appointments, documentation, test drives, and initial verbal commitments; doubled and sustained salesperson performance while optimizing the sales process"
      ],
    },
    {
      company: "Rocket Mortgage",
      role: "Mortgage Banker",
      duration: "Jan 2021 - Jan 2022",
      description: ["Conducted in-depth credit and financial analysis to assess tangible net benefits, successfully structuring loan terms to align with client needs and drive business growth",
        "Piloted and provided strategic feedback on new technology, collaborating with the software team to enhance product performance and user experience",
        "Consistently exceeded sales targets in a competitive environment, achieving 150% of goal and generating $10M+ in revenue",
        "Delivered outstanding client service, earning a 5-star overall rating through personalized support and tailored financial solutions"
      ],
    },
    {
      company: "Power Shine",
      role: "Head Of Business Development",
      duration: "May 2019 - Sept 2020",
      description: ["Cultivated and maintained strong client relationships, consistently delivering exceptional service and securing a 5-star overall rating",
        "Led end-to-end sales operations, including procurement, negotiations, and client onboarding, successfully establishing 30 recurring accounts",
        "Designed and executed a data-driven marketing strategy, driving 120% year-over-year sales growth"
      ],
    },
    {
      company: "Rocket Mortgage",
      role: "Operations Intern",
      duration: "May 2018 - Aug 2018",
      description: ["Streamlined team member progress tracking in Excel, reducing reporting time by 95% through automation",
        "Developed and executed a structured goal and compensation plan for a 20-member team, improving transparency and alignment",
        "Seamlessly assumed team leader responsibilities, ensuring uninterrupted production and operational efficiency"
      ],
    },
    {
      company: "Rocket Mortgage",
      role: "Campus Ambassador",
      duration: "Aug 2017 - May 2018",
      description: ["Organized and led networking and career events for Rocket Mortgage at Michigan State University, connecting students with industry professionals and opportunities",],
    },
    {
      company: "Rocket Mortgage",
      role: "Servicing Intern",
      duration: "May 2017 - Aug 2017",
      description: ["Developed internal webpages using HTML and CSS to enhance clarity and guidance on escalation processes",
        "Coordinated and facilitated events for third-party vendor executives, ensuring seamless execution and engagement"
      ],
    },
];
const education = [
  {
    school: "Michigan State University (College of Natural Science)",
    degree: "Master of Science in Data Science",
    duration: "Aug 2023 - May 2025",
    description: "",
  },
  {
    school: "Michigan State University (Eli Broad College of Business)",
    degree: "Master of Science Business Data Science & Analytics",
    duration: "Jan 2022 - Dec 2022",
    description: "",
  },
  {
    school: "Michigan State University (College of Social Science)",
    degree: "Bachelor of Arts Economics",
    duration: "Jan 2017 - Dec 2020",
    description: "",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Projects");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if there's a "?project=N" in the URL
  const projectParam = searchParams.get("project");
  const selectedProject = projectParam
    ? projects.find((p) => p.id === Number(projectParam))
    : null;

  function openModal(projectId) {
    router.push(`/?project=${projectId}`, { shallow: true });
  }

  function closeModal() {
    router.push("/", { shallow: true });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      {/* HEADER */}
      <header className="w-full max-w-3xl flex flex-col items-center text-center relative">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/Michael_04.jpg"
            alt="Profile photo of Michael Guel"
            fill
            className="object-contain rounded-full border-4 border-blue-500"
          />
        </div>
        <h1 className="text-2xl font-bold mt-2">Michael Guel</h1>
        <p className="text-gray-400">Creative Dev | Data Enthusiast | 🤖 AI Explorer</p>
        <p className="text-gray-400">Website Under Construction***</p>
        <a
          href="/MichaelGuelResumeSpring2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 mt-2 hover:underline"
        >
          🔗 View My Resume
        </a>
      </header>

      {/* TAB NAVIGATION */}
      <nav className="w-full max-w-3xl mt-6 border-b pb-2">
        <ul className="flex justify-center space-x-4">
          {["Projects", "About Me", "Work Experience", "Education", "Extracurriculars"].map((tab) => (
            <li key={tab}>
              <button
                type="button"
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-400 text-blue-400"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* TAB CONTENT */}
      <main className="w-full max-w-3xl mt-6">
        {/* PROJECTS TAB */}
        {activeTab === "Projects" && (
          <section className="grid grid-cols-3 gap-4 max-w-3xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group bg-gray-800 cursor-pointer hover:opacity-90 transition"
                onClick={() => openModal(project.id)}
              >
                <div className="relative w-full h-32">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-1 text-center">
                  <p className="text-sm text-white">{project.title}</p>
                  {/* <p className="text-sm text-gray">{project.shortDescription}</p> */}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* MODAL FOR SELECTED PROJECT (Route-Based) */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <div
              className="
                bg-gray-800 p-6 rounded-lg w-full max-w-lg text-center relative
                max-h-[90vh] overflow-y-auto
              "
            >
              <button
                onClick={closeModal}
                aria-label="Close project modal"
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                ✖
              </button>

              <div className="flex justify-center">
                <Image
                  src={selectedProject.image}
                  alt={`Screenshot of ${selectedProject.title}`}
                  width={400}
                  height={200}
                  className="mx-auto mb-4 object-contain max-w-full max-h-[60vh]"
                />
              </div>

              <h2 id="project-title" className="text-xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mt-2">{selectedProject.shortDescription}</p>

              <Link
                href={`/projects/${selectedProject.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
              >
                View Full Project
              </Link>
            </div>
          </div>
        )}

        {/* ABOUT ME TAB */}
        {activeTab === "About Me" && (
          <section className="text-center text-gray-300">
            <p className="text-lg">
            Hello! My name is Michael, and I’m a graduate student at Michigan State University. I’ll be graduating this spring with a Master of Science in Data Science. My studies have centered around Machine Learning, Computer Vision, Large Language Models (LLMs), and Deep Learning. <br></br><br></br> Outside of school, I enjoy running, hitting the gym, and playing Fortnite every now and then. Nothing beats quality time with family or a great night out with friends. I love meeting new people and exploring new places. </p>
            {/* Insert Image Here */}
            <div className="flex justify-center my-6">
              <Image 
                src="/north_group.png" 
                alt="A picture of Michael" 
                width={400} 
                height={400} 
                className="full"
              />
            </div>
             <p className="text-lg">What sets me apart? Relentless work ethic. I will NEVER be outworked—first one in, last one out. I bring the grit of sales into tech and thrive on challenges. Fast learner. Problem solver. Always hungry to grow. 
            </p>
          </section>
        )}

        {/* WORK EXPERIENCE TAB */}
        {activeTab === "Work Experience" && (
          <section className="text-left text-gray-300 space-y-4">
            {workExperiences.map((job, index) => (
              <article key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-bold text-white">{job.company}</h3>
                <p className="text-sm text-blue-400">
                  {job.role} | {job.duration}
                </p>

                {/* Render bullet points if description is an array */}
                {Array.isArray(job.description) ? (
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 mt-1">{job.description}</p>
                )}
              </article>
            ))}
          </section>
        )}


        {/* EDUCATION TAB */}
        {activeTab === "Education" && (
          <section className="text-left text-gray-300 space-y-4">
            {education.map((degree, index) => (
              <article key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-bold text-white">{degree.school}</h3>
                <p className="text-sm text-blue-400">
                  {degree.degree} | {degree.duration}
                </p>
                <p className="text-gray-400 mt-1">{degree.description}</p>
              </article>
            ))}
          </section>
        )}

        {/* EXTRACURRICULARS TAB */}
        {activeTab === "Extracurriculars" && (
          <section className="text-left text-gray-300 space-y-4">
            {extracurriculars.map((activity, index) => (
              <article key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                <p className="text-sm text-blue-400">
                  {activity.role} | {activity.duration}
                </p>
                <p className="text-gray-400 mt-1">{activity.description}</p>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}









