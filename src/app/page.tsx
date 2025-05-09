

export default function Home() {
  return (
    <div>
      
      <div className="mx-10 grid grid-rows-3 grid-cols-3">
        <div >
          <h2 className="text-4xl">Kassandra Spacek</h2>
          <p>Software Engineer</p>
        </div>

        <div className=" row-[2]">
          <p className="text-xl font-semibold">About Me</p>
          <p>Hello, I am Kassandra Spacek. </p>
          <p>I am a software engineer currently enrolled in the Codestack Academy program, working mostly in frontend development.</p>
        </div>

        <div className="row-[3]">
        <div className="">
          
          <div>
            <p>
              Skills snapshot: 
            </p>
            <p>Languages: TypeScript, JavaScript, C#, Html, Css</p>
            <p>Frameworks: React, Next.js, React Native </p>
          </div>
          
        </div>

        <div>
          <p>Projects </p>
        </div>
        
        </div>
        
      </div>
      
      {/* 
          Phone Number
          Email
          Links to LinkedIn, GitHub, and Resume */}
    </div>
    
  );
}
