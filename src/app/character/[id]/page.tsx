import PeopleDetails from "@/components/PeopleDetails";

export default async function CharacterDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <PeopleDetails id={id} />
    </div>
  );
}
