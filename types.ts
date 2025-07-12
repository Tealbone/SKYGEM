
export interface TravelPreferences {
  destination: string;
  days: number;
  interests: string;
  budget: string;
}

export interface Activity {
  time: string;
  description: string;
  estimatedCost?: string;
}

export interface DailyItinerary {
  day: number;
  title?: string;
  activities: Activity[];
}

export type Itinerary = DailyItinerary[];

// To be used for props of components that can accept any valid React child
export type ReactChildren = React.ReactNode;
