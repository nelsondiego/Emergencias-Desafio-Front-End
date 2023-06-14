import Image from 'next/image'
import { useCalendar } from "@/context/CalendarContext"
import { Modal } from './Modal'

type props = {
  children: React.ReactNode
}


export const Layout = ({children}:props) => {
  const { showPicture } = useCalendar()
  return (
    <div className='md:w-10/12 mx-auto py-4'>
        <div className='flex items-center pb-4'>
          <Image
            src='/nasa-logo.svg'
            width={60}
            height={60}
            alt='NASA'
            className=''
          />
          <div className=' font-normal text-2xl ml-2 text-gray-100'>Imágenes del Día</div>
        </div>
        { showPicture !== null && <Modal day={showPicture} />}
        {children}
      </div>
  )
}