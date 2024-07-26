import Meta from '@/components/Meta';
import { resetCart } from '@/store/slice';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <div className='max-w-screen-2xl mx-auto px-6 gap-10 py-4'>
      <div className='bg-white h-96 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg gap-2'>
        <Meta title='Success Payment' />
        <h1 className='text-2xl p-3 text-hoverBg font-semibold text-center'>
          Thank you for shopping in Next Amazon Clone
        </h1>
        <Link
          className='text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300'
          href={'/'}
        >
          <p>Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
