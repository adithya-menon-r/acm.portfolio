// Structure for a single stat
export type StatItem = {
  value: number;
  prefix?: string; // Before the number
  suffix?: string; // After the number
};

// Define the structure for a single event
export type Event = {
  name: string;
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
  "hack-101": {
    //events/hack-101 is the route
    name: "Hack 101",
    details: "4th March 2025 | AB3",
    report:
      "The CS101 series of events ended with a bang that was the Hack101 event. Hack 101 was a 12-hour hackathon where participants flexed the skills they learnt in the workshops leading up to the event. The hackathon was completely open and participants built a wide variety of projects on a wide range of topics from 2D platformers to movie recommendation systems. The winners were awarded with cash prizes and certificates. ",
    mainImage: "/hack101.jpg",
    stats: [{ value: 80, prefix: "Upwards of ", suffix: " People Attended" }],
    tags: ["#Hack101", "#CS101", "#ACM", "#Amrita"],
  },

  "langchain-101": {
    //events/langchain-101 is the route
    name: "Langchain 101",
    details: "27th March, 2025 | Seminar Hall-AB3",
    report:
      "Langchain 101 was the second workshop in the CS101 series, with partcipants diving headfirst into incorporating LLMs into their applications. Participants built chatbots using Langchain and fine-tuned them to get accurate responses.Participants implemented concepts like Retrieval Augmented Generation (RAG), training LLMs to write blockchain code using provided documentation and agents & tool integration. Participants were tasked with building a chatbot interface using Streamlit and LangChain. This hands-on project allowed attendees to apply their newly acquired knowledge in a practical context, fostering innovation and creativity. Engagement & Feedback:",
    mainImage: "/langchain101/langchain101 2.jpg",
    stats: [{ value: 70, prefix: "More Than ", suffix: " Atendees" }],
    gallery: [
      "/langchain101/langchain101 3.jpg",
      "/langchain101/langchain101 4.jpg",
    ],
    tags: ["#Langchain101", "#CS101", "#ACM", "#Amrita", "#LLM", "#Chatbots"],
  },

  "web-101": {
    //events/web-101 is the route
    name: "Web 101",
    details: "25th Feb 2025 | Seminar Hall-AB3",
    report:
      "Webdev 101 marked the start of the CS101 series of events for 2024-25. The workshop provided a holistic introduction to web development with a good mix of hands-on and theory. Pariticpants learnt the ins and outs of modern frontend development frameworks like React by building a todo app and a login page, complete with backend integration. There was a live coding session where the attendees were made to code a website, and the speakers were coding live along with the attendees. Doubts were discussed and cleared. At the end of the workshop, a Q/A session was also held.",
    mainImage: "/web101.jpeg",
    stats: [{ value: 100, prefix: "Over ", suffix: " Students" }],
    tags: ["#Webdev101", "#CS101", "#ACM", "#Amrita"],
  },

  "winter-of-code-2024-25": {
    //events/winter-of-code-2024-25 is the route
    name: "Winter of Code 2024-25",
    details: "17th Dec 2024 | Online",
    report:
      "The Winter of Code held at ACM Amrita!, this was an open-source coding challenge to the participants. Developers contributed to a range of exciting projects, collaborating, and pushed their skills to new heights. A gamified leaderboard system kept the competition fierce, with participants vying for top spots through consistent contributions and innovative solutions. The event not only fostered a spirit of community and learning but also highlighted the power of open-source collaboration in driving technological advancement.",
    mainImage: "/woc/woc.JPG",
    stats: [{ value: 300, prefix: "A Turnout Of Over  ", suffix: " Students" }],
    gallery: [
      "/woc/woc1.JPG",
      "/woc/woc2.JPG",
      "/woc/woc3.JPG",
      "/woc/woc4.JPG",
    ],
    tags: ["#WinterOfCode", "#ACM", "#Amrita", "#OpenSource"],
  },

  "acm-student-chapter-induction-2024": {
    //events/acm-student-chapter-induction-2024 is the route
    name: "Bootstrap'25. ACM Student Chapter Induction 2024-25",
    details: "12th Sept, 2024 | Anugraha Hall-AB3",
    report: `The Amrita Coimbatore ACM Student Chapter successfully conducted "ACM Bootstrap '25," its annual induction program. The primary objective of the event was to introduce the student chapter to the freshers and junior students of the university, detail its vision and activities, and encourage them to become active members. The program featured an insightful address by a distinguished alumnus, presentations from the core team, and an interactive quiz. Furthermore, the event also served as the official launchpad for the Defang.io Hackathon, setting the stage for a month of innovation and learning.`,
    mainImage: "/induction 2024/induction.jpg",
    stats: [{ value: 150, prefix: "Welcomed Over  ", suffix: " Students" }],
    gallery: [
      "/induction 2024/induction 2.jpg",
      "/induction 2024/induction 3.jpg",
      "/induction 2024/induction 4.jpg",
      "/induction 2024/induction 5.png",
    ],
    tags: ["#ACM", "#Induction", "#Amrita", "#Tech", "#Community"],
  },

  "backend-development-workshop": {
    //events/backend-development-workshop is the route
    name: "Backend Development Workshop",
    details: "24th and 25th Jul, 2024 | AB3",
    report:
      "The ACM Student Club at Amrita Coimbatore kicked off technical workshops for the year 2024-25 with a workshop on backend development fundamentals. Participants were introduced to the concepts of backend development such as APIs and MVC models. The workshop was completely hands-on with participants building CRUD APIs using Express.js and Node.js and testing them using Postman.\n\nThe workshop attracted predominantly undergraduate students in their second and third years. The attendee profile included undergraduate students with basic programming knowledge seeking to enhance their backend development capabilities for academic projects and career preparation.",
    mainImage: "/backend workshop.jpg",
    stats: [{ value: 150, prefix: "Over ", suffix: " Participants" }],
    tags: [
      "#BackendDevelopment",
      "#ACM",
      "#ExpressJS",
      "#NodeJS",
      "#Postman",
      "#Workshop",
    ],
  },

  "generative-ai-workshop": {
    //events/generative-ai-workshop is the route
    name: "Generative AI Workshop",
    details: "17th Jul 2025 | Anugraha Hall-AB3",
    report:
      "ACM Amrita successfully organised a Generative AI workshop. The session introduced students to key Gen AI tools like ChatGPT and Gemini, covering prompt engineering and real world applications in coding, academic writing, and research. The workshop emphasized ethical AI use, human oversight, and gave students practical insights into boosting productivity, creativity & encouraging further exploration of Generative AI.",
    mainImage: "/gen ai/gen ai.jpg",
    stats: [{ value: 60, prefix: "More than ", suffix: " Attended" }],
    gallery: ["/gen ai/gen ai 2.jpg"],
    tags: [
      "#GenerativeAI",
      "#ChatGPT",
      "#Gemini",
      "#PromptEngineering",
      "#Google",
    ],
  },

  "how-to-win-a-hackathon": {
    //events/how-to-win-a-hackathon is the route
    name: "How to Win a Hackathon",
    details: "3rd Jul, 2025 | Seminar Hall-AB3",
    report:
      "How to Win a Hackathon was a comprehensive hackathon mastery workshop with 80+ participants, equipping students with winning strategies. Participants gained expertise in team formation, problem selection, idea validation, and crucial storytelling techniques. The session featured live ideation challenges and hands-on demonstrations of Generative AI, Agentic AI, and low-code tools.",
    mainImage: "/how to win hack/how to win hack.jpg",
    stats: [
      { value: 80, prefix: "Attendance exceeded ", suffix: " Participants" },
    ],
    gallery: ["/how to win hack/how to win hack 2.jpg"],
    tags: [
      "#Hackathon",
      "#TeamFormation",
      "#AITools",
      "#Ideation",
      "#TechStack",
    ],
  },

  "git-github-foundations-workshop": {
    //events/git-github-foundations-workshop is the route
    name: "Git & GitHub Foundations Workshop",
    details: "2nd Jul, 2025 | Anugraha Hall-AB3",
    report:
      "The hands-on Git & GitHub foundations workshop held at ACM Amrita. Participants mastered repository management, version control workflows, branching strategies, and collaborative development practices. The workshop wrapped up with live PR demonstrations and comprehensive open source collaboration guidance.The workshop attracted more than students from various academic years.",
    mainImage: "/git workshop/git workshop.jpg",
    stats: [{ value: 200, prefix: "Attended By Over ", suffix: " Students" }],
    gallery: ["/git workshop/git workshop 2.jpg"],
    tags: [
      "#Git",
      "#GitHub",
      "#VersionControl",
      "#OpenSource",
      "#Collaboration",
    ],
  },

  "defang-io-hackathon": {
    //events/defang-io-hackathon is the route
    name: "Defang.io Hackathon 2025",
    details: "17th Sept, 2025 | Anugraha Hall-AB3",
    report:
      "The Defang.io Hackathon was officially launched as part of the ACM Bootstrap '25 activities, marking the beginning of a focused and technically engaging competition.The Defang.io Hackathon was officially launched as part of the ACM Bootstrap '25 activities, marking the beginning of a focused and technically engaging competition.These challenges covered a wide range of domains- AI-assisted systems, automation tools, web-based utilities, scalable cloud applications, performance-oriented solutions, and creative developer productivity tools",
    mainImage: "/defang/defang.jpg",
    sponsors: ["/defang/sponsor.svg"],
    stats: [{ value: 150, prefix: "Engaged Over ", suffix: " Participants" }],
    gallery: [
      "/defang/defang 2.JPG",
      "/defang/defang 3.JPG",
      "/defang/defang 4.JPG",
      "/defang/defang 5.jpg",
    ],
    tags: ["#DefangHackathon", "#Hackathon", "#ACM", "#Tech", "#Innovation"],
  },
};
