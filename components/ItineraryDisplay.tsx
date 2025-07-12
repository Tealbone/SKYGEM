import React from "react";
import { Itinerary, DailyItinerary, Activity } from "../types";

interface ItineraryDisplayProps {
  itinerary: Itinerary;
}

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => (
  <li className="mb-3 pb-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0 last:mb-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-semibold text-indigo-700 dark:text-indigo-400">
          {activity.time}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          {activity.description}
        </p>
      </div>
      {activity.estimatedCost && (
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full whitespace-nowrap ml-2">
          {activity.estimatedCost}
        </span>
      )}
    </div>
  </li>
);

const DailyItineraryCard: React.FC<{ dailyPlan: DailyItinerary }> = ({
  dailyPlan,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 sm:p-5">
      <h3 className="text-xl sm:text-2xl font-bold text-white">
        Day {dailyPlan.day}
        {dailyPlan.title && `: ${dailyPlan.title}`}
      </h3>
    </div>
    <ul className="p-4 sm:p-6 space-y-3">
      {dailyPlan.activities.length > 0 ? (
        dailyPlan.activities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          No activities planned for this day.
        </p>
      )}
    </ul>
  </div>
);

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="text-center py-10 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-indigo-400 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">
          Tu itinerario aparecerá aquí
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Complete sus preferencias de viaje arriba y haga clic en "Generar
          itinerario" para ver su plan personalizado.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-8 sm:mb-10">
        Tu itinerario de viaje personalizado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {itinerary.map((dailyPlan) => (
          <DailyItineraryCard key={dailyPlan.day} dailyPlan={dailyPlan} />
        ))}
      </div>
    </div>
  );
};

export default ItineraryDisplay;
