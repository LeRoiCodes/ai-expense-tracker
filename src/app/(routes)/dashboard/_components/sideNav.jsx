import React, { useEffect } from 'react'
import {LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, CircleDollarSign} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'



const sideNav = () => {

  const menuList = [
    {
      id:1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard"
    },
  {
    id:2,
    name: "Incomes",
    icon: CircleDollarSign,
    path: "/dashboard/incomes"
  },
  {
    id:3,
    name: "Budgets",
    icon: PiggyBank,
    path: "/dashboard/budgets"
  },
  {
    id:4,
    name: "Expenses",
    icon: ReceiptText,
    path: "/dashboard/expenses"
  },
  {
    id:5,
    name: "Upgrade",
    icon: ShieldCheck,
    path: "/dashboard/upgrade"
  },
]

  const path = usePathname()

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className='h-screen p-5 border shadow-sm'>
      <div className='flex flex-row items-center'>
        <Image src={'./logo-no-background.svg'} alt='logo' width={40} height={25} />
        <span className={`text-primary font-bold text-xl`}></span>
      </div>
      <div className='mt-5'>
        {
          menuList.map((menu, index) => {
            return (
              <Link href={menu.path} key={index}>
                <h2 className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full  hover:text-primary-foreground hover:bg-background ${path== menu.path && 'text-primary bg-background'}`}>
                  <menu.icon />
                  {menu.name}
                </h2>
              </Link>
            )
          })
        }
      </div>
      <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
        <UserButton />
        Profile
      </div> 
    </div>
  )
}

export default sideNav

