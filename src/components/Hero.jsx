import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImg from '../assets/kwon.jpg'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    return (
        <div className="hero min-h-screen container">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={myImg}
                    className="max-w-xs rounded-lg shadow-2xl" 
                />
                <div className='text-center lg:text-left'>
                    <h1 className="text-5xl font-bold">Hello, <span className='text-primary'>I'm a developer</span></h1>
                    <p className="py-6 lg:w-[50%]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                    <div className='space-x-4'>
                        <FontAwesomeIcon icon={faFacebook} className='text-2xl text-primary' />
                        <FontAwesomeIcon icon={faGithub} className='text-2xl text-primary' />
                        <FontAwesomeIcon icon={faTwitter} className='text-2xl text-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Hero

