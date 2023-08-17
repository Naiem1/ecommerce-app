'use client'

import { fetchCustomerList, fetchSelectedCustomer, fetchSelectedUser } from "@redux/slices/dashboardSlice";
import { useParams } from "next/navigation"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomerDetails = ({params}) => {
  const param = useParams();
  const { customerId } = params;
  
  const dispatch = useDispatch();
  const {selectedCustomer, orderList} = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(fetchSelectedCustomer(customerId))
  }, [dispatch])

  const customerDetail = orderList.filter(order => order.userId === 5);
  const address = customerDetail[0].address;

  console.log('customerDetail>>',address)


 


  return (
    <div className="mt-16">
      <div className="w-9/12 m-auto flex justify-around shadow border border-blue-700 p-5">
      <div>
      <h1 className="my-1 text-lg"> <span className="font-bold">Username:</span> {selectedCustomer.username}</h1>
      <h1 className="my-1 text-lg"> <span className="font-bold">Email:</span>{selectedCustomer.email}</h1>
      <h1 className="my-1 text-lg"> <span className="font-bold">Role:</span>{selectedCustomer.role}</h1>
        </div>
        
      <div>
        <h1 className="my-1 text-lg"> <span className="font-bold">FirstName:</span> {address.firstName}</h1>
        <h1 className="my-1 text-lg"> <span className="font-bold">LastName:</span> {address.lastName}</h1>
        <h1 className="my-1 text-lg"> <span className="font-bold">Address:</span> {address.address}</h1>
        <h1 className="my-1 text-lg"> <span className="font-bold">City:</span> {address.city}</h1>
        <h1 className="my-1 text-lg"> <span className="font-bold">Postcode:</span> {address.postcode}</h1>
      </div>
    </div>
    </div>
  )
}
export default CustomerDetails