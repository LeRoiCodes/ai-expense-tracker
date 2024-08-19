

import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
        <UserButton afterSwitchSessionUrl="/" />
        </div>
    </div>
  )
}

export default DashboardHeader



    // ="flex justify-end border-b-2 p-4"
            
     