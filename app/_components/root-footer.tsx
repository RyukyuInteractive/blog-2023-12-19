import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RootFooter() {
  return (
    <footer className="max-w-screen-xl mx-auto p-8">
      <div className="space-y-4">
        <h3 className="font-bold">{"Statically Generated with Next.js."}</h3>
        <div className="flex space-x-2">
          <Link href="https://nextjs.org/docs">
            <Button>{"Read Documentation"}</Button>
          </Link>
          <Link
            href={"https://github.com/RyukyuInteractive/next-template-blog"}
          >
            <Button variant={"ghost"}>{"View on GitHub"}</Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
