import { getPost } from "@/lib/get-post"
import { getPostSlugs } from "@/lib/get-post-slugs"

export const getPosts = async () => {
  const slugs = await getPostSlugs()

  const promises = slugs.map((slug) => {
    return getPost(slug)
  })

  const posts = await Promise.all(promises)

  return posts.sort((post1, post2) => {
    return post1.date > post2.date ? -1 : 1
  })
}
