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
      <Contact img={kitty1} name='kitty1' phone='512 777-7771' email='kitty1@blah.org' mood='happy'  />
      <Contact img={image2} name='kitty2' phone='512 777-7772' email='kitty2@blah.com' mood='very happy'  />
      <Contact img={image3} name='kitty3' phone='512 777-7773' email='kitty3@blah.net' mood='angry' />
      <Body />
    </div>
  )
}

export default App