import type { Metadata } from "next";
import "@/resources/custom.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { baseURL, home } from "@/resources";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  metadataBase: new URL(baseURL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var saved = localStorage.getItem('vp-theme');
                  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* Tick rail decoration */}
        <div className="vp-ticks">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <div key={i} className={i % 4 === 0 ? "vp-tick-major" : "vp-tick"} />
          ))}
        </div>

        <Header />

        <main style={{ minHeight: "calc(100vh - 56px)", paddingTop: "56px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
