import { Person } from "@/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="w-52 shadow-lg">
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
        <p>
          <strong>Mass:</strong> {person.mass} kg
        </p>
        <Button variant="outline" className="mt-3 w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
