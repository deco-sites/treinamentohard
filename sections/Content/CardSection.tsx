import Card from "$store/components/ui/Card.tsx"
import { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  cards: {
    icon: AvailableIcons;
    title: string;
    description: string;
  }[];
}

export default function CardSection({ title, cards }: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full px-4 md:px-0 bg-zinc-950">
      <div class="flex flex-col items-center justify-center w-full md:max-w-5xl gap-4 text-white py-28">
        <h1 class="text-4xl tracking-wide leading-tight text-center">{title}</h1>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 w-full mt-4 px-4 lg:px-0">
          {cards.map((card) => <Card {...card} />)}
        </div>
      </div>
    </section>
  )
}
