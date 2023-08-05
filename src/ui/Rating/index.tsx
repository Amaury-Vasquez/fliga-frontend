import clsx from "clsx";
import { FC } from "react";

export const RATING_SIZES = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: "rating-md",
  lg: "rating-lg",
};

export const MASKS = {
  heart: "mask-heart",
  star: "mask-star-2",
};

export interface RatingProps {
  name: string;
  size?: keyof typeof RATING_SIZES;
  onChange: (value: number) => void;
  className?: string;
  containerClassName?: string;
  value: number;
  mask?: "heart" | "star";
}

const Rating: FC<RatingProps> = ({
  size = "md",
  name,
  onChange,
  mask = "star",
  value,
  className,
  containerClassName,
}) => (
  <button
    className={clsx(
      "rating rating-half",
      RATING_SIZES[size],
      containerClassName
    )}
  >
    <input
      type="radio"
      name={name}
      className="rating-hidden"
      checked={value === 0}
      onChange={() => onChange(0)}
    />
    {Array.from({ length: 10 }, (_, i) => i).map((i) => (
      <input
        className={clsx(
          "mask",
          MASKS[mask],
          i % 2 === 0 ? "mask-half-1" : "mask-half-2",
          className
        )}
        type="radio"
        name={name}
        key={`rating-${name}-${i}`}
        checked={value === i + 1}
        onChange={() => onChange(i + 1)}
      />
    ))}
  </button>
);

export default Rating;
