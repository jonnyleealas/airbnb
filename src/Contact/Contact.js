import catImage from '../public/catImage.jpeg'


const Contact = () => {
    return (
        <div>
            <img src={catImage} alt='catImage' />
            <h3>Mr. Whiskerson</h3>
            <div className='info-group'>
                <p>phone icon</p>
                <p>(212 555-1234</p>
            </div>
        </div>
    )
}


export default Contact