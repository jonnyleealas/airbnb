
import Jill from '../public/jill.png'
import Bike from '../public/bike.png'
import Star from '../public/star.png'
import './card.css'

const Card = (props) => {
    
    return(
        <div className='card'>
            <img className='card-image' src={props.picture} alt='person' />
            <div className='card-stats'>
                <img className='star' src={Star} alt="star" />
                <span className='gray'>5.0</span>
                <span className='gray'>(6) • USA</span>
            </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className='bold'>From $136</span> / Person</p>
        </div>
    )
}

export default Card