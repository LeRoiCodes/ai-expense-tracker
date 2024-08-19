'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
// import CardInfo from './_components/CardInfo'


const Dashboard = () => {

  const {user} = useUser()

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
    </div>
  )
}

export default Dashboard