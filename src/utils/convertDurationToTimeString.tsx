export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); // 3600 = 60 * 60
  const minutes =  Math.floor((duration % 3600) / 60); //math.floor arredonda o número
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0')) //acrescenta um zero quando o número for um só
  .join(':')

  return timeString;
}