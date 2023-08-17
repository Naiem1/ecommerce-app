'use client';
import {  logoutUser } from '@redux/slices/authSlice';
import { calculateTotalProducts } from '@util/totalProduct';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsCart3 } from 'react-icons/bs';
import { MdFavoriteBorder, MdOutlineAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../public/asset/images/cover-removebg-preview.png';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartState = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const totalProduct = calculateTotalProducts(cartState.item);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
  };

  return (
    <header className="w-11/12 m-auto">
      {/* top Section */}
      <section className="align-items">
        <div className="w-80">
          <Link href="/">
            <Image
              src={Logo}
              width={400}
              height={400}
              alt="Logo of the website"
            />
          </Link>
        </div>
        <div className="px-6 grow">
          <form>
            <div className="flex">
              <input type="text" className="search-field" />
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="icon-wrapper">
          <div className="cursor-pointer">
            <MdOutlineAccountCircle />
          </div>
          <div className="cursor-pointer">
            <MdFavoriteBorder />
          </div>
          <div className="cursor-pointer relative">
            <Link href="/cart">
              <div className="w-10 h-8 bg-blue-600 absolute rounded-full left-4 bottom-4 text-center text-white">
                {totalProduct}
              </div>
              <BsCart3 />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Section */}

      <nav className="nav">
        <ul className="flex align-center gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            {isAuthenticated ? (
              <a
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-700 text-white cursor-pointer"
              >
                Logout
              </a>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-blue-700 text-white">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
