import { getPosts } from "@/utils/utils";

export default function Blog() {
  const posts = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 40px 80px" }}>
      {/* Section header */}
      <div className="vp-section-header">
        <span className="vp-section-num">03 —</span>
        <h2 className="vp-section-title">Blog</h2>
        <div className="vp-section-line" />
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--color-text3)",
          letterSpacing: "0.06em",
          marginBottom: "36px",
        }}
      >
        I build things. I break things. I write about both.
      </p>

      {/* Blog grid */}
      <div className="vp-blog-grid">
        {posts.map((post) => {
          const date = new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).toUpperCase();

          return (
            <div
              key={post.slug}
              style={{
                background: "var(--color-surface)",
                padding: "32px",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-surface2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-surface)")}
            >
              {/* Tag */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ display: "inline-block", width: "12px", height: "1px", background: "var(--color-accent)" }} />
                {post.metadata.tag ?? "Post"}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  letterSpacing: "0.02em",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                {post.metadata.title}
              </h3>

              {/* Summary */}
              <p style={{ color: "var(--color-text2)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
                {post.metadata.summary}
              </p>

              {/* Date */}
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text3)", letterSpacing: "0.06em" }}>
                {date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
