import clsx from "clsx";
import { FC, ReactNode } from "react";

export const ACCORDION_TYPES = {
  arrow: "collapse-arrow",
  plus: "collapse-plus",
};

export const TITLE_SIZES = {
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export const TITLE_WEIGHTS = {
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font-normal",
};

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  keyPrefix: string;
  titleSize?: keyof typeof TITLE_SIZES;
  titleWeight?: keyof typeof TITLE_WEIGHTS;
  type?: keyof typeof ACCORDION_TYPES;
  bg?: string;
  join?: boolean;
  containerClassName?: string;
  className?: string;
}

const Accordion: FC<AccordionProps> = ({
  items,
  keyPrefix,
  titleSize = "lg",
  titleWeight = "semibold",
  type,
  bg = "bg-base-200",
  join,
  containerClassName,
  className,
}) => (
  <div
    className={clsx(
      join ? "join join-vertical w-full" : "flex flex-col gap-2",
      containerClassName
    )}
  >
    {items.map((item, idx) => (
      <div
        className={clsx(
          "collapse",
          type && ACCORDION_TYPES[type],
          bg,
          join && "join-item border border-base-200",
          className
        )}
        key={`${keyPrefix}:${idx}`}
      >
        <input type="radio" name={keyPrefix} />
        <span
          className={clsx(
            "collapse-title",
            TITLE_SIZES[titleSize],
            TITLE_WEIGHTS[titleWeight]
          )}
        >
          {item.title}
        </span>
        <div className="collapse-content">{item.content}</div>
      </div>
    ))}
  </div>
);

export default Accordion;
