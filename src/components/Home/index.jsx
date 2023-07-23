import { StyledHome } from './styled.js'
import Foto from '../../assets/odonto2.jpeg'
import { Link } from 'react-router-dom'
import {FaInstagram } from 'react-icons/fa'

export const Home = () => {
  return (
    <StyledHome>
      <img src={Foto} />

      <div className="description">
        <p >Olá, eu sou </p>
        <p className="nome">Dra. Rebeca Oliveira</p>
        <p className="cargo">Cirurgiã-Dentista</p>
        
          <Link
            className="instagram"
            to="https://www.instagram.com/rebeccasoliveira/"
            target="_blank"
          >
            {' '}
            <FaInstagram /> Instagram
          </Link>
       
      </div>
    </StyledHome>
  )
}
