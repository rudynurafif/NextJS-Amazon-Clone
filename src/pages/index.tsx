import Banner from '@/components/Banner';
import Products from '@/components/Products';
import { ProductProps } from '../../type';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAllProducts } from '@/store/slice';
import Meta from '@/components/Meta';

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData, dispatch]);

  return (
    <main>
      <Meta />
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div className='relative md:-mt-20 mt-5 lgl:-mt-32 xl:-mt-60 z-20 mb-10'>
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR data fetching
export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech');
  const productData = await res.json();

  return { props: { productData } };
};
