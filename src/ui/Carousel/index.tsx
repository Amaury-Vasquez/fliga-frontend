import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

export interface CarouselProps {
  images: { alt: string; src: string }[];
  prefixKey: string;
  collapsedImage?: boolean;
  vertical?: boolean;
  indicator?: boolean;
  withButtons?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const Carousel: FC<CarouselProps> = ({
  // It is prefferred that the images have the same dimentions
  images,
  prefixKey,
  collapsedImage = false,
  vertical = false,
  withButtons = false,
  indicator = false,
  width = 300,
  height = 400,
  className,
}) => {
  const Slider = (
    // pass a custom width or height to the carousel to change the size of collapsed images
    // if vertical = true then you pass custom height, otherwise you pass custom width
    <div
      className={clsx(
        "carousel rounded-box",
        vertical && "carousel-vertical",
        className
      )}
    >
      {images.map(({ src, alt }, idx) => (
        <figure
          className={clsx(
            "carousel-item",
            withButtons && "relative",
            collapsedImage && (vertical ? "h-full" : "w-full")
          )}
          key={`${prefixKey}:${idx}`}
          id={`${prefixKey}:${idx}`}
        >
          <Image
            className={clsx(collapsedImage && (vertical ? "h-full" : "w-full"))}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
          {withButtons && (
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#${prefixKey}:${
                  idx - 1 < 0 ? images.length - 1 : idx - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#${prefixKey}:${
                  idx + 1 === images.length ? 0 : idx + 1
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          )}
        </figure>
      ))}
    </div>
  );
  if (indicator) {
    return (
      <div className={clsx("flex gap-2 w-fit", !vertical && "flex-col")}>
        {Slider}
        <div
          className={clsx(
            "w-full justify-center items-center flex gap-4",
            vertical && "flex-col"
          )}
        >
          {images.map((_, idx) => (
            <a
              href={`#${prefixKey}:${idx}`}
              key={`indicator:${prefixKey}:${idx}`}
              className="btn btn-circle btn-sm"
            >
              {idx + 1}
            </a>
          ))}
        </div>
      </div>
    );
  }
  return Slider;
};

export default Carousel;
