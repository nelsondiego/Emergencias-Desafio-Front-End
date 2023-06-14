import Image from 'next/image'

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center w-full h-[50vh] py-6">

      <div className='w-1/3 aspect-square relative'>
        <Image 
          src='/ovni.svg'
          sizes='30vw'
          fill
          alt='loading...'
        />
      </div>

      <div className="flex items-center text-slate-100 text-xl">
        <div>CARGANDO</div>
        <span className=" ml-1 animate-bounce">.</span>
        <span className="animate-bounce animation-delay-100">.</span>
        <span className="animate-bounce animation-delay-200">.</span>
      </div>

    </div>
  )
}