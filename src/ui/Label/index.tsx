import { FC, HTMLProps } from "react";

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  text: string;
}

const Label: FC<LabelProps> = ({ text, ...props }) => (
  <label className="label capitalize" {...props}>
    <span className="label-text">{text}</span>
  </label>
);

export default Label;
