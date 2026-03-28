import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Vedant",
  lastName: "Patel",
  name: `Vedant Patel`,
  role: "Mechanical Engineer",
  avatar: "/images/avatar.jpg",
  email: "vedantpatel.app@gmail.com",
  location: "America/New_York",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vedantpatelapp-eng",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vedantptls",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/vdnt.ptl/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@vdnt.ptl",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Mechanical Engineer`,
  description: `Portfolio of ${person.name}, a mechanical engineering student at UNC Charlotte passionate about aerospace, embedded systems, and building at the intersection of hardware and software.`,
  headline: <>Engineering Fueled by Curiosity.</>,
  featured: {
    display: false,
    title: <>Featured Work</>,
    href: "/work/water-analyzer-biofilter-system",
  },
  subline: (
    <>
      I'm <strong>Vedant Patel</strong>, a mechanical engineering student at{" "}
      <strong>UNC Charlotte</strong>, passionate about aerospace, embedded systems,
      and building things that exist at the intersection of hardware and software.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a mechanical engineering student at UNC Charlotte from Cary, NC.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Vedant Patel, a mechanical engineering student from Cary, NC, with a passion for
        creating systems at the confluence of hardware, software, and the world. Currently a student
        at UNC Charlotte working on my B.S., I have hands-on experience with a variety of fields,
        including aerospace design, embedded systems, and CAD work with tools such as Fusion 360,
        Python, and microcontrollers.
        <br /><br />
        Whether designing a launch system for a rocket or creating a water analyzer with sensor
        systems, I strive for precision and curiosity in everything I build.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "AutoDesk",
        timeframe: "Feb 2026 – Present",
        role: "Design and Make Ambassador",
        achievements: [
          <>
            Engaging with students, artists, and professionals to foster a supportive design
            community. Showcasing projects and mentoring peers on design and manufacturing
            techniques.
          </>,
        ],
        images: [],
      },
      {
        company: "DPR Construction",
        timeframe: "2022 – 2024",
        role: "Mentee",
        achievements: [
          <>
            Developed strong teamwork, communication, and problem-solving skills through hands-on
            mentorship involving project planning, organization, and real-world construction and
            engineering workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of North Carolina at Charlotte",
        description: (
          <>
            Pursuing a Bachelor of Science in Mechanical Engineering with a Minor in Mathematics.
            Active member of the Astro-mechanics Club and the American Institute of Aeronautics
            and Astronautics (AIAA).
          </>
        ),
      },
      {
        name: "Panther Creek High School",
        description: (
          <>
            Active member of Model United Nations, Technology Student Association, Science
            National Honor Society, and Science Olympiad.
          </>
        ),
      },
    ],
  },
  technical: {
    display: false,
    title: "Technical Skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "I build things. I break things. I write about both.",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg",   alt: "image", orientation: "vertical"   },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg",   alt: "image", orientation: "vertical"   },
    { src: "/images/gallery/vertical-2.jpg",   alt: "image", orientation: "vertical"   },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg",   alt: "image", orientation: "vertical"   },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
