import React from 'react'

const DeveloperCard = () => {
  return (
    <div>
        <div className="min-w-[28rem] max-w-[40rem] m-30  p-4">
        <div >
          <h2 className="text-4xl my-2">Hi, I’m Kassandra Spacek.</h2>
          <p className="text-lg mb-10">Junior Software Developer</p>
          <p>I am a junior software developer currently enrolled in the Codestack Academy program, working mostly in frontend development.</p>
        </div>

        <div className="mt-5">
          <p>
            Skills snapshot: 
          </p>
          <div className="ml-5">
            <p>Languages: TypeScript, JavaScript, C#, Html, Css</p>
            <p>Frameworks: React, Next.js, React Native </p>
          </div>
        </div>

        <div className="mt-5">
          <button className='bg-blue-500 hover:bg-blue-800 hover:text-white cursor-pointer p-1 px-4 rounded-lg'>Projects</button>
        </div>
        
      </div>
    </div>
  )
}

export default DeveloperCard