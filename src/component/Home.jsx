import HeadImage from '../image/headImage.png';
import Backbone from '../image/backbone.png';
import HeadBack from '../image/headBackDraw.webp';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import Services from './Services';
import About from './About';


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

                <div className=" flex md:flex-col flex-col my-4  md:ms-[700px] p-2 h-fit md:w-[600px] w-fit">

                    <div className='h-fit md:w-[600px] w-full brightness-100 bg-white rounded-xl absolute  md:top-[500px] top-[500px] p-4 '>
                        <div className=''>
                            <h1 className='text-4xl  font-semibold font-serif text-[#85b3ef]'>IT COMPANY</h1>
                        </div>
                        <div>
                            <p className='text-start  font-sans md:text-2xl text-xl my-5 text-slate-800'>
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

                    <div className='space-y-5 md:my-0 my-3 h-fit md:w-1/3 w-full'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && happyClients}+</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg text-center'>HAPPY CLIENTS</h1>
                        <p className='text-[#d8e9ff]  text-start p-2'>I am thoroughly satisfied with this software company.
                            Their product is exceptional, user-friendly, and has significantly improved my workflow.
                            It's a game-changer </p>
                    </div>

                    <div className='space-y-5 md:my-0 my-3 md:w-1/3 w-full'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && finishedProjects}+</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg'>FINISHED PROJECTS</h1>
                        <p className='text-[#d8e9ff]  text-start p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt, excepturi </p>
                    </div>

                    <div className='space-y-5 md:my-0 my-3 md:w-1/3 w-full'>
                        <h1 className='md:text-3xl text-5xl font-bold text-white p-2'>{countOn && minimumBudgets}</h1>
                        <h1 className='text-xl font-semibold p-2 text-white border border-orange-400 w-fit bg-[#fa9746] rounded-lg'>MINIMUM AMOUNT</h1>
                        <p className='text-[#d8e9ff] text-start  p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt, excepturi </p>
                    </div>

                </div>
            </ScrollTrigger>
            <Services />
        </>
    )
}

export default Home;