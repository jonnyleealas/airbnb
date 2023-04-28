import catImage from '../public/catImage.jpeg'


const Contact = (props) => {
    console.log('banana', props)
    return (
        <div>
            <img src={props.img} alt='catImage' />
            <h3>{props.name}</h3>
            <div className='info-group'>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <p>{props.mood}</p>
            </div>
        </div>
    )
}


export default Contact