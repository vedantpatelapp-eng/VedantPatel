"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
];

function Clock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " ET"
      );
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <span>{time}</span>;
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("vp-theme");
    const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("vp-theme", theme);
  };

  return (
    <button
      onClick={toggle}
      style={{
        background: "none",
        border: "1px solid var(--color-border2)",
        color: "var(--color-text2)",
        cursor: "pointer",
        padding: "5px 10px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.08em",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-accent)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border2)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text2)";
      }}
    >
      <span>{isDark ? "◑" : "◐"}</span>
      <span>{isDark ? "LIGHT" : "DARK"}</span>
    </button>
  );
}

export const Header = () => {
  const pathname = usePathname() ?? "/";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "56px",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-text3)", letterSpacing: "0.06em" }}>
        VP<span style={{ color: "var(--color-accent)" }}>/</span>MECH-ENG
      </div>

      {/* Nav links */}
      <nav>
        <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: active ? "var(--color-text)" : "var(--color-text2)",
                    textDecoration: "none",
                    borderBottom: active ? "1.5px solid var(--color-accent)" : "1.5px solid transparent",
                    paddingBottom: "2px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right: clock + theme toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text3)", letterSpacing: "0.06em" }}>
          <Clock timeZone="America/New_York" />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
