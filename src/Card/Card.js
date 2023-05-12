
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
            <img className='card-image' src={props.item.picture} alt='person' />
            <div className='card-stats'>
                <img className='star' src={props.item.star} alt="star" />
                <span className='gray'>{props.item.starRating}</span>
                <span className='gray'>({props.item.playerNumber}) • USA</span>
            </div>
            <div>
                <p className="card--title">{props.item.lifeLessons}</p>
                <p className="card--price"><span className='bold'>From ${props.item.cost}</span> / Person</p>
            </div>

        </div>
    )
}

export default Card