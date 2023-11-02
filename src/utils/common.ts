export function formateSeconds(seconds: number | undefined | null): string {
  if (seconds === undefined || seconds === null) return "00:00"

  return `${Math.round(seconds / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`
}
