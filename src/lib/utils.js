import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isCreatorAvailable = (creator) => {
  return creator?.length > 0 && creator[0]?.length > 0;
};

export const getCreator = (creator) => {
  return isCreatorAvailable(creator) ? creator[0] : "";
};

export const timeAgo = (dateString) => {
  if (!dateString || isNaN(Date.parse(dateString))) return "";

  const eventDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now - eventDate;
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} days ago `;
  if (hours > 0) return `${hours} hours ago `;

  return `${diffInMs / (1000 * 60)} minutes ago `;
};

export const limitChars = (text, limit = 150) => {
  if (!text) return "";

  return text.length > limit ? text.substring(0, limit) + "..." : text;
};
