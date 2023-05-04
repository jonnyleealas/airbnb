
import Jill from '../public/jill.png'
import Bike from '../public/bike.png'
import Star from '../public/star.png'
import './card.css'

const Card = (props) => {
    
    return(
        <div className='card'>
            <img className='card-image' src={props.picture} alt='person' />
            <div className='card-stats'>
                <img className='star' src={props.star} alt="star" />
                <span className='gray'>{props.starRating}</span>
                <span className='gray'>({props.playerNumber}) • USA</span>
            </div>
                <p>{props.lifeLessons}</p>
                <p><span className='bold'>From ${props.cost}</span> / Person</p>
        </div>
    )
}

export default Card