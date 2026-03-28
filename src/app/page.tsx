import Image from "next/image";
import { getPosts } from "@/utils/utils";

const TECH_MAP: Record<string, string[]> = {
  "water-analyzer-biofilter-system": ["Fusion 360", "Python", "Microcontroller", "3D Printing", "TDS Sensor", "Turbidity Sensor"],
};

export default function Work() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 40px 80px" }}>
      {/* Section header */}
      <div className="vp-section-header">
        <span className="vp-section-num">02 —</span>
        <h2 className="vp-section-title">Projects</h2>
        <div className="vp-section-line" />
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((project, index) => {
          const images = project.metadata.images ?? [];
          const techTags = TECH_MAP[project.slug] ?? [];
          const team = project.metadata.team ?? [];
          const date = new Date(project.metadata.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }).toUpperCase();

          return (
            <div key={project.slug} className="vp-card" style={{ overflow: "hidden" }}>
              {/* Images */}
              {images.length > 0 && (
                <div className="vp-project-images">
                  <Image
                    src={images[0]}
                    alt={project.metadata.title}
                    width={640}
                    height={280}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    priority={index === 0}
                  />
                  {images[1] && (
                    <Image
                      src={images[1]}
                      alt={`${project.metadata.title} detail`}
                      width={320}
                      height={280}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  )}
                </div>
              )}

              {/* Body */}
              <div
                style={{
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "24px",
                  alignItems: "start",
                }}
              >
                <div>
                  {/* Tag */}
                  <div className="vp-tag vp-tag-accent" style={{ marginBottom: "12px" }}>
                    ENGR 1300 · UNC Charlotte
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      letterSpacing: "0.02em",
                      marginBottom: "10px",
                    }}
                  >
                    {project.metadata.title}
                  </h3>

                  {/* Summary */}
                  <p style={{ color: "var(--color-text2)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
                    {project.metadata.summary}
                  </p>

                  {/* Tech tags */}
                  {techTags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                      {techTags.map((t) => (
                        <span key={t} className="vp-tag">{t}</span>
                      ))}
                    </div>
                  )}

                  {/* Team */}
                  {team.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {team.map((member) => (
                        <span
                          key={member.name}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "9px",
                            letterSpacing: "0.08em",
                            color: "var(--color-text3)",
                            background: "var(--color-surface2)",
                            padding: "3px 8px",
                          }}
                        >
                          {member.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div style={{ textAlign: "right", minWidth: "100px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text3)", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    {date}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "52px",
                      fontWeight: 800,
                      color: "var(--color-border2)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
