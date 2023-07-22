import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Projects } from '../components/Projetos'
import { About } from '../components/Sobre'
import { HomePage } from '../pages/home'

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route index element={<Home />} />
      <Route path="sobre" element={<About />} />
      <Route path="projetos" element={<Projects />} />
    </Route>
  </Routes>
)

export default Router
