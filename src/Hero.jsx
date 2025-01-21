import logo from './assets/react.svg'

function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={logo} alt="" className='mx-auto size-24 mb-4 animate-bounce' />
                    <h1 className="text-5xl font-bold">ReactJS</h1>
                    <p className="py-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos quo tenetur laboriosam neque explicabo laborum molestiae maxime vero, suscipit deserunt dolorum magnam quae numquam beatae. Est delectus nobis cum!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero 