'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from './_components/CardInfo'
import { db } from '../../../../utils/dbConfig'
import { getTableColumns } from 'drizzle-orm'
import { Budgets, Incomes, Expenses } from '../../../../utils/schema'
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
      totalSpend: sql`sum(${Expenses.amount})`.mapWidth(Number),
      totalItem: sql`count(${Expenses.id})`.mapWidth(Number)
    }).from(Budgets).leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress)).groupBy(Budgets.id).orderBy(desc(Budgets.id))

    setBudgetList(result)
    getAllExpenses();
    getIncomeList()
  }

  const getAllExpenses = async () => {
    const result = await db.select({
      id:Expenses.id,
      name: Expenses.name,
      amount: Expenses.amount,
      createdAt: Expenses.createdAt
    }).from(Budgets).rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress)).orderBy(desc(Expenses.id))

    setExpenseList(result)
  }

  const getIncomeList = async() => {
    try {
      const results = await db.select({
        ...getTableColumns(Incomes),
        totalAmount: sql`sum(cast(${Incomes.amount} as numeric))`.mapWidth(Number)
      }).from(Incomes).groupBy(Incomes.id)

      setIncomeList(results)
    } catch (error) {
      console.log(`Error fetching income list:` , error);
    }
  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
      <p>Here's what happening with your money. Let's manage your expenses</p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />
    </div>
  )
}

export default Dashboard