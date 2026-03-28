import Image from "next/image";
import Link from "next/link";
import { person, about, social } from "@/resources";

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ICON_MAP: Record<string, React.FC> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  instagram: InstagramIcon,
};

const experiences = [
  {
    company: "AutoDesk",
    timeframe: "FEB 2026 — PRESENT",
    role: "Design and Make Ambassador",
    desc: "Engaging with students, artists, and professionals to foster a supportive design community. Showcasing projects and mentoring peers on design and manufacturing techniques.",
  },
  {
    company: "DPR Construction",
    timeframe: "2022 — 2024",
    role: "Mentee",
    desc: "Developed strong teamwork, communication, and problem-solving skills through hands-on mentorship involving project planning, organization, and real-world construction and engineering workflows.",
  },
];

const education = [
  {
    name: "University of North Carolina at Charlotte",
    desc: "Pursuing a Bachelor of Science in Mechanical Engineering with a Minor in Mathematics. Active member of the Astro-mechanics Club and the American Institute of Aeronautics and Astronautics (AIAA).",
  },
  {
    name: "Panther Creek High School",
    desc: "Active member of Model United Nations, Technology Student Association, Science National Honor Society, and Science Olympiad.",
  },
];

export default function About() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 40px 80px" }}>
      {/* Section header */}
      <div className="vp-section-header">
        <span className="vp-section-num">01 —</span>
        <h2 className="vp-section-title">About</h2>
        <div className="vp-section-line" />
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Avatar with frame */}
          <div style={{ position: "relative", width: "160px", height: "160px" }}>
            <div
              style={{
                position: "absolute",
                inset: "-6px",
                border: "1.5px solid var(--color-accent)",
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-3px",
                left: "-3px",
                right: "3px",
                bottom: "3px",
                border: "1px solid var(--color-border2)",
              }}
            />
            <Image
              src={person.avatar}
              alt={person.name}
              width={160}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Social links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text3)",
                marginBottom: "10px",
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {social
                .filter((s) => s.essential && s.link)
                .map((item) => {
                  const Icon = ICON_MAP[item.icon] ?? (() => null);
                  return (
                    <Link
                      key={item.name}
                      href={item.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--color-text2)",
                        textDecoration: "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.04em",
                        padding: "4px 0",
                        borderBottom: "1px solid transparent",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "var(--color-accent)";
                        el.style.borderBottomColor = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "var(--color-text2)";
                        el.style.borderBottomColor = "transparent";
                      }}
                    >
                      <Icon />
                      {item.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div>
          <p style={{ color: "var(--color-text2)", fontSize: "15px", lineHeight: 1.75, marginBottom: "12px" }}>
            I am Vedant Patel, a mechanical engineering student from Cary, NC, with a passion for creating systems
            at the confluence of hardware, software, and the world. Currently a student at UNC Charlotte working on
            my B.S., I have hands-on experience with a variety of fields, including aerospace design, embedded systems,
            and CAD work with tools such as Fusion 360, Python, and microcontrollers.
          </p>
          <p style={{ color: "var(--color-text2)", fontSize: "15px", lineHeight: 1.75, marginBottom: "40px" }}>
            Whether designing a launch system for a rocket or creating a water analyzer with sensor systems,
            I strive for precision and curiosity in everything I build.
          </p>

          {/* Work Experience */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--color-text)",
              marginBottom: "16px",
            }}
          >
            Work Experience
          </h2>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                padding: "20px 0",
                borderBottom: i < experiences.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: 700, color: "var(--color-text)", letterSpacing: "0.04em" }}>
                  {exp.company}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text3)", letterSpacing: "0.06em" }}>
                  {exp.timeframe}
                </span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                {exp.role}
              </div>
              <p style={{ color: "var(--color-text2)", fontSize: "14px", lineHeight: 1.7 }}>{exp.desc}</p>
            </div>
          ))}

          {/* Education */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--color-text)",
              marginTop: "40px",
              marginBottom: "16px",
            }}
          >
            Education
          </h2>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                padding: "16px 0",
                borderBottom: i < education.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 700, color: "var(--color-text)", letterSpacing: "0.04em", marginBottom: "4px" }}>
                {edu.name}
              </div>
              <p style={{ color: "var(--color-text2)", fontSize: "13px", lineHeight: 1.65 }}>{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
