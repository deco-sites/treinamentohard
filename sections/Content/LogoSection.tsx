import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";

import { useId } from "preact/hooks";

export interface Props {
  images: {
    link: LiveImage;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function LogoSection({ images }: Props) {
  const id = useId();

  return (
    <section class="flex items-center justify-center w-full h-full py-4 bg-zinc-950">
      <div
        id={id}
        class="w-full grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {images?.map((image, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[150px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <img
                src={image.link}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </Slider.Item>
          ))}
        </Slider>

        <SliderJS rootId={id} infinite interval={5e3} scroll="smooth" />
      </div>
    </section>
  );
}
