
import { Outlet } from 'react-router-dom'
import NavItems from './Components/NavItems'



function App() {

  return (
    <>
  <NavItems></NavItems>
  <Outlet></Outlet>
    </>
  )
}

export default App
