import { LuMenu } from 'react-icons/lu';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../../../type';
import { removeUser } from '@/store/slice';

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);
  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };

  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center gap-1'>
      <p className='hover-effect flex gap-1'>
        <LuMenu /> All
      </p>
      <p className='hidden md:inline-flex hover-effect'>Todays Deals</p>
      <p className='hidden md:inline-flex hover-effect'>Customer Service</p>
      <p className='hidden md:inline-flex hover-effect'>Registry</p>
      <p className='hidden md:inline-flex hover-effect'>Gift Cards</p>
      <p className='hidden md:inline-flex hover-effect'>Sell</p>
      {userInfo && (
        <button
          onClick={handleSignOut}
          className='md:inline-flex hover-effect text-amazon_yellow hover:border-red-600 hover:text-red-400'
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
