import { DateTime } from "@/app/_components/date-time"
import { UserProfile } from "@/app/_components/user-profile"
import { Config } from "@/config"
import { getPost } from "@/lib/get-post"
import { getAllPosts } from "@/lib/get-posts"
import { Metadata } from "next"
import Markdown from "react-markdown"

type Props = {
  params: {
    slug: string
  }
}

const PostPage = async (props: Props) => {
  const post = await getPost(props.params.slug)

  return (
    <main className="max-w-screen-xl mx-auto">
      <article className="max-w-2xl mx-auto px-4 space-y-4">
        <DateTime text={post.date} />
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <div className="flex flex-col gap-y-2">
          <UserProfile name={post.authorName} picture={post.authorAvatarURL} />
        </div>
        <Markdown
          className={"leading-relaxed"}
          components={{
            h1(props) {
              const { node, ...rest } = props
              return (
                <h2 className="text-3xl mt-12 mb-4 leading-snug" {...rest} />
              )
            },
            h2(props) {
              const { node, ...rest } = props
              return (
                <h3 className="text-2xl mt-8 mb-4 leading-snug" {...rest} />
              )
            },
            p(props) {
              const { node, ...rest } = props
              return <p className="my-6" {...rest} />
            },
            ul(props) {
              const { node, ...rest } = props
              return <ul className="my-6" {...rest} />
            },
            ol(props) {
              const { node, ...rest } = props
              return <ol className="my-6" {...rest} />
            },
            blockquote(props) {
              const { node, ...rest } = props
              return <blockquote className="my-6" {...rest} />
            },
          }}
        >
          {post.body}
        </Markdown>
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
  const posts = await getAllPosts()
  return posts.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

export default PostPage
