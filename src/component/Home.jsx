import HeadImage from '../image/headImage.png';
import Backbone from '../image/backbone.png';

function Home() {
    return (
        <>

            <div className='lg:my-5 my-40' >
                <img src={HeadImage} className='md:w-[1000px] w-[800]' />
            </div>
            <div className=" flex md:flex-col flex-col my-4">

                <div className='box-border h-fit md:w-fit w-30 bg-gray-100 rounded-xl m-y-10 absolute lg:ms-[750px] ms-0 top-[500px]  p-8  '>
                    <div className=''>
                        <h1 className='text-4xl  font-semibold font-serif text-[#85b3ef]'>IT COMPANY</h1>
                    </div>
                    <div>
                        <p className='text-start  font-sans text-2xl my-4 text-slate-800 '>
                            Tamanna Software: Crafting exclusive digital solutions for your success.
                            Explore our expertise today and elevate your online presence with tailored excellence.
                            Your journey to digital success starts here.
                        </p>
                        <button className='bg-[#5595e8] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg '>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='box-border h-72 w-full p-4'></div>

            <div className='flex md:flex-row flex-col md:my-5 my-[500px] container mx-auto'>
                <div className='my-10 md:w-1/2 w-full p-8 space-y-3'>
                    <h1 className='text-4xl text-[#b8d3f6] font-semibold'>The Backbone for Internet Business</h1>
                    <p className='text-[#d8e9ff]  text-start'>
                        Operating a software company, our mission aligns closely with the concept of <span className='text-black'>The backbone for internet business.</span>
                        We specialize in creating cutting-edge software solutions that enhance and secure the digital infrastructure crucial for online commerce and services. Our team is dedicated to providing innovative tools and technologies, empowering businesses to thrive in the digital landscape. As technology pioneers, we're committed to shaping the future of internet business by offering scalable, reliable, and efficient software solutions
                    </p>
                </div>
                <div className='md:w-1/2 flex justify-center w-full'>
                    <img src={Backbone} />
                </div>
            </div>
        </>
    )
}

export default Home;