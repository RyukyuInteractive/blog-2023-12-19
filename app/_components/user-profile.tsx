import { Avatar, AvatarImage } from "@/components/ui/avatar"

type Props = {
  name: string
  picture: string
}

export function UserProfile(props: Props) {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar className="w-8 h-8">
        <AvatarImage alt={props.name} src={props.picture} />
      </Avatar>
      <span className="font-bold">{props.name}</span>
    </div>
  )
}
