
import './App.css'
import TextEditor from './Componets/TextEditor'
import Navbar from './Componets/Navbar'
import Home from './Componets/Home'
import Create from './Componets/Create'
import Footer from './Componets/Footer'

function App() {
  return (
  <>
  <Navbar/>
  <div className='flex items-center justify-center flex-col'>
<Home/>
<Create/>
  </div>
  <Footer/>
  </>
  )
}

export default App
