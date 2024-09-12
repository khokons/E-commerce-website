
import { Outlet } from 'react-router-dom'
import NavItems from './Components/NavItems'
import Footer from './Components/Footer'



function App() {

  return (
    <>
  <NavItems></NavItems>
  <Outlet></Outlet>
  <Footer></Footer>
    </>
  )
}

export default App
