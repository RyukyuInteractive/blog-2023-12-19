import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DateTime } from "./date-time"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

export function PostCard(props: Props) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          <DateTime text={props.date} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed">{props.excerpt}</p>
      </CardContent>
    </Card>
  )
}
