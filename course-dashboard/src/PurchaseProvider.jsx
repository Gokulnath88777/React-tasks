import React, { createContext,useState } from 'react'
import { toast } from 'react-toastify'
export const purchaseContext=createContext()
function PurchaseProvider({children}) {
    let [purchased,setPurchase]=useState(null)
       function handlePurchased(e) {

        toast.success("Purchased")
        purchaseFunc(e)

    }
    function purchaseFunc(PurchasedTitle)
    {
        setPurchase(prev=>[...(prev||[]),PurchasedTitle])
        
    }
  return (
   <purchaseContext.Provider value={{purchased,handlePurchased,setPurchase}}>
          {children}
   </purchaseContext.Provider>
  )
}

export default PurchaseProvider