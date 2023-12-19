import { join } from "path"
import { readdir } from "fs/promises"

export const getPostSlugs = async () => {
  const postsDirectory = join(process.cwd(), "posts")

  const filePaths = await readdir(postsDirectory, "utf-8")

  return filePaths.map((path) => {
    return path.replace(".md", "")
  })
}
