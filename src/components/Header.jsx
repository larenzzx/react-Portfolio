import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className='flex items-center justify-between bg-neutral py-4 px-6 sticky top-0 z-50'>

            {/* <img src={logo} alt="" /> */}
            <div className='flex items-center gap-x-1'>
                <FontAwesomeIcon icon={faBolt} className='text-primary' />
                <h1 className='text-primary font-bold text-lg'>larenzz</h1>
            </div>
            <ul className='flex items-center gap-x-4 text-white font-bold'>
                
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    {/* <a href="#">About</a> */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">About</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-primary rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>1</a></li>
                            <li><a>2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>



        </div>
    );
}

export default Header 