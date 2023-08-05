import clsx from "clsx";
import { FC, ReactNode } from "react";

export const TABLE_SIZES = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg",
};

export interface TableProps {
  headers: ReactNode[];
  data: ReactNode[][];
  size?: keyof typeof TABLE_SIZES;
  zebra?: boolean;
  hoverEffect?: boolean;
  activeRow?: number;
  countRows?: boolean;
  className?: string;
  containerClassName?: string;
  tablePrefix?: string;
}

const Table: FC<TableProps> = ({
  headers,
  data,
  size = "md",
  zebra = true,
  hoverEffect = false,
  activeRow,
  countRows = false,
  className,
  containerClassName,
  tablePrefix = "table",
}) => (
  <div className={clsx("overflow-x-auto w-full", containerClassName)}>
    <table
      className={clsx(
        "table",
        zebra && "table-zebra",
        TABLE_SIZES[size],
        className
      )}
    >
      <thead>
        <tr>
          {countRows && <th>#</th>}
          {headers.map((header, idx) => (
            <th key={`${tablePrefix}-header:${idx}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr
            className={clsx(
              hoverEffect && "hover",
              activeRow && activeRow === idx + 1 && "bg-base-200"
            )}
            key={`${tablePrefix}-row:${idx}`}
          >
            {countRows && <td>{idx + 1}</td>}
            {row.map((cell, jdx) => (
              <td key={`${tablePrefix}-cell:${idx}/${jdx}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
