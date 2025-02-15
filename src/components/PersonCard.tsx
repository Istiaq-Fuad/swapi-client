import { Person } from "@/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CardButton from "./CardButton";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>{person.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>
          <strong>Birth Year:</strong> {person.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {person.gender}
        </p>
        <p>
          <strong>Height:</strong> {person.height} cm
        </p>
        <CardButton url={person.url} />
      </CardContent>
    </Card>
  );
}
