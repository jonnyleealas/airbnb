
const Card = (props) => {


    
    return (
        <div className='card'>
            <img className='card-image' src={props.picture} alt='person' />
            <div className='card-stats'>
                <img className='star' src={props.star} alt="star" />
                <span className='gray'>{props.starRating}</span>
                <span className='gray'>({props.playerNumber}) • USA</span>
            </div>
            <div>
                <p className="card--title">{props.lifeLessons}</p>
                <p className="card--price"><span className='bold'>From ${props.cost}</span> / Person</p>
            </div>

        </div>
    )
}

export default Card