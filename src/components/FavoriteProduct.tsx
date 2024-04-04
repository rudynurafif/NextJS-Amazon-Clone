import React from 'react';
import { StoreProduct } from '../../type';
import Image from 'next/image';
import FormattedPrice from './FormattedPrice';
import { useDispatch } from 'react-redux';
import { addToCart, deleteProductFromFavorite } from '@/store/slice';

interface FavoriteProductProps {
  item: StoreProduct;
}

const FavoriteProduct = ({ item }: FavoriteProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2'>
      <Image src={item.image} alt='productImage' width={150} height={150} />
      <div className='flex items-center px-2 gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <p className='text-sm text-gray-600'>
            Unit Price:{' '}
            <span className='font-semibold text-amazon_blue'>
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <button
            className='w-44 add-to-cart-button'
            onClick={() => {
              dispatch(
                addToCart({
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
              ) && dispatch(deleteProductFromFavorite(item._id));
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
