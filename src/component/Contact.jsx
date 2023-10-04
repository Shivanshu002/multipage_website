import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import ConPic from '../image/ConPic.png';
function Contact() {
    return (
        <>
            <div className='flex justify-center container mx-auto my-10'>
                <img src={ConPic} className='w-[700px]' />
            </div>


            <div className='container mx-auto flex lg:flex-row flex-col justify-between my-28 gap-6 md:p-0 p-4'>
                <div className='bg-blue-100 w-full p-5 flex flex-col items-center rounded-lg gap-4'>
                    <MdLocationOn size={70} className='text-blue-500 ' />
                    <h1 className='text-xl text-blue-500 font-semibold'>OUR MAIN OFFICE</h1>
                    <p className='font-serif text-center'>67A, Vipin Garden, Near By Som Bazar Road, Dwarka Mor, Uttam Nagar, New Delhi 110059</p>
                </div>

                <div className='bg-blue-100 w-full p-5 flex flex-col items-center rounded-lg gap-4'>
                    <BsFillPhoneFill size={70} className='text-blue-500 ' />
                    <h1 className='text-xl text-blue-500 font-semibold'>PHONE NUMBER</h1>
                    <p className='font-serif'>7982305259</p>
                    <p className='font-serif'>011-45053619(Toll Free)</p>
                </div>

                <div className='bg-blue-100 w-full p-5 flex flex-col items-center rounded-lg gap-4'>
                    <FaFax size={70} className='text-blue-500 ' />
                    <h1 className='text-xl text-blue-500 font-semibold'>FAX</h1>
                    <p className='font-serif'>0012356</p>
                </div>

                <div className='bg-blue-100 w-full p-5 flex flex-col items-center rounded-lg gap-4'>
                    <MdEmail size={70} className='text-blue-500 ' />
                    <h1 className='text-xl text-blue-500 font-semibold'>EMAIL</h1>
                    <p className='font-serif'><a href='mailto:kvatul@tamannasoftware.com'>kvatul@tamannasoftware.com</a></p>
                </div>
            </div>

            <div>



                <div className='flex lg:flex-row flex-col justify-between container mx-auto gap-10 my-[200px]'>
                    <div className='lg:w-1/2 w-full flex flex-col gap-8 p-3'>
                        <h1 className='text-4xl text-white text-center font-bold'>GET IN TOUCH</h1>
                        <p className='text-white text-center text-2xl'>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</p>
                        <p className='text-white text-center'>Our software company consistently delivers innovative solutions, streamlining processes, enhancing productivity, and ensuring client success. We provide reliable support, empowering clients to thrive in their endeavors</p>
                        <div className='flex gap-8 justify-center'>
                            <FiFacebook size={40} className='text-white' />
                            <RiTwitterXFill size={40} className='text-white' />
                            <FiInstagram size={40} className='text-white' />
                            <AiFillLinkedin size={40} className='text-white' />
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full p-3'>
                        <form method='POST' action='' className='flex flex-col gap-8' >
                            <input className=" h-14 border-orange-300 border-b-4 p-2 bg-transparent text-gray-100" type="text" placeholder="Name" name="name" required />
                            <input className=" h-14 border-orange-300  border-b-4 bg-transparent my-4 p-2 text-gray-100 " type="email" placeholder="Email" name="name" required />
                            <textarea className=" border-orange-300 border-b-4 bg-transparent p-2 text-gray-100" name='message' cols='15' rows='5' placeholder=" Message" required></textarea>
                            <div className='flex justify-center'>
                                <button className='p-3 w-[200px] bg-[#fa9746] text-white font-semibold font-sans rounded-lg'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;