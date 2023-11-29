import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { DateTime } from "./date-time"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

export const PostCard = (props: Props) => {
  return (
    <article>
      <Card className="h-full">
        <CardHeader className="pb-2">
          <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
            <CardTitle>{props.title}</CardTitle>
          </Link>
          <CardDescription>
            <DateTime text={props.date} />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="leading-relaxed">{props.excerpt}</p>
        </CardContent>
      </Card>
    </article>
  )
}
