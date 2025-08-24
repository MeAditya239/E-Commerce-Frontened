import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const OrderDetails = () => {
  return (
    <div className='ps:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        </div>
      <AddressCard/>
    </div>
  )
}

export default OrderDetails
