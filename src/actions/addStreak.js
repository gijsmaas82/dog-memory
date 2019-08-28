export const ADD_STREAK = "ADD_STREAK";
export function addStreak(streak) {
  return {
    type: ADD_STREAK,
    payload: streak
  };
}