import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# teslavia

Personal blog and notes by teslavia.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [@teslavia](https://github.com/teslavia)

---

*This is the markdown-only version of teslavia.github.io. Visit [teslavia.github.io](https://teslavia.github.io) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
