export type AlumniPerson = {
  name: string;
  photo: string | null;
  title: string;
  duration: string;
};

export type AlumniYear = {
  year: string;
  members: AlumniPerson[];
};

export const AlumniData: AlumniYear[] = [
  {
    year: "2020 - 2021",
    members: [
      {
        name: "Ms. Sneha S S",
        photo: "/alumni/2020-21/sneha sridhar1.png",
        title: "Chairperson",
        duration: "2020 - 2021",
      },
      {
        name: "Mr. Sreeramji K S",
        photo: "/alumni/2020-21/sreeramji k s.jpg",
        title: "Vice Chairperson",
        duration: "2020 - 2021",
      },
      {
        name: "Ms. Deepika J",
        photo: "/alumni/2020-21/deepika.jpg",
        title: "Secretary",
        duration: "2020 - 2021",
      },
      {
        name: "Mr. Hemanth Duddu",
        photo: "/alumni/2020-21/hemanth duddu1.jpg",
        title: "Treasurer",
        duration: "2020 - 2021",
      },
      {
        name: "Ms. Malavika",
        photo: "/alumni/2020-21/malavika.jpg",
        title: "Web Master",
        duration: "2020 - 2021",
      },
    ],
  },
  {
    year: "2021 - 2022",
    members: [
      {
        name: "Mr. Jagadeeshram D",
        photo: "/alumni/2021-22/jagadeeshram d.jpg",
        title: "Chairperson",
        duration: "2021 - 2022",
      },
      {
        name: "Ms. Adithi Narayan",
        photo: "/alumni/2021-22/adithi narayan.jpg",
        title: "Vice Chairperson",
        duration: "2021 - 2022",
      },
      {
        name: "Mr. Harish K",
        photo: "/alumni/2021-22/harish k.jpg",
        title: "Secretary",
        duration: "2021 - 2022",
      },
      {
        name: "Mr. Hitharth Kadam",
        photo: "/alumni/2021-22/hitharth kadam.jpeg",
        title: "Membership Chairperson",
        duration: "2021 - 2022",
      },
      {
        name: "Ms. Parripati Divyasri",
        photo: "/alumni/2021-22/divyasri parripati.jpg",
        title: "Treasurer",
        duration: "2021 - 2022",
      },
      {
        name: "Mr. Abhinay Potti",
        photo: "/alumni/2021-22/abhinay potti.jpg",
        title: "Web Master",
        duration: "2021 - 2022",
      },
    ],
  },
  {
    year: "2022 - 2023",
    members: [
      {
        name: "Ms. V S Tharunika",
        photo: "/alumni/2022-23/tharunika.jpeg",
        title: "Chairperson",
        duration: "2022 - 2023",
      },
      {
        name: "Ms. Sangeerthana",
        photo: "/alumni/2022-23/sangeerthana.jpg",
        title: "Vice Chairperson",
        duration: "2022 - 2023",
      },
      {
        name: "Ms. Ragavi",
        photo: "/alumni/2022-23/ragavi.png",
        title: "Secretary",
        duration: "2022 - 2023",
      },
      {
        name: "Ms. Gomathi",
        photo: null,
        title: "Membership Chairperson",
        duration: "2022 - 2023",
      },
      {
        name: "Ms. Meenakshi",
        photo: "/alumni/2022-23/meenaksshi.png",
        title: "Treasurer",
        duration: "2022 - 2023",
      },
      {
        name: "Mr. Kaushik",
        photo: "/alumni/2022-23/kaushik.png",
        title: "Web Master",
        duration: "2022 - 2023",
      },
    ],
  },
  {
    year: "2023 - 2024",
    members: [
      {
        name: "Mr. Kishore S",
        photo: "/alumni/2023-24/kishore_s.jpg",
        title: "Chairperson",
        duration: "2023 - 2024",
      },
      {
        name: "Ms. Duvvuri Ananya",
        photo: "/alumni/2023-24/ananya_duvvuri.jpg",
        title: "Vice Chairperson",
        duration: "2023 - 2024",
      },
      {
        name: "Mr. Pradeep Karthik M",
        photo: "/alumni/2023-24/pradeep_karthik.jpg",
        title: "Secretary",
        duration: "2023 - 2024",
      },
      {
        name: "Mr. Akash S",
        photo: "/alumni/2023-24/akash_s.jpg",
        title: "Membership Chairperson",
        duration: "2023 - 2024",
      },
      {
        name: "Ms. Aparna A",
        photo: "/alumni/2023-24/aparna_a1.jpg",
        title: "Treasurer",
        duration: "2023 - 2024",
      },
      {
        name: "Mr. Praveen Kumar M",
        photo: "/alumni/2023-24/praveen_kumar.jpg",
        title: "Web Master",
        duration: "2023 - 2024",
      },
    ],
  },
  {
    year: "2024 - 2025",
    members: [
      {
        name: "Ashwin Narayanan S",
        photo: "/alumni/2024-25/ashwin_narayanan_s.jpg",
        title: "Chairperson",
        duration: "2024 - 2025",
      },
      {
        name: "Abineha Prabu",
        photo: "/alumni/2024-25/abineha.png",
        title: "Vice Chairperson",
        duration: "2024 - 2025",
      },
      {
        name: "Abhinav Ramakrishnan",
        photo: "/alumni/2024-25/abhinav_r.jpg",
        title: "Secretary",
        duration: "2024 - 2025",
      },
      {
        name: "Sanyam Bhardwaj",
        photo: "/alumni/2024-25/sanyam.jpg",
        title: "Treasurer",
        duration: "2024 - 2025",
      },
      {
        name: "Aadithyaa Eeswaran",
        photo: "/alumni/2024-25/aadhitya.jpg",
        title: "Web Master",
        duration: "2024 - 2025",
      },
    ],
  },
  // Old site had their data for office bearers but they ain't alumni yet, keeping it to uncomment in future
  // {
  //   year: "2025 - 2026",
  //   members: [
  //     {
  //       name: "Aadithyaa Eeswaran",
  //       photo: "/alumni/2025-26/aadhitya.jpg",
  //       title: "Chairperson",
  //       duration: "2025 - 2026",
  //     },
  //     {
  //       name: "Leela Mahalakshmi Marupuru",
  //       photo: "/alumni/2025-26/leela-m.jpg",
  //       title: "Vice Chairperson",
  //       duration: "2025 - 2026",
  //     },
  //     {
  //       name: "Sarath Chandra",
  //       photo: "/alumni/2025-26/sarath-chandra.jpg",
  //       title: "Secretary",
  //       duration: "2025 - 2026",
  //     },
  //     {
  //       name: "Sanyam Bhardwaj",
  //       photo: "/alumni/2025-26/sanyam.jpg",
  //       title: "Treasurer",
  //       duration: "2025 - 2026",
  //     },
  //   ],
  // },
];
