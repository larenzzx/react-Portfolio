import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const HeaderLinks = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        url: '/about'
    },
    {
        id: 3,
        title: 'Projects',
        url: '/projects'
    },
    {
        id: 4,
        title: 'Contact',
        url: '/contact'
    }
]


function Header() {
  return (
    <>
        <div className='flex items-center justify-between bg-neutral py-4 px-6 sticky top-0 z-50'>
            <div className='flex items-center gap-x-1'>
                <FontAwesomeIcon icon={faBolt} className='text-primary' />
                <h1 className='text-primary font-bold text-lg'>larenzz</h1>
            </div>
            <ul className='flex items-center gap-x-4 text-white font-bold'>
                {HeaderLinks.map((link) => {
                    return(
                        <li key={link.id}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
  )
}

export default Header


// function Header() {
//     return (
//         <div className='flex items-center justify-between bg-neutral py-4 px-6 sticky top-0 z-50'>

//             <div className='flex items-center gap-x-1'>
//                 <FontAwesomeIcon icon={faBolt} className='text-primary' />
//                 <h1 className='text-primary font-bold text-lg'>larenzz</h1>
//             </div>
//             <ul className='flex items-center gap-x-4 text-white font-bold'>
                
//                 <li>
//                     <a href="#">Home</a>
//                 </li>
//                 <li>
//                     <a href="#">About</a>
//                 </li>
//                 <li>
//                     <a href="#">Projects</a>
//                 </li>
//                 <li>
//                     <a href="#">Contact</a>
//                 </li>
//             </ul>



//         </div>
//     );
// }

// export default Header 