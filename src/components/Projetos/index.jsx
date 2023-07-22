import { StyledProjects } from './styled.js'
import Hamburgueria from '../../assets/Hamburgueria.jpeg'
import Nukenzie from '../../assets/NuKenzie.jpeg'
import KenzieHub from '../../assets/KenzieHub.jpeg'
import ShopMusic from '../../assets/ShopMusical.jpeg'
import { Link } from 'react-router-dom'


export const Projects = () => {
  return (
    <StyledProjects>
      <ul>
        <li>
          <img src={Nukenzie} />
          <p className='title'>NuKenzie</p>
          <p className='description'>Aplicativo financeiro com entrada, saída de valores e soma total</p>
          <p className='tecnology'>Projeto feito em React</p>
          
        </li>
        <li>
          <img src={KenzieHub} />
          <p className='title'>KenzieHub</p>
          <p className='description'>Sistema para cadastro de usuários e habilidades de cada usuário</p>
          <p className='tecnology'>Projeto feito em React</p>
         
        </li>
        <li>
          <img src={Hamburgueria} />
          <p className='title'>Hamburgueria</p>
          <p className='description'>Aplicatico de uma Hamburgueria, onde o cliente faz o cadastro no site e tem acesso aos produtos</p>
          <p className='tecnology'>Projeto feito em React e Typescript</p>
         
        </li>
      </ul>
    </StyledProjects>
  )
}
