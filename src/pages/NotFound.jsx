import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import image from '../assets/404.gif'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <img src={image} alt="" />
          <p className='text-5xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn bg-black btn-lg' to='/'>
            <FaHome className='mr-2' />
            Go Home 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
