'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'


export const Header = () => {

  const {user, isSignedIn} = useUser()

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className='flex flex-row items-center gap-1'>
        <Image src={'/logo-no-background.svg'} alt='logo' width={40} height={25} />
        <span className='text-[#e77917] font-bold text-xl'>LeRoiFinance</span>
      </div>
      {isSignedIn ? (<UserButton />) : (<div className='flex gap-3 items-center'>
        <Link href='/dashboard'>
          <Button variant="outline" className="rounded-full">Dashboard</Button>
        </Link>
        <Link href='/dashboard'>
          <Button className="rounded-full text-white ">Get started</Button>
        </Link>
      </div>)}
    </div>
  )
}
