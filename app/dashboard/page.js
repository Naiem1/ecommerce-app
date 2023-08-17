'use client'
import CustomerList from '@components/CustomerList/CustomerList';
import PrivetRoute from '@components/PrivetRoute';
import { fetchCustomerList, fetchOrders, fetchProductList } from '@redux/slices/dashboardSlice';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardState = useSelector(state => state.dashboard);
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProductList());
    dispatch(fetchCustomerList());
  }, [dispatch])


  console.log('dashboard>>', dashboardState);
  console.log(dashboardState.productsList.products.length);
  return (
    <PrivetRoute>
      <div className="mt-12 flex">
      <nav class="mt-12 bg-blue-900">
        <a
          class="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
          href="#"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>

          <span class="mx-3">Dashboard</span>
        </a>

        <a
          class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          href="#"
        >
          

          <span class="mx-3">Order List</span>
        </a>

        <a
          class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          href="#"
        >

          <span class="mx-3">Product List</span>
        </a>

      </nav>
      <div className="flex flex-col flex-1 h-screen">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
          <div className="flex items-center">
            <div className="relative mx-4 lg:mx-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container px-6 py-8 mx-auto">
            <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        viewBox="0 0 28 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        {dashboardState.customerList.length}
                      </h4>
                      <div className="text-gray-500">Total Users</div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        {dashboardState.orderList.length}
                      </h4>
                      <div className="text-gray-500">Total Orders</div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                          stroke="currentColor"
                          stroke-width="2"
                    ></path>
                      </svg>
                    </div>

                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        {dashboardState.productsList.products.length}
                      </h4>
                      <div className="text-gray-500">Available Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8"></div>

            <div className="flex flex-col mt-8">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Name
                        </th>
                        
                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                          Role
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {dashboardState.customerList.map(customer => <CustomerList
                        customer={...customer} key={customer.id} />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </PrivetRoute>
  );
};
export default Dashboard;
