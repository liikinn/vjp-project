/**
 * Utility function for sorting dates.
 * @param date1
 * @param date2
 */
export function compareDates(date1: Date, date2: Date): number {
  if (date1 > date2) {
    return 1;
  }

  if (date1 < date2) {
    return -1;
  }

  return 0;
}
