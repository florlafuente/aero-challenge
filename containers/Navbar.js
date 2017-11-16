import Link from 'next/link'

const Navbar = () => (
  <nav>
    <Link href='/'>
      <a className='kite'>
        <img src='../static/assets/aerolab-logo.svg' alt='Aerolab' />
      </a>
    </Link>
  </nav>
)
export default Navbar