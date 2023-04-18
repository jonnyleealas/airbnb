import PhotoGrid from '../public/Group77.png'
import Card from '../Card/Card'
import './body.css'


const Body = () => {
    return (
        <section className="hero">
            
                <img className={'people-pic'}src={PhotoGrid} alt={'people'} />
        
            <div className='story'>
                <h1>Online Experiences</h1>
                <p className='interactive-activities'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        <div>
            <Card />
        </div>
        </section>
    )
}

export default Body