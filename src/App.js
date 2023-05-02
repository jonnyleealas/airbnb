import NavBar from '../src/NavBar/NavBar.js'
import Footer from '../src/Footer/Footer.js'
import Body from '../src/Body/Body.js'
import Contact from '../src/Contact/Contact.js'
import kitty1 from '../src/public/catImage.jpeg'
import image2 from '../src/public/jill.png'
import image3 from '../src/public/bike.png'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Body />
    </div>
  )
}

export default App