import Link from "next/link";

async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/blogs?published=true`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [] as any[];
  return res.json();
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 pt-24 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Our Blog</h1>
        <p className="text-gray-400 mt-3">Insights, tutorials, and the latest updates from our agency.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.length === 0 && (
          <p className="col-span-full text-center text-gray-400">No posts yet.</p>
        )}
        {blogs.map((blog: any) => (
          <div
            key={blog._id}
            className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden group hover:shadow-cyan-500/30 transition"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={blog.image || "/vercel.svg"}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400">
                {new Date(blog.createdAt).toLocaleDateString()} • By {blog.author || "Admin"}
              </p>
              <h2 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-cyan-300 transition">
                {blog.title}
              </h2>
              <Link href={`/blog/${blog.slug}`} className="inline-block text-cyan-400 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
