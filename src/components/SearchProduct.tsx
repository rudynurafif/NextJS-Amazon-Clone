import React from 'react';
import FormattedPrice from './FormattedPrice';

interface Props {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}

type Item = {
  item: Props;
};

const SearchProduct = ({ item }: Item) => {
  return (
    <div className='flex items-center gap-4 border-b-[1px] border-b-gray-400'>
      <img src={item.image} alt='productImage' className='w-24' />
      <div>
        <p className='text-xs -mb-1'>
          {item.brand}_{item.category}
        </p>
        <p className='text-lg font-medium'>{item.title}</p>
        <p className='text-xs '>{item.description.substring(0, 100)}</p>
        <p className='text-sm flex items-center gap-1'>
          Price:
          <span className='font-semibold'>
            <FormattedPrice amount={item.price} />
          </span>
          <span className='text-gray-600 line-through'>
            <FormattedPrice amount={item.oldPrice} />
          </span>
        </p>
      </div>
      <div className='flex-1 text-right px-4'>
        <p className='text-base font-semibold animate-bounce text-amazon_blue'>
          Save <FormattedPrice amount={item.oldPrice - item.price} />
        </p>
      </div>
    </div>
  );
};

export default SearchProduct;
