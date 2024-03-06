import Image from 'next/image'
import logo from '@/images/logo.png'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4 bottom-0'>
      <Image className='w-24' src={logo} alt='logo' />
      <p className='text-sm -mt-4'>
        All right reserved{' '}
        <a
          className='text-amazon_yellow hover:underline decoration-[1px]'
          href='https://rudynurafif.com'
          target='_blank'
        >
          @rudynurafif
        </a>
      </p>
    </div>
  )
}

export default Footer
