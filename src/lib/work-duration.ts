/** Inclusive calendar months, using the UTC build month for current roles. */
export function workDuration(start: string, end?: string, buildDate = new Date()): string {
  const monthIndex = (date: string) => {
    const [year, month] = date.split("-").map(Number);
    return year * 12 + month - 1;
  };
  const endMonth = end
    ? monthIndex(end)
    : buildDate.getUTCFullYear() * 12 + buildDate.getUTCMonth();
  const months = endMonth - monthIndex(start) + 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return [years ? `${years}y` : "", remainingMonths ? `${remainingMonths}m` : ""]
    .filter(Boolean)
    .join(" ");
}
