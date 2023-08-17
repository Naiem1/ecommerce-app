import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const CustomerList = ({customer}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 flex flex-row justify-center items-center">
            <BsPersonCircle/>
          </div>

          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {customer.username}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {customer.phone}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        {customer.role}
      </td>

      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
        <Link href={`/customer-detail/${customer.id}`}  className="text-white bg-blue-700 py-1 px-2 hover:bg-indigo-900">
          Details
        </Link>
      </td>
    </tr>
  );
};
export default CustomerList;
