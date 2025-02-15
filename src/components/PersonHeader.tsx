import { formatValue } from "@/lib/utils";
import { Person as PersonType } from "@/utils/types";
import { Person } from "@phosphor-icons/react";

export default function PersonHeader({ person }: { person: PersonType }) {
  return (
    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <Person className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {person.name}
        </h2>
        <div className="grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-4">
          <div className="space-y-1">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Height
            </p>
            <p className="font-medium text-lg text-white">
              {formatValue(person.height)} cm
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Mass
            </p>
            <p className="font-medium text-lg text-white">
              {formatValue(person.mass)} kg
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Birth Year
            </p>
            <p className="font-medium text-lg text-white">
              {formatValue(person.birth_year)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Gender
            </p>
            <p className="font-medium text-lg text-white">
              {formatValue(person.gender)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
