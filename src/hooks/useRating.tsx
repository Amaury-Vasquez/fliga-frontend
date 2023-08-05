import { useState } from "react";

export const useRating = (initialRate: number) => {
  const [rating, setRating] = useState(initialRate);
  const onChange = (value: number) => setRating(value);
  return { rating, onChange };
};
