import Image from 'next/image';
import React from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProductFromCart, increaseQuantity } from '@/store/slice';
import { StoreProduct } from '../../type';

interface CartProductProps {
  item: StoreProduct;
}

const CartProduct = ({ item }: CartProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 flex items-center rounded-lg gap-4'>
      <Image
        className='object-cover'
        height={150}
        width={150}
        src={item.image}
        alt='productImage'
      />
      <div className='flex items-center gap-4 px-2'>
        <div className='flex flex-col gap-1'>
          <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
          <p className='text-sm text-gray-600'>{item.description}</p>
          <p className='text-sm text-gray-600'>
            Unit Price:{' '}
            <span className='font-semibold text-amazon_blue'>
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className='flex items-center gap-6'>
            <div className='flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300'>
              <span
                className='qty-cart-hover'
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                className='qty-cart-hover'
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  )
                }
              >
                <LuMinus />
              </span>
            </div>
            <div
              className='flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300 gap-0.5'
              onClick={() => dispatch(deleteProductFromCart(item._id))}
            >
              <IoMdClose /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedPrice amount={item.quantity * item.price} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
