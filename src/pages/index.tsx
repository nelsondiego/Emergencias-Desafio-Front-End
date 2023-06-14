import { useCalendar } from '@/context/CalendarContext';
import { Menu } from '@/components/Menu';
import { CardDay } from '@/components/CardDay';
import { titillium } from '@/styles/fonts';
import { Loading } from '@/components/Loading';
import { Modal } from '@/components/Modal';


export default function Home() {
  
  const { calendar, loading, monthActual } = useCalendar()
  
  
  return (
    <main className={`flex min-h-screen flex-col ${titillium.className}`}>
      <div className='p-4 w-full  rounded min-h-[80vh] bg-gray-900'>
        <div className={`text-3xl font-normal text-gray-200 mb-2 text-center`}>
        { monthActual.clone().format('MMMM [de] YYYY')}
        </div>
        { loading 
          ? <Loading />
          : (
            <div>
              <Menu />
              <div className='grid grid-cols-2 md:grid-cols-7 gap-4 '>
                {calendar.map((day, index) => (<CardDay key={index} day={day} index={index} />))}
              </div>
            </div>
            )
        }
      </div>
      
    </main>
  )
}
