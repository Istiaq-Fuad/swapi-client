import { Skeleton } from "./ui/skeleton";

export default function FilmSkeleton() {
  return (
    <div className="p-4 space-y-3">
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-2/3 bg-gray-300" />
      </div>
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-2/3 bg-gray-300" />
      </div>
    </div>
  );
}
