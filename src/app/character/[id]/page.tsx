import PeopleDetails from "@/components/PersonDetails";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: `Star Wars: ${id} - Character Details`,
    description: `Learn more about ${id}, including it's homeworld, appearance, and film history in the Star Wars universe.`,
  };
};

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
