import React, { useState, useCallback } from "react";
import { TravelPreferences, Itinerary } from "./types";
import { generateItinerary } from "./services/geminiService";
import { DEFAULT_ERROR_MESSAGE } from "./constants";

import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import Button from "./components/Button";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import ItineraryDisplay from "./components/ItineraryDisplay";

const App: React.FC = () => {
  const [preferences, setPreferences] = useState<TravelPreferences>({
    destination: "",
    days: 3,
    interests: "",
    budget: "Mid-range",
  });
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      setPreferences((prev) => ({
        ...prev,
        [name]: type === "number" ? parseInt(value, 10) || 0 : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
      setItinerary(null);

      if (preferences.days <= 0) {
        setError("Number of days must be greater than 0.");
        setIsLoading(false);
        return;
      }

      try {
        const generatedItinerary = await generateItinerary(preferences);
        setItinerary(generatedItinerary);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(DEFAULT_ERROR_MESSAGE);
        }
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [preferences]
  );

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              ¡Planifica tu próxima aventura!
            </h2>
            <form onSubmit={handleSubmit}>
              <InputField
                id="destination"
                label="Destino"
                type="text"
                value={preferences.destination}
                onChange={handleInputChange}
                placeholder="e.g., Paris, Francia, Italia"
                required
              />
              <InputField
                id="days"
                label="Número de Días"
                type="number"
                value={preferences.days}
                onChange={handleInputChange}
                required
                min={1}
              />
              <TextAreaField
                id="interests"
                label="Intereses y Actividades"
                value={preferences.interests}
                onChange={handleInputChange}
                placeholder="e.g., Museums, hiking, local cuisine, historical sites"
                required
                rows={4}
              />
              <InputField
                id="budget"
                label="Presupuesto"
                type="text"
                value={preferences.budget}
                onChange={handleInputChange}
                placeholder="e.g., Budget-friendly, Mid-range, Luxury, $100/day"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4"
              >
                {isLoading ? "Generando..." : "Generar Itinerario"}
              </Button>
            </form>
          </div>

          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}

          <div className="mt-8">
            <ItineraryDisplay itinerary={itinerary || []} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
