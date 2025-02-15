export default function NoResults() {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center space-y-4">
      <div className="text-6xl font-bold animate-pulse">🕳️</div>
      <p className="text-2xl font-medium text-gray-800">No results found</p>
      <p className="text-sm text-gray-500">
        Try adjusting your search or filters.
      </p>
    </div>
  );
}
