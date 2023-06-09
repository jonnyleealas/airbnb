import NavBar from '../src/NavBar/NavBar.js'
import Footer from '../src/Footer/Footer.js'
import Body from '../src/Body/Body.js'
import Contact from '../src/Contact/Contact.js'
import Card from '../src/Card/Card.js'
import CardData from './CardData.js'

import './App.css'

const App = () => {

  const Cards = CardData.map((data) => {
    
    return <Card
      key={data.id}
      item={data }
    />
  })

  return (
    <div className='App'>
      <NavBar />

      <section className='cards-list'>
        {Cards}
      </section>

    </div>
  )
}

export default App