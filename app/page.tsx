import { PostCard } from "@/app/_components/post-card"
import { Config } from "@/config"
import { getPosts } from "@/lib/get-posts"
import { Metadata } from "next"
import Link from "next/link"

export default async function HomePage() {
  const allPosts = await getPosts()

  return (
    <main className="max-w-screen-xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allPosts.map((post) => (
          <article key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <PostCard
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: Config.blogTitle,
}
