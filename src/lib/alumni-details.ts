export type AlumniPerson = {
  name: string;
  photo: string | null;
  title: string;
  social?: string | null;
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
        name: "Sneha Sridhar",
        photo: "/alumni/2020-21/sneha-sridhar.png",
        title: "Chairperson",
        social: "https://www.linkedin.com/in/sneha-sridhar/",
      },
      {
        name: "Sreeramji K S",
        photo: "/alumni/2020-21/sreeramji-ks.jpg",
        title: "Vice Chairperson",
        social: "https://in.linkedin.com/in/sreeramjiks",
      },
      {
        name: "Deepika J",
        photo: "/alumni/2020-21/deepika-j.jpg",
        title: "Secretary",
        social: "https://www.linkedin.com/in/deepika-jyothishkumar-08911317b/",
      },
      {
        name: "Hemanth Duddu",
        photo: "/alumni/2020-21/hemanth-duddu.jpg",
        title: "Treasurer",
        social: "https://www.linkedin.com/in/hemanth2000/",
      },
      {
        name: "Malavika MG",
        photo: "/alumni/2020-21/malavika-m.jpg",
        title: "Web Master",
        social: "https://www.linkedin.com/in/malavika-m9/",
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
        social: "https://www.linkedin.com/in/jagadeeshramd/",
      },
      {
        name: "Adithi Narayan",
        photo: "/alumni/2021-22/adithi-narayan.jpg",
        title: "Vice Chairperson",
        social: "https://www.linkedin.com/in/adithi-narayan/",
      },
      {
        name: "Harish K",
        photo: "/alumni/2021-22/harish-k.jpg",
        title: "Secretary",
        social: "https://www.linkedin.com/in/harishk501/",
      },
      {
        name: "Hitharth Kadam",
        photo: "/alumni/2021-22/hitharth-kadam.jpeg",
        title: "Membership Chairperson",
        social: "https://www.linkedin.com/in/hitharthkadam/",
      },
      {
        name: "Divyasri Parripati",
        photo: "/alumni/2021-22/divyasri-parripati.jpg",
        title: "Treasurer",
        social: "https://www.linkedin.com/in/parripatidivyasri/",
      },
      {
        name: "S Abhinay Potti",
        photo: "/alumni/2021-22/abhinay-potti.jpg",
        title: "Web Master",
        social: "https://www.linkedin.com/in/abhinaypotti/",
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
        social: "https://www.linkedin.com/in/v-s-tharunika-2135ba1a9/",
      },
      {
        name: "Sangeerthana B",
        photo: "/alumni/2022-23/sangeerthana.jpg",
        title: "Vice Chairperson",
        social: "https://www.linkedin.com/in/sangeerthanabalasubramaniam/",
      },
      {
        name: "Ragavi Rajkumar",
        photo: "/alumni/2022-23/ragavi.png",
        title: "Secretary",
        social: "https://www.linkedin.com/in/ragavi-rajkumar/",
      },
      {
        name: "Gomathi R",
        photo: "/alumni/2022-23/gomathi-r.jpg",
        title: "Membership Chairperson",
        social: "https://www.linkedin.com/in/gomathi-raveendran/",
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
        social: "https://www.linkedin.com/in/kishore-s-6251b6213/",
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
        social: "https://www.linkedin.com/in/pradeepkarthikm/",
      },
      {
        name: "Akash Sathish",
        photo: "/alumni/2023-24/akash-s.jpg",
        title: "Membership Chairperson",
        social: "https://www.linkedin.com/in/akash-sathish-74a4271ba/",
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
        social: "https://www.linkedin.com/in/m--praveen-kumar/",
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
        social: "https://www.linkedin.com/in/ashwin2003/",
      },
      {
        name: "Abineha Prabu",
        photo: "/alumni/2024-25/abineha.png",
        title: "Vice Chairperson",
        social: "https://www.linkedin.com/in/abineha-prabu/",
      },
      {
        name: "Abhinav Ramakrishnan",
        photo: "/alumni/2024-25/abhinav-r.jpg",
        title: "Secretary",
        social: "https://www.linkedin.com/in/abhinav-ark-ramakrishnan/",
      },
      {
        name: "Sanyam Bhardwaj",
        photo: "/alumni/2024-25/sanyam.jpg",
        title: "Treasurer",
        social: "https://in.linkedin.com/in/sanyam-bhardwaj-04b2a4264",
      },
      {
        name: "Aadithyaa Eeswaran",
        photo: "/alumni/2024-25/aadhitya-e.jpg",
        title: "Web Master",
        social: "https://www.linkedin.com/in/aadithyaa-eeswaran/",
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
  //       social: "https://www.linkedin.com/in/aadithyaa-eeswaran/",
  //     },
  //     {
  //       name: "Leela Mahalakshmi Marupuru",
  //       photo: "/alumni/2025-26/leela-m.jpg",
  //       title: "Vice Chairperson",
  //       social: "https://www.linkedin.com/in/leela-m-336334301",
  //     },
  //     {
  //       name: "Sarath Chandra",
  //       photo: "/alumni/2025-26/sarath-chandra.jpg",
  //       title: "Secretary",
  //       social: "https://www.linkedin.com/in/sarathcx",
  //     },
  //     {
  //       name: "Sanyam Bhardwaj",
  //       photo: "/alumni/2025-26/sanyam.jpg",
  //       title: "Treasurer",
  //       social: "https://in.linkedin.com/in/sanyam-bhardwaj-04b2a4264",
  //     },
  //     {
  //       name: "Adithya Menon R",
  //       photo: "/alumni/2025-26/adithya-menon-r.jpg",
  //       title: "Web Master",
  //       social: "https://www.linkedin.com/in/adithya-menon-r/",
  //     },
  //   ],
  // },
];
