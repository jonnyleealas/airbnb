import Katy from '../public/katy.png'
import Jill from '../public/jill.png'
import Bike from '../public/bike.png'
import './card.css'

const Card = () => {
    return(
        <div className='card'>

        <div>
            <img src={Katy} alt='katy' />
        </div>
        <h3>some stuff</h3>
        <p>Some other stuff</p>
        </div>
    )
}

export default Card