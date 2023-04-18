import NavBar from '../src/NavBar/NavBar.js'
import Footer from '../src/Footer/Footer.js'
import Body from '../src/Body/Body.js'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Body />
      <Footer />
    </div>
  )
}

export default App