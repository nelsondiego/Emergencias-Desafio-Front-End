import Image from 'next/image'
import { Nasa } from "@/@types/nasa"
import { useCalendar } from '@/context/CalendarContext'

type props = {
  day: Nasa
  index: number
}

export const CardDay = ({day, index}:props) => {

  const { toggleShowPicture } = useCalendar()

  return (
    <div
      onClick={() => toggleShowPicture(day)} 
      className=' group w-full relative overflow-hidden aspect-square bg-gray-800 text-white rounded p-3 shadow-md cursor-pointer'>
      <Image 
        src={day.thumbnail_url ?? day.url}
        alt={day.title}
        fill={true}
        sizes='20vw'
        priority={true}
        className=' object-cover ease-in-out duration-500 group-hover:-rotate-6 group-hover:scale-125'
      />

      <div className=' text-4xl drop-shadow-md absolute top-1'>
        { index + 1}
      </div>
      <div className=' absolute bottom-0 left-0 right-0 drop-shadow text-xs p-2'>
        {day.title}
      </div>
      { day.media_type === 'video' && <div className=' absolute top-0 right-0 bg-blue-500 text-xs rounded-bl px-2'>VIDEO</div>}
    </div>
  )
}