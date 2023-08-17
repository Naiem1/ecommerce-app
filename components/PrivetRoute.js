import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PrivetRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = useRouter()

  
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }
  
  return children;
}
export default PrivetRoute