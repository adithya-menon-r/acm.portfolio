export type AlumniPerson = {
  name: string;
  photo: string | null;
  title: string;
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
        name: "Sneha S S",
        photo: "/alumni/2020-21/sneha-sridhar.png",
        title: "Chairperson",
      },
      {
        name: "Sreeramji K S",
        photo: "/alumni/2020-21/sreeramji-ks.jpg",
        title: "Vice Chairperson",
      },
      {
        name: "Deepika J",
        photo: "/alumni/2020-21/deepika-j.jpg",
        title: "Secretary",
      },
      {
        name: "Hemanth Duddu",
        photo: "/alumni/2020-21/hemanth-duddu.jpg",
        title: "Treasurer",
      },
      {
        name: "Malavika M",
        photo: "/alumni/2020-21/malavika-m.jpg",
        title: "Web Master",
      },
    ],
  },
  {
    year: "2021 - 2022",
    members: [
      {
        name: "Jagadeeshram D",
        photo: "/alumni/2021-22/jagadeeshram-d.jpg",
        title: "Chairperson",
      },
      {
        name: "Adithi Narayan",
        photo: "/alumni/2021-22/adithi-narayan.jpg",
        title: "Vice Chairperson",
      },
      {
        name: "Harish K",
        photo: "/alumni/2021-22/harish-k.jpg",
        title: "Secretary",
      },
      {
        name: "Hitharth Kadam",
        photo: "/alumni/2021-22/hitharth-kadam.jpeg",
        title: "Membership Chairperson",
      },
      {
        name: "Parripati Divyasri",
        photo: "/alumni/2021-22/divyasri-parripati.jpg",
        title: "Treasurer",
      },
      {
        name: "Abhinay Potti",
        photo: "/alumni/2021-22/abhinay-potti.jpg",
        title: "Web Master",
      },
    ],
  },
  {
    year: "2022 - 2023",
    members: [
      {
        name: "V S Tharunika",
        photo: "/alumni/2022-23/tharunika.jpeg",
        title: "Chairperson",
      },
      {
        name: "Sangeerthana",
        photo: "/alumni/2022-23/sangeerthana.jpg",
        title: "Vice Chairperson",
      },
      {
        name: "Ragavi",
        photo: "/alumni/2022-23/ragavi.png",
        title: "Secretary",
      },
      {
        name: "Gomathi R",
        photo: "/alumni/2022-23/gomathi-r.jpg",
        title: "Membership Chairperson",
      },
      {
        name: "Meenakshi",
        photo: "/alumni/2022-23/meenaksshi.png",
        title: "Treasurer",
      },
      {
        name: "Kaushik",
        photo: "/alumni/2022-23/kaushik.png",
        title: "Web Master",
      },
    ],
  },
  {
    year: "2023 - 2024",
    members: [
      {
        name: "Kishore S",
        photo: "/alumni/2023-24/kishore-s.jpg",
        title: "Chairperson",
      },
      {
        name: "Duvvuri Ananya",
        photo: "/alumni/2023-24/ananya-duvvuri.jpg",
        title: "Vice Chairperson",
      },
      {
        name: "Pradeep Karthik M",
        photo: "/alumni/2023-24/pradeep-karthik.jpg",
        title: "Secretary",
      },
      {
        name: "Akash S",
        photo: "/alumni/2023-24/akash-s.jpg",
        title: "Membership Chairperson",
      },
      {
        name: "Aparna A",
        photo: "/alumni/2023-24/aparna-a.jpg",
        title: "Treasurer",
      },
      {
        name: "Praveen Kumar M",
        photo: "/alumni/2023-24/praveen-kumar.jpg",
        title: "Web Master",
      },
    ],
  },
  {
    year: "2024 - 2025",
    members: [
      {
        name: "Ashwin Narayanan S",
        photo: "/alumni/2024-25/ashwin-narayanan-s.jpg",
        title: "Chairperson",
      },
      {
        name: "Abineha Prabu",
        photo: "/alumni/2024-25/abineha.png",
        title: "Vice Chairperson",
      },
      {
        name: "Abhinav Ramakrishnan",
        photo: "/alumni/2024-25/abhinav-r.jpg",
        title: "Secretary",
      },
      {
        name: "Sanyam Bhardwaj",
        photo: "/alumni/2024-25/sanyam.jpg",
        title: "Treasurer",
      },
      {
        name: "Aadithyaa Eeswaran",
        photo: "/alumni/2024-25/aadhitya-e.jpg",
        title: "Web Master",
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
  //     },
  //     {
  //       name: "Leela Mahalakshmi Marupuru",
  //       photo: "/alumni/2025-26/leela-m.jpg",
  //       title: "Vice Chairperson",
  //     },
  //     {
  //       name: "Sarath Chandra",
  //       photo: "/alumni/2025-26/sarath-chandra.jpg",
  //       title: "Secretary",
  //     },
  //     {
  //       name: "Sanyam Bhardwaj",
  //       photo: "/alumni/2025-26/sanyam.jpg",
  //       title: "Treasurer",
  //     },
  //     {
  //       name: "Adithya Menon R",
  //       photo: "/alumni/2025-26/adithya-menon-r.jpg",
  //       title: "Web Master",
  //     },
  //   ],
  // },
];
