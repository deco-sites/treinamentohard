import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    link: LiveImage | string;
    alt: string;
    width: number;
    height: number;
  },
  subtitle?: string;
  title?: string;
  buttonTitle?: string;
  backgroundColor?: "bg-zinc-950" | "bg-red-500" | "bg-violet-800";
}

export default function SubHeader({ 
  title = "Building digital products, brands, and experience.",
  backgroundColor = "bg-zinc-950",
  buttonTitle = "Latest Shorts",
  image,
  subtitle = "Hi, I'm Kowsor" 
}: Props) {
  const { 
    alt,
    height,
    link,
    width 
  } = image;

  return (
    <section class={`flex items-center justify-center w-full h-full px-4 md:px-0 ${backgroundColor}`}>
      <div class="flex flex-col items-center justify-center w-full md:max-w-2xl gap-4 text-white py-28">
        <div class="flex flex-col items-center justify-center gap-2">
          {image && (
            <img
              src={link}
              alt={alt}
              width={width}
              height={height}
              class="rounded-full"
            />
          )}

          <span class="text-sm">{subtitle}</span>
        </div>

        <h1 class="text-4xl tracking-wide leading-tight text-center">{title}</h1>

        {buttonTitle && (
          <button class="flex items-center justify-center py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm border border-zinc-600 transition-colors duration-300">
            {buttonTitle}
          </button>
        )}
      </div>
    </section>
  )
}
