import { Skeleton } from "./ui/skeleton";

export default function HomeWorldSkeleton() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-1">
            <Skeleton className="h-4 w-20 bg-gray-200" />
            <Skeleton className="h-4 w-32 bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
