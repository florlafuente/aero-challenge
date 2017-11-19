import Link from 'next/link'
import UserProfile from '../components/UserProfile'

const Navbar = ( {user} ) => (
  <nav>
    {console.log(user.redeemHistory)}
    <Link href='/'>
      <a className='kite'>
        <img src='../static/assets/aerolab-logo.svg' alt='Aerolab' />
      </a>
    </Link>
    <UserProfile name={user.name} points={user.points} />
    <style jsx>{`
      nav {
        align-content: center;
        background-color: var(--white);
        display: flex;
        height: 80px;
        justify-content: space-between;
        padding: 22px 42px;
        width: 100%;
      }
    `}</style>
  </nav>
)
export default Navbar