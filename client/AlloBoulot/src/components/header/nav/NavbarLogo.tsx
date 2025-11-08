import { Link } from 'react-router'

const NavbarLogo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img src="/logo.png" alt="AlloBoulot logo" className="w-8" />
      <h1 className="text-white text-2xl font-medium">AlloBoulot</h1>
    </Link>
  )
}

export default NavbarLogo
