import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Vedant",
  lastName: "Patel",
  name: "Vedant Patel",
  role: "Mechanical Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "vedantpatel.app@gmail.com",
  location: "America/New_York",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Engineering projects, research, and updates.</>,
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
  title: `${person.name} — Mechanical Engineering`,
  description: `Portfolio of ${person.name}, a mechanical engineering student at North Carolina State University with experience in thin-film research, aerospace projects, mechanical design, and sensor integration.`,
  headline: <>Vedant's Engineering Portfolio</>,
  featured: {
    display: false,
    title: <>Featured Work</>,
    href: "/work/water-analyzer-biofilter-system",
  },
  subline: (
    <>
      I'm <strong>Vedant Patel</strong>, a mechanical engineering student at{" "}
      <strong>North Carolina State University</strong>. My experience spans
      thin-film research at Brookhaven National Laboratory, aerospace
      projects, and building systems that combine mechanical design,
      electronics, and software.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a mechanical engineering student at North Carolina State University from Cary, North Carolina.`,
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
        I'm Vedant Patel, a junior pursuing a Bachelor of Science in
        Mechanical Engineering at North Carolina State University.
        Originally from Cary, North Carolina, I'm interested in aerospace,
        advanced manufacturing, and bringing mechanical systems to life
        through design, programming, and experimentation.
        <br />
        <br />
        At Brookhaven National Laboratory, I researched hybrid photoresists
        for nanolithography and optimized low-temperature atomic layer
        deposition processes for thin films. I've also supported CubeSat
        structural and thermal analysis and collaborated on aerospace
        design projects.
        <br />
        <br />
        My hands-on projects include a water analyzer and biofilter system
        with a Fusion 360-designed, 3D-printed enclosure and a microcontroller
        integrating water-quality sensors. I enjoy connecting CAD,
        fabrication, electronics, and data analysis to develop and improve
        working systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience & Involvement",
    experiences: [
      {
        company: "Brookhaven National Laboratory",
        timeframe: "May 2026 – July 2026",
        role: "Research Intern",
        achievements: [
          <>
            Researched molecularly engineered hybrid photoresists for
            nanolithography with Dr. Chang-Yong Nam and Dr. Nikhil Tiwale
            in Upton, New York.
          </>,
          <>
            Optimized low-temperature atomic layer deposition processes
            to develop stable, repeatable hybrid organic-inorganic thin
            films and help mitigate nanoscale pattern collapse.
          </>,
          <>
            Applied data analysis to experimental findings supporting
            research in thin-film processing and electron-beam lithography.
          </>,
        ],
        images: [],
      },
      {
        company: "Autodesk",
        timeframe: "January 2026 – Present",
        role: "Design and Make Ambassador",
        achievements: [
          <>
            Engage with students, artists, and professionals to support
            a collaborative design and manufacturing community.
          </>,
          <>
            Showcase projects and mentor peers on design and
            manufacturing techniques.
          </>,
        ],
        images: [],
      },
      {
        company: "Astro-Mechanics Club",
        timeframe: "February 2026 – May 2026",
        role: "Mechanical and Materials/Thermals/Structures Subteam Member",
        achievements: [
          <>
            Supported CubeSat development through structural and thermal
            analysis as part of the Mechanical and
            Materials/Thermals/Structures subteam at UNC Charlotte.
          </>,
          <>
            Contributed to group discussions and fabrication supporting
            the team's satellite development work.
          </>,
        ],
        images: [],
      },
      {
        company: "American Institute of Aeronautics and Astronautics",
        timeframe: "August 2025 – Present",
        role: "Member",
        achievements: [
          <>
            Collaborate with peers on aerospace design concepts through
            AIAA involvement in Charlotte and Raleigh.
          </>,
          <>
            Participate in workshops such as Design Build Fly,
            collaborating with teammates to develop foam airplanes.
          </>,
        ],
        images: [],
      },
      {
        company: "DPR Construction",
        timeframe: "August 2022 – June 2024",
        role: "Mentee",
        achievements: [
          <>
            Participated in hands-on mentorship in Durham, North Carolina,
            involving project planning, organization, and real-world
            construction and engineering workflows.
          </>,
          <>
            Developed teamwork, communication, and problem-solving skills
            through collaborative mentorship activities.
          </>,
        ],
        images: [],
      },
      {
        company: "Cary Teen Council",
        timeframe: "June 2021 – June 2025",
        role: "Volunteer Member",
        achievements: [
          <>
            Contributed more than 200 hours of community service through
            town-sponsored events, outreach programs, and service projects
            in Cary, North Carolina.
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
        name: "North Carolina State University",
        description: (
          <>
            <strong>
              Bachelor of Science in Mechanical Engineering — In Progress
            </strong>
            <br />
            August 2026 – Present | Raleigh, NC
            <br />
            Currently a junior. Related coursework includes Engineering
            Statics.
          </>
        ),
      },
      {
        name: "University of North Carolina at Charlotte",
        description: (
          <>
            <strong>Previous Undergraduate Studies</strong>
            <br />
            August 2025 – May 2026 | Charlotte, NC
            <br />
            Studied Mechanical Engineering with a minor in Mathematics
            before transferring to North Carolina State University.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "CAD & Manufacturing",
        description: (
          <>
            SolidWorks, Fusion 360, AutoCAD, Onshape, and 3D printing.
            Designed and 3D-printed the complete enclosure for a water
            analyzer and biofilter system.
          </>
        ),
        images: [],
      },
      {
        title: "Programming",
        description: (
          <>
            Python, C++, Java, HTML, MATLAB, NumPy, and Scikit-learn.
          </>
        ),
        images: [],
      },
      {
        title: "Hardware & Sensor Integration",
        description: (
          <>
            Raspberry Pi, microcontrollers, and sensor integration.
            Programmed a microcontroller with turbidity and total
            dissolved solids sensors for real-time water testing.
          </>
        ),
        images: [],
      },
      {
        title: "Research & Analysis",
        description: (
          <>
            Atomic layer deposition, thin films, electron-beam
            lithography, data analysis, and structural and thermal
            analysis.
          </>
        ),
        images: [],
      },
      {
        title: "Certifications",
        description: (
          <>
            Autodesk AutoCAD Certification and Python Certification.
          </>
        ),
        images: [],
      },
    ],
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
  description: `Engineering projects by ${person.name}, including a water analyzer and biofilter system featuring a 3D-printed enclosure, microcontroller programming, and integrated water-quality sensors.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
