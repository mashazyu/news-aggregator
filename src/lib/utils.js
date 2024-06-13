import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const filterRemovedArticles = (array) =>
  array.filter(({ title }) => !title.includes("Removed"));
