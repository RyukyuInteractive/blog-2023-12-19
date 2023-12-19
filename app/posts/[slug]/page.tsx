import { DateTime } from "@/app/_components/date-time"
import { UserProfile } from "@/app/_components/user-profile"
import { Config } from "@/config"
import { getPost } from "@/lib/get-post"
import { getPosts } from "@/lib/get-posts"
import { Metadata } from "next"
import Markdown from "react-markdown"
import markdownToHtml from "zenn-markdown-html"

type Props = {
  params: {
    slug: string
  }
}

const PostPage = async (props: Props) => {
  const post = await getPost(props.params.slug)

  const html = markdownToHtml(post.body)

  return (
    <main className="max-w-screen-xl mx-auto">
      <article className="max-w-2xl mx-auto px-4 space-y-4">
        <DateTime text={post.date} />
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <div className="flex flex-col gap-y-2">
          <UserProfile name={post.authorName} picture={post.authorAvatarURL} />
        </div>
        <div
          className="znc font-medium"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  )
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const post = await getPost(props.params.slug)
  return {
    title: `${post.title} - ${Config.blogTitle}`,
  }
}

export const generateStaticParams = async () => {
  const posts = await getPosts()
  return posts.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

export default PostPage
