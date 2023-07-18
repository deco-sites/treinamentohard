import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface CardProps {
  icon: AvailableIcons;
  title: string;
  description: string;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div class="card w-full h-full bg-zinc-800 shadow-xl">
      <figure class="px-10 pt-10">
        <Icon size={20} id={icon} strokeWidth={3} />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
