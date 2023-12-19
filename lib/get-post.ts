import { join } from "path"
import { Config } from "@/config"
import { MarkdownPost } from "@/lib/types/markdown-post"
import { readFile } from "fs/promises"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "posts")

export const getPost = async (slug: string): Promise<MarkdownPost> => {
  const fullPath = join(postsDirectory, `${slug}.md`)

  const fileText = await readFile(fullPath, "utf-8")

  const { data, content } = matter(fileText)

  return {
    slug: slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    authorName: data.author.name,
    authorAvatarURL:
      process.env.NODE_ENV === "production"
        ? `${Config.baseURL}/${data.author.picture}`
        : data.author.picture,
    coverImageURL: data.coverImage,
    ogImageURL: data.ogImage.url,
    body: content,
  }
}
