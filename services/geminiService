
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { TravelPreferences, Itinerary, Activity } from '../types';
import { GEMINI_MODEL_NAME } from '../constants';

// La clave API de Gemini se obtiene EXCLUSIVAMENTE de la variable de entorno process.env.API_KEY.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("La variable de entorno API_KEY no fue encontrada. Por favor, configúrala.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! }); // Se usa la aserción no nula (!) asumiendo que API_KEY estará configurada en el entorno de producción.

const constructPrompt = (preferences: TravelPreferences): string => {
  return `
Eres un asistente experto en planificación de viajes. Tu tarea es generar un itinerario de viaje detallado, día por día.
Por favor, basa el itinerario en las siguientes preferencias del usuario:
Destino: ${preferences.destination}
Número de Días: ${preferences.days}
Intereses: ${preferences.interests}
Presupuesto: ${preferences.budget}

Genera un itinerario para ${preferences.days} días.

IMPORTANTE: Responde ÚNICAMENTE con un objeto JSON válido. No incluyas ningún texto, saludos o explicaciones antes o después del objeto JSON.
El objeto JSON debe ser un array de objetos, donde cada objeto representa un día. Cada objeto de día debe tener la siguiente estructura:
{
  "day": <number>, // ej., 1
  "title": "<string, título descriptivo opcional para el día, ej., 'Llegada y Exploración Local'>",
  "activities": [
    {
      "time": "<string, ej., '9:00 AM - 11:00 AM', 'Mañana', 'Día Completo'>",
      "description": "<string, descripción detallada de la actividad>",
      "estimatedCost": "<string, opcional, ej., '$20 USD', 'Gratis', 'Incluido en el pase'>"
    }
  ]
}

Ejemplo para un día:
{
  "day": 1,
  "title": "Llegada y Destacados de la Ciudad",
  "activities": [
    {
      "time": "Tarde",
      "description": "Llegar a ${preferences.destination}, registrarse en el alojamiento.",
      "estimatedCost": "Varía"
    },
    {
      "time": "Noche",
      "description": "Cena de bienvenida en un restaurante local probando especialidades regionales.",
      "estimatedCost": "${preferences.budget === 'Lujo' ? '$50-100' : (preferences.budget === 'Medio' ? '$25-50' : '$10-25')}"
    }
  ]
}

Asegúrate de que el JSON generado esté bien formado y se adhiera estrictamente a esta estructura.
  `;
};

const parseGeminiResponse = (responseText: string): Itinerary | null => {
  let jsonStr = responseText.trim();
  const fenceRegex = /^```(?:json)?\s*\n?(.*?)\n?\s*```$/s; // Regex para eliminar el markdown ```json ... ``` si existe
  const match = jsonStr.match(fenceRegex);
  if (match && match[1]) {
    jsonStr = match[1].trim();
  }

  try {
    const parsedData = JSON.parse(jsonStr);
    // Validación básica de la estructura parseada
    if (Array.isArray(parsedData) && parsedData.every(day => 
      typeof day.day === 'number' &&
      Array.isArray(day.activities) &&
      day.activities.every((activity: Activity) => 
        typeof activity.time === 'string' && 
        typeof activity.description === 'string'
      )
    )) {
      return parsedData as Itinerary;
    }
    console.error("El JSON parseado no coincide con la estructura de Itinerary esperada:", parsedData);
    return null;
  } catch (error) {
    console.error("Falló al parsear la respuesta JSON:", error);
    console.error("Texto de respuesta sin procesar:", responseText);
    return null;
  }
};


export const generateItinerary = async (preferences: TravelPreferences): Promise<Itinerary> => {
  if (!API_KEY) {
    // Este error se mostrará al usuario si la API_KEY no está configurada en el entorno.
    throw new Error("La clave API de Gemini no está configurada. Por favor, establece la variable de entorno API_KEY.");
  }
  const prompt = constructPrompt(preferences);

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7, // Ajusta para creatividad vs. predictibilidad
      },
    });
    
    const itinerary = parseGeminiResponse(response.text || "{}");
    if (!itinerary) {
      throw new Error("Falló al parsear el itinerario de la respuesta de Gemini o la respuesta estaba malformada.");
    }
    return itinerary;

  } catch (error) {
    console.error("Error generando el itinerario con la API de Gemini:", error);
    if (error instanceof Error) {
        // Comprobar detalles específicos del error de la API de Gemini si están disponibles
        const geminiError = error as any; // Aserción de tipo para acceder a campos potenciales específicos
        if (geminiError.message && geminiError.message.includes("API key not valid")) {
             throw new Error("Clave API de Gemini inválida. Por favor, revisa tu variable de entorno API_KEY.");
        }
        if (geminiError.message && geminiError.message.includes("quota")) {
            throw new Error("Has excedido tu cuota de la API de Gemini. Por favor, revisa tu uso y límites.");
        }
    }
    // Mensaje de error genérico que se mostrará al usuario.
    throw new Error(`Falló al generar el itinerario. ${error instanceof Error ? error.message : String(error)}`);
  }
};
