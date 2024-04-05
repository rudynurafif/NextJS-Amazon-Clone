import Image from 'next/image';
import logo from '@/images/logo.png';
import cartIcon from '@/images/cartIcon.png';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '../../../type';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { addUser } from '@/store/slice';
import SearchProduct from '../SearchProduct';

const Header = () => {
  const { cartData, favoriteData, userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );
  const { data: session } = useSession();
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [dispatch, session]);

  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = allData.filter((item: StoreProduct) =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setFilteredProducts(filtered);
  }, [allData, searchQuery]);

  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
        {/* Logo */}
        <Link href={'/'} className='hover-effect flex'>
          <Image className='w-28 object-cover mt-1' src={logo} alt='logoImg' />
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
            onChange={handleSearch}
            value={searchQuery}
            className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
            type='text'
            placeholder='Search our nextjs amazon products'
          />
          <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
            <HiOutlineSearch />
          </span>

          {/* Searchfield */}
          {searchQuery && (
            <div className='absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black'>
              {filteredProducts.length > 0 ? (
                <>
                  {searchQuery &&
                    filteredProducts.map((item: StoreProduct) => (
                      <Link
                        key={item._id}
                        href={{
                          pathname: `${item._id}`,
                          query: {
                            _id: item._id,
                            brand: item.brand,
                            category: item.category,
                            image: item.image,
                            description: item.description,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            title: item.title,
                          },
                        }}
                        onClick={() => setSearchQuery('')}
                      >
                        <SearchProduct item={item} />
                      </Link>
                    ))}
                </>
              ) : (
                <div className='bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg'>
                  <p className='text-xl font-semibold animate-bounce'>
                    Nothing is matches with your search keywords. Please try again!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* signin */}
        {userInfo ? (
          <div className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1 rounded'>
            <img
              src={userInfo.image}
              alt='userImage'
              className='w-8 h-8 rounded-full object-cover'
            />
            <div className='max-sml:hidden text-xs text-gray-100 flex-col justify-between'>
              <p className='text-white font-bold'>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div className='hover-effect-2' onClick={() => signIn()}>
            <p>Hello, sign in</p>
            <p className='text-white font-bold flex items-center'>
              Account & Lists{' '}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}

        {/* favourite */}
        <Link href={'/favorite'} className='hover-effect-2 relative'>
          <p>Marked</p>
          <p className='text-white font-bold'>& Favourite</p>
          {favoriteData.length > 0 && (
            <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>
              {favoriteData.length}
            </span>
          )}
        </Link>

        {/* cart */}
        <Link href={'/cart'} className='hover-effect flex relative'>
          <Image className='w-auto object-cover h-8' src={cartIcon} alt='cartImg' />
          <p className='text-xs text-white font-bold mt-3'>Cart</p>
          <span className='absolute text-amazon_yellow text-sm top-2 md:left-[30px] left-[27px] font-semibold'>
            {cartData ? cartData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
