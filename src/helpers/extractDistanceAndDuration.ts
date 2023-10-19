import type { routeDistanceAndDuration } from "../models";

const getDistanceAndDuration = (response: any): routeDistanceAndDuration => {
  let routeDistance = 0;
  let expectedDuration = 0;
  let routeInfo = [];

  for (const route of response) {
    const distance = route.distance.value;
    routeDistance += distance;

    const duration = route.duration.value;
    expectedDuration += duration;

    routeInfo.push({
      distance: route.distance.text,
      duration: route.duration.text,
      startAddress: route.start_address,
      endAddress: route.end_address,
    });
  }

  return {
    routeDistance: routeDistance / 1000,
    expectedDuration: expectedDuration,
    routeInfo: routeInfo,
  };
};
export default getDistanceAndDuration;
