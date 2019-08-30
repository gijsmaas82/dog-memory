export const ADD_POINTS = "ADD_POINTS";
export function addPoints(points) {
  return {
    type: ADD_POINTS,
    payload: points
  };
}