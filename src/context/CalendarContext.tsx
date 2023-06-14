import React, { useContext, useEffect, useState, createContext } from "react";
import moment, { Moment } from "moment";

import { calendarContextType, props } from "@/@types/calendar";
import { getDailyPictures } from "@/services/nasa";
import { Nasa } from "@/@types/nasa";

const CalendarContext = createContext({} as calendarContextType );
const useCalendar = () => useContext(CalendarContext);


const CalendarProvider = ({ children }:props):JSX.Element => {

  const [monthActual, setmonthActual] = useState<Moment>( moment('2023-02-01').startOf('month').clone() )
  const [monthPreviuos, setMonthPreviuos] = useState<Moment>(moment());
  const [monthNext, setMonthnext] = useState<Moment>(moment());
  const [calendar, setCalendar] = useState<Nasa[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [showPicture, setShowPicture] = useState<Nasa | null>(null);


  useEffect(() => {
    const calculateCalendar = async ():Promise<void> => {
      setLoading(true);
      setCalendar([]);

      setMonthPreviuos(monthActual.clone().subtract(1, 'month'))
      setMonthnext(monthActual.clone().add(1, 'month'))

      const nasa: Nasa[] = await getDailyPictures(monthActual);

      setCalendar(nasa);
      setLoading(false);
    }

    calculateCalendar();
  },[monthActual])

  const goToFebrury       = ():void => {setmonthActual(moment('2023-02-01'))};
  const goToPreviousMonth = ():void => {setmonthActual(monthActual.clone().startOf('month').subtract(1, 'month'))};
  const goToNextMonth     = ():void => {setmonthActual(monthActual.clone().startOf('month').add(1, 'month'))};
  const toggleShowPicture = (day: Nasa|null):void => {setShowPicture(day)}
  
  const values = {
    calendar,
    loading,
    monthActual,
    monthPreviuos,
    monthNext,
    showPicture,
    goToPreviousMonth,
    goToNextMonth,
    goToFebrury,
    toggleShowPicture
  }

  return (
    <CalendarContext.Provider value={values}>
      {children}
    </CalendarContext.Provider>
  ) 
}

export {CalendarProvider, useCalendar }

