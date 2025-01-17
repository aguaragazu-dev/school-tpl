export function convertDateToIso(dateStr: string): string {
  // Ensure the input is in the correct format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    throw new Error('Invalid date format. Expected "YYYY-MM-DD".');
  }
 
  // Append the time and timezone information to the date string
  const prismaDateTime = `${dateStr}T00:00:00.000Z`;
  return prismaDateTime;
}

export function convertIsoToDateString(
  prismaDate: Date | string | undefined
): string {
  if (prismaDate === undefined) {
    throw new Error("Invalid input: date is undefined.");
  }
 
  // If the input is a string, convert it to a Date object
  let dateObject: Date;
  if (typeof prismaDate === "string") {
    dateObject = new Date(prismaDate);
    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid input: date string is not valid.");
    }
  } else if (prismaDate instanceof Date) {
    dateObject = prismaDate;
  } else {
    throw new Error(
      "Invalid input: date must be a Date object or an ISO string."
    );
  }
 
  // Convert the Date object to ISO string format and extract the date part
  const isoString = dateObject.toISOString();
  const dateString = isoString.split("T")[0];
  return dateString;
}