import React from 'react'

const ProjectComponent = ({ setProjectsHidden }:{setProjectsHidden: (val: boolean) => void;}) => {

    const handleSwitch = () => {
        setProjectsHidden(true);
    }

  return (
    <div className='min-w-[28rem] max-w-[30rem] m-30 mb-0 mr-50  p-4 max-h-screen'>

        <h1 className='text-5xl mb-20 '>Recent Projects</h1>

        <div className='grid grid-rows-3'>
            <div className='my-5'>
                <p className='text-xl'>Itinera</p>
                <div className='ml-5 flex justify-between'>
                    <p className='mr-5'>March 2025 - Present</p>
                    <a href="https://github.com/kcadavos/itinera-io" target='blank' className='underline hover:text-red-500'><button className=' bg-red-500 text-black hover:bg-red-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>GitHub</button></a>
                </div>
            </div>

            <div className='my-5'>
                <p className='text-xl '>Pokemon Search API</p>
                <div className='ml-5 flex justify-between'>
                    <p className='mr-5'>March 2025 - March 2025</p>
                    <a href="https://github.com/Kass-S/pokemon-api" target='blank' className='underline hover:text-red-500'><button className=' bg-red-500 text-black hover:bg-red-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>GitHub</button></a>
                </div> 
            </div>

            <div className='my-5'>
                <p className='text-xl'>Rock Paper Scissors Lizard Spock</p>
                <div className='ml-5 flex justify-between'>
                    <p className='mr-5'>January 2025 - January 2025</p>
                    <a href="https://github.com/Kass-S/RPSLSWeb" target='blank' className='underline hover:text-red-500'><button className=' bg-red-500 text-black hover:bg-red-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>GitHub</button></a>
                </div>
            </div>

            <div className="mt-20 ">
                <button className=' bg-red-500 text-black hover:bg-red-800 hover:text-white cursor-pointer p-2 px-4 rounded-lg' onClick={handleSwitch}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent