'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo'
import { db } from '../../../../utils/dbConfig'
import { getTableColumns } from 'drizzle-orm'
import { Budgets } from '../../../../utils/schema'
// import CardInfo from './_components/CardInfo'


const Dashboard = () => {

  const {user} = useUser()

  const [budgetList, setBudgetList] = useState([])
  const [incomeList, setIncomeList] = useState([])
  const [expenseList, setExpenseList] = useState([])

  useEffect(() => {
    user && getBudgetList()
  }, [user])

  const getBudgetList = async () => {
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${expenses.amount})`.mapWidth(Number),
      totalItem: sql`count(${expense.id})`.mapWidth(Number)
    }).from(Budgets).leftJoin(expenses, eq(Budgets.id, expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress)).groupBy(Budgets.id).orderBy(desc(Budgets.id))

    setBudgetList(result)
    getAllExpenses()
  }

  const getAllExpenses = () => {}

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
      <p>Here's what happening with your money. Let's manage your expenses</p>

      <CardInfo budgetList={} incomeList={} />
    </div>
  )
}

export default Dashboard