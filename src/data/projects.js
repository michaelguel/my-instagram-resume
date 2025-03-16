// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Meijer OOS Prediction",
    shortDescription: "Corporate partnership with Meijer",
    image: "/projects/meijer.png",
    overview: "Michigan State University and Meijer partner to predict OOS products with Meijers new inventory camera system. This is an ongoing project but one worth talking about. ",
    additionalImages: ["/projects/project1_step1.png", "/projects/project1_step2.png"],
    videoUrl: "https://www.youtube.com/embed/someVideo",
    codeSnippets: [
      `
        function example() {
          console.log('Hello from Project 1!');
        }
      `,
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 2,
    title: "Web2Code",
    shortDescription: "A quick overview...",
    image: "/projects/web2code.png",
    overview: "This is a longer description or summary...",
    additionalImages: ["/projects/project1_step1.png", "/projects/project1_step2.png"],
    videoUrl: "https://www.youtube.com/embed/someVideo",
    codeSnippets: [
      `
        function example() {
          console.log('Hello from Project 1!');
        }
      `,
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "Cryptocurrency MLOPs",
    shortDescription: "A quick overview...",
    image: "/projects/gecko.png",
    overview: "The goal of this project is to develop an MLOps project end to end. I have established the postgresql database and begun ingesting the data from CoinGecko. The next step of this project is to select a data source for out of scope historical prices of bitcoin. After sourcing the historical data, we will begin modeling to predict the next minute move of bitcoin price, either down or up.  ",
    additionalImages: ["/projects/postgresql.png", "/projects/ingestion.png"],
    videoUrl: "https://www.youtube.com/embed/someVideo",
    codeSnippets: [
      `
        function example() {
          console.log('Hello from Project 1!');
        }
      `,
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 4,
    title: "Emotion Recognition",
    shortDescription: "Another project overview...",
    image: "/projects/project2.png",
    overview: "This project is for emotion recogntion, guided by HSEMotion framework. We successfully trained emoition, age and ethnicity models to allow for real time prediction. I developed a SWIFT based iOS application to house the models and allow for real time on device predictions.",
    additionalImages: [],
    videoUrl: "https://www.youtube.com/embed/uz1TlruItE0",
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 5,
    title: "C++ Remapper",
    shortDescription: "Another project overview...",
    image: "/projects/project1.png",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: "https://www.youtube.com/embed/Q0rsCDELStA",
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 6,
    title: "Sequence Arithmetic",
    shortDescription: "Another project overview...",
    image: "/projects/digits.jpg",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 7,
    title: "Demand Forcasting",
    shortDescription: "Another project overview...",
    image: "/projects/textron.jpg",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 8,
    title: "Data Mining Competition",
    shortDescription: "Another project overview...",
    image: "/projects/graph.png",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 9,
    title: "MSU OFPB Research",
    shortDescription: "Another project overview...",
    image: "/projects/msu.jpg",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 10,
    title: "StreamLit Player Pricing",
    shortDescription: "Another project overview...",
    image: "/projects/streamlit.png",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 11,
    title: "StreamLit Spotify Analysis",
    shortDescription: "Another project overview...",
    image: "/projects/spotify.png",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 12,
    title: "Webcrawler/Scraper",
    shortDescription: "Another project overview...",
    image: "/projects/msu.jpg",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  {
    id: 13,
    title: "Fingerprinting Presidential Speeches",
    shortDescription: "Another project overview...",
    image: "/projects/george.jpg",
    overview: "Detailed explanation of Project 2...",
    additionalImages: [],
    videoUrl: null,
    codeSnippets: [],
    technologies: ["Python", "FastAPI"],
  },
  // ... more projects as needed
];
