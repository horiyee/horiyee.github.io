import { format } from "date-fns";

export const getFormattedDateString = (d: Date) => format(d, "yyyy/MM/dd");
