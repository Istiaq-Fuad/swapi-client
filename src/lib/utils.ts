import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatValue(value: string) {
  return value === "unknown" || value === "n/a" ? "Unknown" : value;
}
