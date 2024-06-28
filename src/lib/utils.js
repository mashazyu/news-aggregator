import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isCreatorAvailable = (creator) => {
  return creator?.length > 0 && creator[0]?.length > 0;
};

export const getCreator = (creator) => {
  return isCreatorAvailable(creator) ? `by ${creator[0]}` : "";
};

export const hoursAgo = (dateString) => {
  if (!dateString || isNaN(Date.parse(dateString))) return "";

  const eventDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now - eventDate;
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));

  return hours > 0
    ? `${hours} hours ago `
    : `${diffInMs / (1000 * 60)} minutes ago `;
};
