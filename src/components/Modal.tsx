import Image from 'next/image'
import { useCalendar } from "@/context/CalendarContext"
import { Nasa } from '@/@types/nasa'

type props = {
  day: Nasa
}

export const Modal = ({day}:props):JSX.Element => {

  const { toggleShowPicture } = useCalendar()

  return (
    <div 
    onClick={() => toggleShowPicture(null)}
      className=" fixed z-50 top-0 left-0 bottom-0 right-0 bg-opacity-70 bg-gray-900 flex justify-center items-start p-4 overflow-x-scroll">
      <div className=" bg-gray-800 text-gray-100 p-4 rounded w-[70vw] overflow-y-scroll">
        
        
          { day.media_type === 'video' 
            ? <iframe src={day.url} title="YouTube video player" className=' w-full aspect-video'  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            : <div className='w-full h-[60vh] relative rounded overflow-hidden bg-gray-700'>
                <Image
                  src   = {day.thumbnail_url ?? day.url}
                  alt   = {day.title}
                  sizes = "100vw"
                  fill
                  priority  = {true}
                  className=' object-contain'
                  placeholder='empty'
                  quality={75}
                />
                
              </div>
          }
        
        <div className=' py-4 text-xl'>{day.title}</div>
        <div className=' text-sm mb-4'>{day.explanation}</div>
        {day.copyright && <div className=' text-sm mb-4'>Credito: {day.copyright}</div>}

        <div className='flex justify-end'>
          <button onClick={() => toggleShowPicture(null)} className=' hover:text-gray-300 bg-blue-900 hover:bg-blue-700 px-2 rounded text-xs py-1'>CERRAR</button>
        </div>
      </div>
    </div>
  )
}