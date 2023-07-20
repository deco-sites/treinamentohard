import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    link: LiveImage;
    alt: string;
    width: number;
    height: number;
  };

  subtitle?: string;
  title?: string;
  description?: string;
  bottonOne?: string;
  bottonTwo?: string;
}

export default function Body({
  image,
  subtitle = "WHAT THE TOKENIZATION?",
  title = "The Future of Cyber Security Is Here",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt mauris non odio facilisis, eget tempor ex accumsan.",
  bottonOne = "SEE MORE",
  bottonTwo = "DOWNLOAD RESOURCE",
}: Props) {
  return (
    <section class="bg-zinc-900 px-6 py-6 flex justify-between">
      <div class="text-white flex flex-col py-6">
        <p class="text-xs">
          {subtitle}
        </p>
        <h1 class="text-3xl">
          {title}
        </h1>
        <div class="card bg-zinc-800">
          <div class="px-6 w-[400px]">
            <span class="text-xs mr-4">
              {description}
            </span>
          </div>
          <div class="px-4 py-2">
            <button class="btn btn-warning text-sm text-black">
              {bottonOne}
            </button>
            <button class="btn btn-outline text-sm text-white">
              {bottonTwo}
            </button>
          </div>
        </div>
      </div>
      <div class="">
        {image && (
          <img
            src={image.link}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </section>
  );
} 