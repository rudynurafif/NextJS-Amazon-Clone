import { LuMenu } from 'react-icons/lu';

const BottomHeader = () => {
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
      <p className='hidden md:inline-flex hover-effect text-amazon_yellow hover:border-red-600 hover:text-red-400'>
        Sign Out
      </p>
    </div>
  );
};

export default BottomHeader;
