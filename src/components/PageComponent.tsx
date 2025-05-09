'use client'

import React, { useState } from 'react'
import DeveloperCard from './DeveloperCard'
import ProjectComponent from './ProjectComponent';

const PageComponent = () => {
    const [projectsHidden, setProjectsHidden] = useState<boolean>(false);

    const handleSwitch = () => {
        setProjectsHidden(!projectsHidden);
      }
  return (
    <div>
        {
            projectsHidden ? <DeveloperCard /> : <ProjectComponent />
        }
    </div>
  )
}

export default PageComponent