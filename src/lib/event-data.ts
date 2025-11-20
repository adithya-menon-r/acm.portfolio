// Structure for a single stat
export type StatItem = {
  value: number;
  prefix?: string; // Before the number
  suffix?: string; // After the number
};

// Define the structure for a single event
export type Event = {
  name: string;
  category: string;
  sortDate: string;
  displayDate: string;
  details: string;
  report: string;
  mainImage: string;
  sponsors?: string[]; // Optional
  stats?: StatItem[]; // Optional
  gallery?: string[]; // Optional
  tags: string[];
};

// A simple utility to create URL-friendly IDs from event names
export const slugify = (text: string): string => {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w-]+/g, ""); // Remove all non-word chars
  //All these are just in
};

// Each event slug is stored here with its name as the key
export const eventDb: Record<string, Event> = {
  "backend-development-workshop": {
    //events/backend-development-workshop is the route
    name: "Backend Development Workshop",
    category: "Workshop",
    sortDate: "2024-07-24",
    displayDate: "24 Jul 2024",
    details: "24-25th Jul 2024 | Academic Block 3",
    report:
      "The ACM Student Club at Amrita Coimbatore kicked off technical workshops for the year 2024-25 with a workshop on backend development fundamentals. Participants were introduced to the concepts of backend development such as APIs and MVC models. The workshop was completely hands-on with participants building CRUD APIs using Express.js and Node.js and testing them using Postman.\n\nThe workshop attracted predominantly undergraduate students in their second and third years. The attendee profile included undergraduate students with basic programming knowledge seeking to enhance their backend development capabilities for academic projects and career preparation.",
    mainImage: "/events/backend-workshop.jpg",
    stats: [{ prefix: "Over ", value: 70, suffix: " Participants" }],
    tags: [
      "#BackendDevelopment",
      "#ACM",
      "#Amrita",
      "#ExpressJS",
      "#NodeJS",
      "#Postman",
      "#Workshop",
    ],
  },

  "winter-of-code-2024-25": {
    //events/winter-of-code-2024-25 is the route
    name: "Winter of Code 2024-25",
    category: "Challenge",
    sortDate: "2024/12/17",
    displayDate: "Winter 2024",
    details: "17th Dec 2024 - 5th Mar 2025",
    report:
      "The Winter of Code held at ACM Amrita!, this was an open-source coding challenge to the participants. Developers contributed to a range of exciting projects, collaborating, and pushed their skills to new heights. A gamified leaderboard system kept the competition fierce, with participants vying for top spots through consistent contributions and innovative solutions. The event not only fostered a spirit of community and learning but also highlighted the power of open-source collaboration in driving technological advancement.",
    mainImage: "/events/winter-of-code-24-25/woc-24-25-1.JPG",
    stats: [{ prefix: "A Turnout of Over  ", value: 280, suffix: " Students" }],
    gallery: [
      "/events/winter-of-code-24-25/woc-24-25-2.JPG",
      "/events/winter-of-code-24-25/woc-24-25-3.JPG",
      "/events/winter-of-code-24-25/woc-24-25-4.JPG",
      "/events/winter-of-code-24-25/woc-24-25-5.JPG",
    ],
    tags: ["#WinterOfCode", "#ACM", "#Amrita", "#OpenSource", "#Challenge"],
  },

  "web-101": {
    //events/web-101 is the route
    name: "Web 101",
    category: "Workshop",
    sortDate: "2025/02/25",
    displayDate: "25 Feb 2025",
    details: "25th February 2025 | Seminar Hall, Academic Block 3",
    report:
      "Webdev 101 marked the start of the CS101 series of events for 2024-25. The workshop provided a holistic introduction to web development with a good mix of hands-on and theory. Pariticpants learnt the ins and outs of modern frontend development frameworks like React by building a todo app and a login page, complete with backend integration. There was a live coding session where the attendees were made to code a website, and the speakers were coding live along with the attendees. Doubts were discussed and cleared. At the end of the workshop, a Q/A session was also held.",
    mainImage: "/events/web-101-workshop.jpeg",
    stats: [{ prefix: "Over ", value: 100, suffix: " Students Joined" }],
    tags: ["#Webdev101", "#CS101", "#ACM", "#Amrita", "#Workshop"],
  },

  "hack-101": {
    //events/hack-101 is the route
    name: "Hack 101",
    category: "Hackathon",
    sortDate: "2025/03/04",
    displayDate: "04 Mar 2025",
    details: "4th March 2025 | Academic Block 3",
    report:
      "The CS101 series of events ended with a bang that was the Hack101 event. Hack 101 was a 12-hour hackathon where participants flexed the skills they learnt in the workshops leading up to the event. The hackathon was completely open and participants built a wide variety of projects on a wide range of topics from 2D platformers to movie recommendation systems. The winners were awarded with cash prizes and certificates. ",
    mainImage: "/events/hack-101-hackathon.jpg",
    stats: [
      { value: 80, prefix: "Upwards of ", suffix: " People Participated" },
    ],
    tags: ["#Hack101", "#CS101", "#ACM", "#Amrita", "#Hackathons"],
  },

  "langchain-101": {
    //events/langchain-101 is the route
    name: "LangChain 101",
    category: "Workshop",
    sortDate: "2025/03/27",
    displayDate: "27 Mar 2025",
    details: "27th March 2025 | Seminar Hall, Academic Block 3",
    report:
      "Langchain 101 was the second workshop in the CS101 series, with partcipants diving headfirst into incorporating LLMs into their applications. Participants built chatbots using Langchain and fine-tuned them to get accurate responses.Participants implemented concepts like Retrieval Augmented Generation (RAG), training LLMs to write blockchain code using provided documentation and agents & tool integration. Participants were tasked with building a chatbot interface using Streamlit and LangChain. This hands-on project allowed attendees to apply their newly acquired knowledge in a practical context, fostering innovation and creativity.",
    mainImage: "/events/langchain-101-workshop/langchain-101-1.jpg",
    stats: [{ value: 90, prefix: "More Than ", suffix: " Atendees" }],
    gallery: [
      "/events/langchain-101-workshop/langchain-101-2.jpg",
      "/events/langchain-101-workshop/langchain-101-3.jpg",
    ],
    tags: [
      "#Langchain101",
      "#CS101",
      "#ACM",
      "#Amrita",
      "#LLM",
      "#Chatbots",
      "#Workshop",
    ],
  },

  "git-github-foundations-workshop": {
    //events/git-github-foundations-workshop is the route
    name: "Git & GitHub Foundations Workshop",
    category: "Workshop",
    sortDate: "2025/07/02",
    displayDate: "02 Jul 2025",
    details: "2nd Jul 2025 | Seminar Hall, Academic Block 3",
    report:
      "The hands-on Git & GitHub foundations workshop held at ACM Amrita. Participants mastered repository management, version control workflows, branching strategies, and collaborative development practices. The workshop wrapped up with live PR demonstrations and comprehensive open source collaboration guidance. The workshop attracted students from various academic years.",
    mainImage: "/events/git-workshop/git-workshop-1.jpg",
    stats: [{ prefix: "Attended By Over ", value: 200, suffix: " Students" }],
    gallery: ["/events/git-workshop/git-workshop-2.jpg"],
    tags: [
      "#ACM",
      "#Amrita",
      "#Git",
      "#GitHub",
      "#VersionControl",
      "#OpenSource",
      "#Collaboration",
      "#Workshop",
    ],
  },

  "how-to-win-a-hackathon": {
    //events/how-to-win-a-hackathon is the route
    name: "How to Win a Hackathon",
    category: "Workshop",
    sortDate: "2025/07/03",
    displayDate: "03 Jul 2025",
    details: "3rd Jul 2025 | Seminar Hall, Academic Block 3",
    report:
      "How to Win a Hackathon was a comprehensive hackathon mastery workshop with 80+ participants, equipping students with winning strategies. Participants gained expertise in team formation, problem selection, idea validation, and crucial storytelling techniques. The session featured live ideation challenges and hands-on demonstrations of Generative AI, Agentic AI, and low-code tools.",
    mainImage: "/events/how-to-win-hack/how-to-win-hack-1.jpg",
    stats: [
      { prefix: "Attendance exceeded ", value: 80, suffix: " Participants" },
    ],
    gallery: ["/events/how-to-win-hack/how-to-win-hack-2.jpg"],
    tags: [
      "#ACM",
      "#Amrita",
      "#Hackathon",
      "#TeamFormation",
      "#AITools",
      "#Ideation",
      "#TechStack",
      "#Workshop",
    ],
  },

  "gen-ai-workshop": {
    //events/generative-ai-workshop is the route
    name: "GenAI Workshop",
    category: "Workshop",
    sortDate: "2025/07/17",
    displayDate: "17 Jul 2025",
    details: "17th Jul 2025 | Anugraha Hall, Academic Block 3",
    report:
      "ACM Amrita successfully organised a Generative AI workshop conducted by Ms. Smitha Mave, an Engineering Lead at Google. The session introduced students to key Gen AI tools like ChatGPT and Gemini, covering prompt engineering and real world applications in coding, academic writing, and research. The workshop emphasized ethical AI use, human oversight, and gave students practical insights into boosting productivity, creativity & encouraging further exploration of Generative AI.",
    mainImage: "/events/gen-ai-workshop/gen-ai-workshop-1.jpg",
    stats: [{ prefix: "More than ", value: 60, suffix: " Attended" }],
    gallery: ["/events/gen-ai-workshop/gen-ai-workshop-2.jpg"],
    tags: [
      "#ACM",
      "#Amrita",
      "#GenerativeAI",
      "#ChatGPT",
      "#Gemini",
      "#PromptEngineering",
      "#Google",
      "#Workshop",
    ],
  },

  "bootstrap-2025": {
    //events/bootstrap-2025 is the route
    name: "Bootstrap 2025",
    category: "Induction",
    sortDate: "2025/09/17",
    displayDate: "17 Sep 2025",
    details: "17th September 2025 | Anugraha Hall, Academic Block 3",
    report: `The Amrita Coimbatore ACM Student Chapter successfully conducted "ACM Bootstrap '25," its annual induction program. The primary objective of the event was to introduce the student chapter to the freshers and junior students of the university, detail its vision and activities, and encourage them to become active members. The program featured an insightful address by a distinguished alumnus, presentations from the core team, and an interactive quiz. Furthermore, the event also served as the official launchpad for the Defang.io Hackathon, setting the stage for a month of innovation and learning.`,
    mainImage: "/events/bootstrap-2025/bootstrap-2025-1.jpg",
    stats: [{ prefix: "Welcomed Over  ", value: 180, suffix: " Students" }],
    gallery: [
      "/events/bootstrap-2025/bootstrap-2025-2.jpg",
      "/events/bootstrap-2025/bootstrap-2025-3.jpg",
      "/events/bootstrap-2025/bootstrap-2025-4.jpg",
      "/events/bootstrap-2025/bootstrap-2025-5.jpg",
    ],
    tags: ["#ACM", "#Induction", "#Amrita", "#Tech", "#Community"],
  },

  "defang-io-hackathon": {
    //events/defang-io-hackathon is the route
    name: "Defang.io Hackathon 2025",
    category: "Hackathon",
    sortDate: "2025/09/17",
    displayDate: "17 Sep 2025",
    details: "17th September 2025 | Anugraha Hall, Academic Block 3",
    report:
      "The Defang.io Hackathon was officially launched as part of the ACM Bootstrap '25 activities, marking the beginning of a focused and technically engaging competition. Participants were challenged to build a personalized Learning Management System (LMS) leveraging Generative AI, MCP, Agentic AI, and other cutting-edge technologies, with Defang powering cloud deployments and services. The competition showcased incredible innovation and teamwork, culminating in outstanding projects from all participants.\n\nWinners:\n🥇 1st Place: Error_404 (Rajas Mirzapure, Prakhar Goyal, Arin Pal, Narendra R)\n🥈 2nd Place: The Secret Agents (Rakeshkumar, S N Deepak, Abinithi S)\n🥉 3rd Place: Bug Busters (Sanjjiiev S, Sanjai PG, Karthikkashree E, Manasha P Y)",
    mainImage: "/events/defang-hackathon/defang-hackathon-1.jpg",
    sponsors: ["/events/defang-hackathon/defang-sponsor.svg"],
    stats: [{ prefix: "Engaged Over ", value: 100, suffix: " Participants" }],
    gallery: [
      "/events/defang-hackathon/defang-hackathon-2.JPG",
      "/events/defang-hackathon/defang-hackathon-3.JPG",
      "/events/defang-hackathon/defang-hackathon-4.JPG",
      "/events/defang-hackathon/defang-hackathon-5.jpg",
    ],
    tags: [
      "#DefangHackathon",
      "#Hackathons",
      "#ACM",
      "#Amrita",
      "#Tech",
      "#Innovation",
      "#Cloud",
    ],
  },
};
