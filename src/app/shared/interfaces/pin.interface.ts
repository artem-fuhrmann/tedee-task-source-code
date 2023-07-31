export interface Pin {
  id: number;
  pin?: string;
  alias: string;
  startDate?: Date;
  endDate?: Date;
  dayStartTime?: Date;
  dayEndTime?: Date;
  weekDays?: number;
}
