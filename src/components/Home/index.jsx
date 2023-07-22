import { StyledHome } from './styled.js'
import Foto from '../../assets/anime.jpg'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export const Home = () => {
  return (
    <StyledHome>
      <img src={Foto} />

      <div className="description">
        <p >Olá, eu sou </p>
        <p className="nome">Dra. Rebeca Oliveira</p>

        <div className="linkedIn_github">
          <Link
            className="linkedin"
            to="https://www.instagram.com/rebeccasoliveira/"
            target="_blank"
          >
            {' '}
            <FaInstagram /> Instagram
          </Link>
        </div>
      </div>
    </StyledHome>
  )
}
