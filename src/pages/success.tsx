import Meta from '@/components/Meta';
import { resetCart } from '@/store/slice';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col gap-2 items-center justify-center py-20'>
      <Meta title='Success payment' />
      <h1 className='text-2xl text-hoverBg font-semibold'>
        Thank you for shopping in Next Amazon Clone
      </h1>
      <Link
        className='text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300'
        href={'/'}
        onClick={() => dispatch(resetCart())}
      >
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default SuccessPage;
