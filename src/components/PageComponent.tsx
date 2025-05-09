'use client'

import React, { useState } from 'react'
import DeveloperCard from './DeveloperCard'
import ProjectComponent from './ProjectComponent';

const PageComponent = () => {
    const [projectsHidden, setProjectsHidden] = useState<boolean>(false);

    
  return (
    <div className='border-l-8 border-blue-800 '>
        {
            projectsHidden ? <DeveloperCard setProjectsHidden={setProjectsHidden} /> : <ProjectComponent setProjectsHidden={setProjectsHidden} />
        }
    </div>
  )
}

export default PageComponent