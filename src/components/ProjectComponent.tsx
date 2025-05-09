import React from 'react'

const ProjectComponent = () => {
  return (
    <div className='min-w-[28rem] max-w-[40rem] m-30  p-4'>

        <h1 className='text-5xl mb-10'>Recent Projects</h1>

        <div>
            <div className='my-5'>
                <p>March 2025 - Present</p>
                <p>Itinera</p>
                <a href="https://github.com/kcadavos/itinera-io" target='blank' className='underline hover:text-blue-500'>https://github.com/kcadavos/itinera-io</a>
            </div>

            <div className='my-5'>
                <p>March 2025</p>
                <p>Pokemon Search API</p>
                <a href="https://github.com/Kass-S/pokemon-api" target='blank' className='underline hover:text-blue-500'>https://github.com/Kass-S/pokemon-api</a>
            </div>

            <div className='my-5'>
                <p>January 2025</p>
                <p>Rock Paper Scissors Lizard Spock</p>
                <a href="https://github.com/Kass-S/RPSLSWeb" target='blank' className='underline hover:text-blue-500'>https://github.com/Kass-S/RPSLSWeb</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent