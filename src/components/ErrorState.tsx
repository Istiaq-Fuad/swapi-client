export default function ErrorState() {
  return (
    <div className="h-[65vh] flex flex-col justify-center items-center space-y-4">
      <div className="text-6xl font-bold animate-bounce">⚠️</div>
      <p className="text-2xl font-medium text-gray-800">Something went wrong</p>
      <p className="text-sm text-gray-500 text-center">
        We couldn't load the data. Please try again later.
      </p>
      <button
        className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        onClick={() => window.location.reload()} // Or your retry logic
      >
        Retry
      </button>
    </div>
  );
}
