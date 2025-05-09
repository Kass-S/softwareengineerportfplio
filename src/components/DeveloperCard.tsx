import React from 'react'

const DeveloperCard = ({ setProjectsHidden }:{setProjectsHidden: (val: boolean) => void;}) => {

    const handleSwitch = () => {
        setProjectsHidden(false);
    }

  return (
    <div>
        <div className="min-w-[28rem] max-w-[40rem] m-20 mb-0  p-4">
        <div className='bg-blue-300 p-3 mb-8 rounded-2xl'>
          <h2 className="text-4xl my-2 ">Hi, I’m Kassandra Spacek.</h2>
          <p className="text-lg">Junior Software Developer</p>

        </div>

        <div className="mt-5 p-1">
          <p className="my-5">I am a junior software developer currently enrolled in the Codestack Academy program, working mostly in frontend development.</p>
          <p>
            Skills snapshot: 
          </p>
          <div className="ml-5">
            <p>Languages: TypeScript, JavaScript, C#, Html, Css</p>
            <p>Frameworks: React, Next.js, React Native </p>
          </div>
        </div>

        <div className="mt-5">
          <button className=' bg-blue-500 text-black hover:bg-blue-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg' onClick={handleSwitch}>Projects</button>
        </div>

        

      </div>

      <div className='mt-10 mr-40 float-right text-end border-r-8 border-blue-800 pr-2'>
            <p className='text-lg mb-3'>Find Me:</p>
            <div>
                <p className='mb-2'>KassandraSpacek@Gmail.com</p>
                <div className='grid'>
                    <a href="https://github.com/Kass-s" target="_blank" className='mb-2'><button className=' bg-blue-500 text-black hover:bg-blue-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>GitHub</button></a>
                    <a href="https://www.linkedin.com/in/kassanrda-spacek-519078364/" target="_blank" className='mb-2'><button className=' bg-blue-500 text-black hover:bg-blue-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>LinkedIn</button></a>
                </div>
                
                
                <div className="flex justify-end ">
                    <a
                    href="/KassandraSpacekResume.pdf"
                    download="KassandraSpacekResume.pdf"
                    >
                    <button className="px-4 py-1 rounded-lg bg-blue-500 text-black hover:bg-blue-800 hover:text-white">
                        <span className="block rounded-lg">
                        Download Resume
                        </span>
                    </button>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DeveloperCard