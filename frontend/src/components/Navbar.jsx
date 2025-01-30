import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Navbar = ({ title }) => {
  return (
    <nav className='pb-4 flex border-b items-center justify-between'>
      <Link to='/'>
        <img src={logo} alt='Logo tecnocontrol' className='w-[150px]' />
      </Link>
      <h2 className='text-3xl font-bold text-center text-gray-200'>{title}</h2>
      <Link
        to='/'
        className='px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md transition hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'
      >
        Dashboard
      </Link>
    </nav>
  )
}
