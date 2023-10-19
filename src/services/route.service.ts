import { CustomError } from "../models";
import getDistanceAndDuration from "../helpers/extractDistanceAndDuration";
import type { OriginAndDestin } from "../models";

const urlType = (origin: string, destination: string, intermediates: string[] | []) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new CustomError("API key não encontrada", 401);

  if (intermediates.length === 0) {
    return `https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&origin=${origin}&key=${apiKey}`;
  } else {
    const waypoints = intermediates.join("|");
    return `https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&origin=${origin}&waypoints=${waypoints}&key=${apiKey}`;
  }
};

export const getDistance = async (locations: OriginAndDestin) => {
  const { origin, destination, intermediates } = locations;
  const url = urlType(origin, destination, intermediates);

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "OK") {
    const routeData = getDistanceAndDuration(data["routes"][0]["legs"]);
    return routeData;
  } else {
    throw new CustomError("Sem resultados", 404);
  }
};
