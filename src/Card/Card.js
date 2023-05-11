
const Card = (props) => {

    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "Online"
    }
    
    return (
        <div className='card'>
            
           {badgeText && <div className="sold--out">{badgeText}</div>}
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