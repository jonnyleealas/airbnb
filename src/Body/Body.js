import PhotoGrid from '../public/Group77.png'
import Katy from '../public/katy.png'
import Card from '../Card/Card'
import './body.css'


const Body = () => {
    const onlineExp = 'Online Experiences'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12) {
        timeOfDay = "morning"
    } else if ( hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = 'night'
    }

    const cardInfo = {
        katy: Katy,
        starRating: [1,2,3,4,5],
        playerNumber: 6,
        lifeLessons: 'Life Lessons with Katie Zaferes',
        cost: [134],
    }




    return (
        <section className="hero">
            
                <img className={'people-pic'}src={PhotoGrid} alt={'people'} />
        
            <div className='story'>
                <h1>{timeOfDay}</h1>
                <p className='interactive-activities'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        <div>
            <Card picture={cardInfo.katy} starRating={cardInfo.starRating[3]} playerNumber={cardInfo.playerNumber} lifeLessons={cardInfo.lifeLessons} cost={cardInfo.cost[0]} />
        </div>
        </section>
    )
}

export default Body