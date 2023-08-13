import Image from 'next/image';
import Logo from '../../public/asset/images/cover-removebg-preview.png';
import { BsCart3 } from 'react-icons/bs';
import { MdFavoriteBorder, MdOutlineAccountCircle } from 'react-icons/md';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-11/12 m-auto">
      {/* top Section */}
      <section className="align-items">
        <div className="w-80">
          <Link href='/'>
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
          <div className="cursor-pointer">
            <Link href='/cart'><BsCart3 /></Link>
          </div>
        </div>
      </section>

      {/* Navigation Section */}

      <nav className="nav">
        <ul className="flex gap-12">
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
        </ul>
      </nav>
    </header>
  );
};
export default Header;
