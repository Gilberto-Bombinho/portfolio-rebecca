import { StyledAbout } from './style.js'
import Foto from '../../assets/modelo.jpeg'

export const About = () => {
  return (
    <StyledAbout>
      <img src={Foto} />
        <div className='informations'>
          <p className='about'>SOBRE MIM</p>
          <p className='city'>Rio de Janeiro - RJ</p>
          <p className='personal_description'>Dra. Rebeca Oliveira, é uma incrível e multi-talentosa dentista, modelo e dançarina de forró. No seu consultório, na hora do motorzinho nem precisa de anestesia pois seu sorriso já nos deixa anestesiado. Na dança, se tornou a Morena do Forró, com um xote bem gostosinho que encanta a todos e principalmente os de baixa estatura. Como modelo, desfila sua beleza estonteante sambando na cara das inimigas.</p>
        </div> 
    </StyledAbout>
  )
}
