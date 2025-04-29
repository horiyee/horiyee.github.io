import { format } from "date-fns";

export const getFormatted = (d: Date) => format(d, "yyyy-MM-dd");
