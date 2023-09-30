import { useState } from 'react';
import Logo from './image/TSS.jpg';
import { Link } from 'react-router-dom';
import { MdMenuOpen } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';



function Navbar() {
    const [tog, setTog] = useState(false);

    return (
        <>
            <header className='flex justify-between p-3 my-2 container mx-auto'>
                <div className='flex items-center'>
                    <img src={Logo} className='w-[10%] rounded-[70%]' />
                </div>

                <ul className='gap-5 items-center text-xl brightness-300 text-[#ffa65d] hidden md:flex'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'> Services</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='/contact'> Contact</Link></li>
                    {/* <li><Link to='/career'>Career</Link></li> */}
                </ul>
                {
                    tog ?
                        <AiOutlineClose onClick={() => { setTog(!tog) }} className='text-[#f06d02] text-5xl  md:hidden block' />
                        :
                        <MdMenuOpen onClick={() => { setTog(!tog) }} className='text-[#f06d02] text-5xl  md:hidden block' />
                }
            </header>
            {/* For responsive Menu bar */}

            <ul className={`z-50 duration-300 md:hidden p-5 gap-7 text-white w-[300px] text-center text-2xl fixed bg-[#f06d02] top-[90px] ${tog ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-5'><Link to='/'>Home</Link></li>
                <li className='p-5'><Link to='/services'>Services</Link></li>
                <li className='p-5'><Link to='/about'>About</Link></li>
                <li className='p-5'><Link to='/contact'>Contact</Link></li>
                {/* <li className='p-5'><Link to='/career'>Career</Link></li> */}

            </ul>
        </>
    )
}
export default Navbar;