import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isCreatorAvailable = (creator) => {
  return creator?.length > 0 && creator[0]?.length > 0;
};
