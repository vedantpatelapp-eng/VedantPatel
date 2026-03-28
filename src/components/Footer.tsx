import Link from "next/link";
import { person, social } from "@/resources";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--color-border)",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--color-bg)",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      {/* Bottom-right corner bracket */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "60px",
          height: "60px",
          borderBottom: "1.5px solid var(--color-accent)",
          borderRight: "1.5px solid var(--color-accent)",
          pointerEvents: "none",
          zIndex: 100,
          opacity: 0.5,
        }}
      />

      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text3)", letterSpacing: "0.08em" }}>
        © {year} <span style={{ color: "var(--color-accent)" }}>/</span> {person.name}
      </div>

      {/* Social links */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {social
          .filter((s) => s.link)
          .map((item) => (
            <Link
              key={item.name}
              href={item.link!}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "var(--color-text3)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text3)")}
            >
              {item.name}
            </Link>
          ))}
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--color-text3)",
          letterSpacing: "0.06em",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span className="vp-status-dot" />
        Cary, NC · America/New_York
      </div>
    </footer>
  );
};
