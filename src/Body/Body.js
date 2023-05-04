// import PhotoGrid from '../public/Group77.png'
// import Katy from '../public/katy.png'
import Card from '../Card/Card'
import CardData from '../Card/CardData'
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

    const CardApi =  CardData.map((data) => {
        return <Card 
        // picture={data.picture}
        // playerNumber={CardData.playerNumber}
        // lifeLessons={CardData.lifeLessons}
        // starRating={CardData.starRating} 
        // cost={CardData.cost}
        star={data.star}
        />
    })

  



    return (
        <section className="hero">
            
                {/* <img className={'people-pic'}src={PhotoGrid} alt={'people'} /> */}
        
            <div className='story'>
                <h1>{timeOfDay}</h1>
                <p className='interactive-activities'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        <div>
            {CardApi}
        </div>
        </section>
    )
}

export default Body