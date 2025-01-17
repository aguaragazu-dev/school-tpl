export function getNormalDate(inputDate: Date|string): string {
  let workingDate =inputDate
   if(typeof workingDate ==="string" ){
       workingDate =new Date(workingDate);
   }
   const options: Intl.DateTimeFormatOptions = {
     weekday: "short",
     month: "short",
     day: "numeric",
     year: "numeric",
   };
   const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(
     workingDate
   );
  
   // Add ordinal suffix to the day
  //  const day = workingDate.getDate();
  //  const suffix =
  //    day === 1 || day === 21 || day === 31
  //      ? "st"
  //      : day === 2 || day === 22
  //      ? "nd"
  //      : day === 3 || day === 23
  //      ? "rd"
  //      : "th";
  const suffix = '';
   return formattedDate.replace(/\b(\d{1,2})\b/, `$1${suffix}`);
 }