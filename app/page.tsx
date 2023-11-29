import { PostCard } from "@/app/_components/post-card"
import { Config } from "@/config"
import { getAllPosts } from "@/lib/get-posts"
import { Metadata } from "next"

const HomePage = async () => {
  const allPosts = await getAllPosts()

  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: Config.blogTitle,
}

export default HomePage
