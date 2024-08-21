

import { CircleDollarSign, PiggyBank, ReceiptText, Sparkles, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'



const CardInfo = ({budgetList, incomeList}) => {

  const [totalBudget, setTotalBudget] = useState(0)
  const [totalSpend, setTotalSpend]  = useState(0)
  const [totalIncome, setTotalIncome]  = useState(0)
  const [financialAdvice, setFinancialAdvice] = useState("")

  useEffect(() => {
    if(budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo()
    }
  }, [budgetList, incomeList]);

  useEffect(() => {
    // if(totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
    //   const fetchFinancialAdvice = async () => {
    //     const advice = await getFinancialAdvice(totalBudget, totalIncome, totalSpend)
        
    //   }
    //   setFinancialAdvice(advice)
    //   fetchFinancialAdvice()

    // }
  }, [totalBudget, totalIncome, totalSpend])

  const CalculateCardInfo = () => {
    let totalBudget_ = 0
    let totalSpend_ = 0
    let totalIncome_ = 0

    budgetList.forEach(element => {
      totalBudget_ = totalBudget_ + Number(element.amount)
      totalSpend_ = totalSpend_ + element.totalSpend      
    });

    incomeList.forEach(element => {
      totalIncome_ += element.totalAmount
    })

    setTotalBudget(totalBudget_)
    setTotalSpend(totalSpend_)
    setTotalIncome(totalIncome_)

  }

  return (
    <div>
      {budgetList.length > 0 ? (
        <div>
          <div className='p-7 border mt-4 rounded-2xl flex items-center justify-between'>
            <div className=''>
              <div className='flex mb-2 flex-row space-x-1 items-center'></div>
            </div>
          </div>
        </div>
      ) : ("")}
    </div>
  )
}

export default CardInfo