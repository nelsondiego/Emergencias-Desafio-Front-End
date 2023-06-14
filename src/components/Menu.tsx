import { useCalendar } from "@/context/CalendarContext"
import { Button } from "./Buton"
import moment from "moment"

export const Menu = ():JSX.Element => {
  const { goToPreviousMonth, goToNextMonth, goToFebrury, monthNext, monthActual, loading } = useCalendar()
  
  return (
    <div>
      { !loading && (
        <div className='flex justify-between gap-4 w-full py-4'>
          <Button title='Mes Anterior' action={goToPreviousMonth} />
          {!monthActual.isSame(moment('2023-02-01'),'month') && <Button title='Ir a Febrero 2023' action={goToFebrury} />}
          <Button title='Mes Siguiente' action={goToNextMonth} isDisabled={monthNext.isAfter(moment(), 'month')} />
        </div>
      )}
    </div>
  )
}