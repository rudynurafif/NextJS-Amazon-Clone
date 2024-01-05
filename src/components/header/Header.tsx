import Image from 'next/image';
import logo from '@/images/logo.png';
import cartIcon from '@/images/cartIcon.png';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
        {/* Logo */}
        <Link href={'/'} className='hover-effect flex'>
          <Image className='w-28 object-cover' src={logo} alt='logoImg' />
        </Link>

        {/* deliver */}
        <div className='hover-effect hidden xl:inline-flex gap-1'>
          <SlLocationPin />
          <div className='text-xs'>
            <p>Deliver to</p>
            <p className='text-white font-bold uppercase'>ID</p>
          </div>
        </div>

        {/* searchbar */}
        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
          <input
            className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
            type='text'
            placeholder='Search our nextjs amazon products'
          />
          <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
            <HiOutlineSearch />
          </span>
        </div>

        {/* signin */}
        <div className='hover-effect-2'>
          <p>Hello, sign in</p>
          <p className='text-white font-bold flex items-center'>
            Account & Lists{' '}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>

        {/* favourite */}
        <div className='hover-effect-2'>
          <p>Marked</p>
          <p className='text-white font-bold'>& Favourite</p>
        </div>

        {/* cart */}
        <Link href={'/cart'} className='hover-effect flex relative'>
          <Image
            className='w-auto object-cover h-8'
            src={cartIcon}
            alt='cartImg'
          />
          <p className='text-xs text-white font-bold mt-3'>Cart</p>
          <span className='absolute text-amazon_yellow text-sm top-2 left-[30px] font-semibold'>
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
