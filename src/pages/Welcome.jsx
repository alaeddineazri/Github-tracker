
import image from '../assets/404.gif'

function Welcome() {
    return (
        <div className='hero'>
            <div className='text-center hero-content  '>
                <div className='max-w-lg'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Welcome
