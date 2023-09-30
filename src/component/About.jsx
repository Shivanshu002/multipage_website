import WeDo from '../image/wedo.png';
import Backdraw from '../image/blobShap.png';
import AboutHead from '../image/aboutHead.png';


function About() {
    return (
        <>
            <div className='my-[100px] space-y-20'>

                <div className="space-y-7 ">
                    <h1 className="text-8xl text-[#b8d3f6] font-bold text-center">What We Do</h1>
                    <h1 className="text-2xl text-[#ffff] text-center">Sample text. Click to select the text box. Click again or double click to start editing the text.</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={WeDo} className='w-[900px]' />
                </div>

                <div className='flex justify-between gap-3 md:flex-row flex-col container mx-auto p-2'>
                    <div className='bg-[#fdd5b4] p-4 rounded-lg hover:p-3 duration-300'>
                        <div className='bg-white rounded-lg p-3 space-y-4'>
                            <h1 className='text-2xl font-bold text-[#fa9746]'>App Development</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non</p>
                            <h1 className='underline underline-offset-2 decoration-orange-500	'>MORE</h1>
                        </div>
                    </div>
                    <div className='bg-[#fa9746] p-4 rounded-lg hover:p-3 duration-300'>
                        <div className='bg-white rounded-lg p-3 space-y-4'>
                            <h1 className='text-2xl font-bold text-[#fa9746]'>Mobility Services</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non</p>
                            <h1 className='underline underline-offset-2 decoration-orange-500	'>MORE</h1>
                        </div>
                    </div>
                    <div className='bg-[#fdd5b4] p-4 rounded-lg hover:p-3 duration-300'>
                        <div className='bg-white rounded-lg p-3 space-y-4'>
                            <h1 className='text-2xl font-bold text-[#fa9746]'>Consulting</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non</p>
                            <h1 className='underline underline-offset-2 decoration-orange-500	'>MORE</h1>
                        </div>
                    </div>
                    <div className='bg-[#fa9746] p-4 rounded-lg hover:p-3 duration-300'>
                        <div className='bg-white rounded-lg p-3 space-y-4'>
                            <h1 className='text-2xl font-bold text-[#fa9746]'>SEO Services</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non</p>
                            <h1 className='underline underline-offset-2 decoration-orange-500	'>MORE</h1>
                        </div>
                    </div>

                </div>

            </div>

            <div className='bg-white space-y-20 p-10 py-10 '>
                <div className='flex justify-center static '>
                    <img src={Backdraw} className='w-[700px]' />
                    <img src={AboutHead} className='z-10  absolute  md:top-[1400px] w-[800px]' />
                </div>

                <div className='space-y-4 flex flex-col items-center'>
                    <h1 className='text-6xl  text-[#5595e8] font-semibold'>Commercial Software Solution</h1>
                    <p className='text-xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consequuntur commodi quis dolore sint itaque officia culpa quia aperiam voluptatum, necessitatibus beatae eius hic! Fugit adipisci optio pariatur sint maxime.</p>
                    <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg '>LEARN MORE</button>

                </div>
            </div>

        </>
    )
}
export default About;