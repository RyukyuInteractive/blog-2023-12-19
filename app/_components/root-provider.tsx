"use client"

import { ThemeProvider } from "next-themes"

type Props = {
  children: React.ReactNode
}

export const RootProvider = (props: Props) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
      {props.children}
    </ThemeProvider>
  )
}
