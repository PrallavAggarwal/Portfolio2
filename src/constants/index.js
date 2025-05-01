import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate front-end developer and software enthusiast with expertise in React.js, JavaScript, HTML, CSS, and Redux. I love building intuitive and dynamic web applications that enhance user experiences. With a strong foundation in Data Structures & Algorithms (C++), I develop efficient and scalable solutions. Currently, I’m expanding my skills in web development while also sharing knowledge through teaching frontend development. My goal is to craft seamless digital experiences and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer, specialised in React.js with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Node.js, Express.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "15/July/2025 - 15/Oct/2024 ",
    role: "Frontend Developer",
    company: "Qspiders",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, Javascript and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "MongoDb"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Blog Post Fetching Application",
    image: project1,
    description:
      "Designed and developed a Blog Post Application using React.js to fetch and display blog posts from an external API. Implemented Context API for efficient global state management and pagination, ensuring smooth navigation across blog pages",
    technologies: ["HTML", "CSS", "Javascript", "React", "Tailwind"],
  },
  {
    title: "Shopping Cart Application",
    image: project2,
    description:
      "Built a dynamic Shopping Cart Application with React.js, delivering a seamless and interactive user experience. Utilized Redux for robust global state management to efficiently handle cart operations, including adding, updating, and removing items.",
    technologies: ["HTML", "CSS", "React.js", "Redux", "Tailwind"],
  },
  {
    title: "Random Gif Generator",
    image: project3,
    description:
      "The Random GIF Generator is a fun and dynamic web application built using React.js. It allows users to either generate completely random GIFs or search for GIFs based on custom keywords. The app uses a public GIF API (like Giphy or Tenor) to fetch and display results in real-time, providing a smooth and interactive experience. I built this project to deepen my understanding of working with APIs in React, especially handling asynchronous data using hooks like useState and useEffect. ",
    technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Currently Ghaziabiad, Uttar Pradesh, India",
  phoneNo: "+91 999 778 7803 ",
  email: "prallavagg002@gmail.com",
};
