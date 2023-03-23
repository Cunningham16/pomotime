export function secondsToTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const padddedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${paddedMinutes}:${padddedSeconds}`;
}
