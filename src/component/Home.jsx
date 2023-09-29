import HeadImage from '../image/headImage.png';
import Backbone from '../image/backbone.png';
import HeadBack from '../image/headBackDraw.webp';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import Services from './Services';


function Home() {

    const [countOn, setcountOn] = useState(0);
    const happyClients = <CountUp start={0} end={1100} duration={3} delay={0} />
    const finishedProjects = <CountUp start={0} end={1700} duration={3} delay={0} />
    const minimumBudgets = <CountUp suffix=' INR' start={0} end={20000} duration={3} delay={0} />

    return (
        <>
            <div className=''>
                <div className='lg:my-5 my-40' >
                    <img src={HeadBack} className='md:w-[700px] w-[200px] brightness-100' />
                    <img src={HeadImage} className='md:w-[900px] w-[800px] brightness-100 absolute top-[150px]' />
                </div>

                <div className=" flex md:flex-col flex-col my-4 p-2">

                    <div className='box-border h-fit md:w-fit w-30 brightness-100 bg-gray-100 rounded-xl absolute lg:ms-[750px] ms-0 lg:top-[500px] p-8  '>
                        <div className=''>
                            <h1 className='text-4xl  font-semibold font-serif text-[#85b3ef]'>IT COMPANY</h1>
                        </div>
                        <div>
                            <p className='text-start  font-sans text-2xl my-4 text-slate-800'>
                                Tamanna Software: Crafting exclusive digital solutions for your success.
                                Explore our expertise today and elevate your online presence with tailored excellence.
                                Your journey to digital success starts here.
                            </p>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg '>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box-border h-[100px] w-full p-4'></div>

            <div className='flex md:flex-row flex-col justify-evenly md:my-3 my-[300px]'>
                <div className='my-10 md:w-1/2 w-full p-7 space-y-5'>
                    <h1 className='text-4xl text-[#b8d3f6] font-semibold'>The Backbone for Internet Business</h1>
                    <p className='text-[#d8e9ff]  text-start'>
                        Operating a software company, our mission aligns closely with the concept of <span className='text-black'>The backbone for internet business.</span>
                        We specialize in creating cutting-edge software solutions that enhance and secure the digital infrastructure crucial for online commerce and services. Our team is dedicated to providing innovative tools and technologies, empowering businesses to thrive in the digital landscape. As technology pioneers, we're committed to shaping the future of internet business by offering scalable, reliable, and efficient software solutions
                    </p>
                    <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg '>LEARN MORE</button>
                </div>

                <div className='md:w-1/2 w-[350px] flex justify-center'>
                    <img src={Backbone} />
                </div>
            </div>

            <ScrollTrigger onEnter={() => setcountOn(true)} onExit={() => setcountOn(false)}>

                <div className='flex md:flex-row flex-col justify-between  p-7 pt-11 pb-11'>

                    <div className='space-y-5 md:my-0 my-3 h-fit w-1/3'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && happyClients}+</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg'>HAPPY CLIENTS</h1>
                        <p className='text-[#d8e9ff]  text-start p-2'>I am thoroughly satisfied with this software company.
                            Their product is exceptional, user-friendly, and has significantly improved my workflow.
                            It's a game-changer </p>
                    </div>

                    <div className='space-y-5 md:my-0 my-3 w-1/3'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && finishedProjects}+</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg'>FINISHED PROJECTS</h1>
                        <p className='text-[#d8e9ff]  text-start p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt, excepturi </p>
                    </div>

                    <div className='space-y-5 md:my-0 my-3 w-1/3'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && minimumBudgets}</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg'>MINIMUM AMMOUNT</h1>
                        <p className='text-[#d8e9ff]  text-start p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt, excepturi </p>
                    </div>

                </div>
            </ScrollTrigger>
            <Services />
        </>
    )
}

export default Home;