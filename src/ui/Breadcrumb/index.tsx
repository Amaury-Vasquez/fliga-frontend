import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";

export interface BreadcrumbItem {
  item: ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  itemClassName?: string;
  className?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  className,
  itemClassName,
}) => (
  <nav className={clsx("breadcrumbs", className)}>
    <ul>
      {items.map(({ item, href }, idx) => (
        <li
          className={clsx("capitalize text-sm", itemClassName)}
          key={`breadcrumbitem:${href}${idx}`}
        >
          {href ? <Link href={href}> {item} </Link> : item}
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
