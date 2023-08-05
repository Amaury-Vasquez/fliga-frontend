import { FC } from "react";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ text }) => (
  <span className="text-error">{`* ${text}`}</span>
);

export default ErrorMessage;
