export function formatToMonthYear(dateString: string): string {
  const date = new Date(dateString); // Convert the string to a Date object
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  }; // Format options
  return date.toLocaleDateString("en-US", options); // Format the date
}

export function formatToYear(dateString: string): string {
  const date = new Date(dateString);
  return date.getFullYear().toString(); // Extract only the year
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

