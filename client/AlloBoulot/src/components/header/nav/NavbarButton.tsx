import { Button } from "@/components/ui/button"
import { Link } from 'react-router'

const NavbarButton = ({ src, name }: { src:string, name:string }) => {
  return (
    <Button>
      <Link to={src}>
      {name}
    </Link>
    </Button>
  )
}

export default NavbarButton
