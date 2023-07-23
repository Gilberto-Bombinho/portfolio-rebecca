import { StyledProjects } from './styled.js'
import forro from '../../assets/morena-sanfona.jpeg'
import atendimento from '../../assets/atendimento.jpeg'
import modelo from '../../assets/modelo2.jpeg'
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram } from 'react-icons/fa'

export const Projects = () => {
  return (
    <StyledProjects>
      <ul>
      <li>
          <img src={atendimento} />
          <p className="title">Entrevista</p>
          <p className="description">
            Neste dia foi feito uma entrevista com Dra. Rebeca mostrando seu dia-a-dia na corrida rotina de atendimentos na Faculdade de Ilhéus.
          </p>
          <Link
            className="links"
            to="https://www.youtube.com/shorts/IihcSRIVIoc"
            target="_blank"
          >
            <FaYoutube />
            Confira aqui
          </Link>
        </li>
        <li>
          <img src={forro} />
          <p className="title">Vem Morena</p>
          <p className="description">
            Belinha desfilando sua beleza e sambando na cara das inimigas, por
            incrível que pareça a vítima da vez não foi um baixinho, neste clipe
            que é uma das maiores produções do sul da Bahia
          </p>
          <Link
            className="links"
            to="https://www.youtube.com/watch?v=OvZUTiH7KaA"
            target="_blank"
          >
            <FaYoutube />
            Confira aqui
          </Link>
        </li>
        
        <li>
          <img src={modelo} />
          <p className="title">Modelando</p>
          <p className="description">Mostrando que quem tem limite é município, Dra. Rebeca encanta também como modelo fotográfica nesta pequena amostra de um dos seus vários ensaios. Confira mais no seu instagram
          </p>
          <Link
            className="links"
            to="https://www.instagram.com/p/B9ejWvjh3s2/"
            target="_blank"
          >
            <FaInstagram />
            Confira aqui
          </Link>
        </li>
      </ul>
    </StyledProjects>
  )
}
