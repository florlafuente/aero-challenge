import Link from 'next/link'
import UserProfile from '../components/UserProfile'

const Navbar = () => (
  <nav>
    <Link href='/'>
      <a className='kite'>
        <img src='../static/assets/aerolab-logo.svg' alt='Aerolab' />
      </a>
    </Link>
    <UserProfile name={'John Kite'} points={6000} />
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </nav>
)
export default Navbar