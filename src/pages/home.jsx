import { StyledHomePage } from './styled'
import { Link, Outlet } from 'react-router-dom'


export function HomePage() {
  return (
    <StyledHomePage>
      <header>
        <ul>
          <Link className='link' to={'/'}> Home </Link>  
          <Link className='link' to={'/sobre'}> Sobre </Link>
          <Link className='link' to={'/projetos'}> Experiências </Link>           
        </ul>
      </header>
      <Outlet/>
    </StyledHomePage>
  )
}
