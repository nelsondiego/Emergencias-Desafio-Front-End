import { Moment } from "moment"
import { Nasa } from "./nasa"

export type Weeks = {
  week: number,
  days: Moment[]
}

export type calendarContextType = {
  calendar: Nasa[],
  monthActual: Moment,
  monthPreviuos: Moment,
  monthNext: Moment,
  loading: boolean,
  showPicture: Nasa | null
  goToPreviousMonth: () => void,
  goToNextMonth: () => void,
  goToFebrury: () => void,
  toggleShowPicture: (day: Nasa|null) => void,
}

type props = {
  children?: React.ReactNode
}