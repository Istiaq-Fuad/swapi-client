"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function CardButton({ url }: { url: string }) {
  return (
    <Button asChild variant="outline" className="mt-3 w-full bg-stone-800 text-gray-50">
      <Link href={`/character/${url.split("/").slice(-2)[0]}`}>
        View Details
      </Link>
    </Button>
  );
}
