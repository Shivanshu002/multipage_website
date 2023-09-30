import servicesImage3 from '../image/servicesImage3.png';
import servicesImage2 from '../image/servicesImage2.png';
import servicesImage1 from '../image/servicesImage1.png';
import SVG from '../image/evga.svg';


function Services() {
    return (
        <>

            <div className="bg-slate-200 p-3 items-center">
                <div className="flex flex-col items-center gap-10 my-4">
                    <h1 className="md:text-5xl text-3xl text-[#5595e8] font-bold ">Company Services</h1>
                    <p className="h-[100px] lg:w-1/2 w-[300px] text-xl text-center">We are excels in delivering top-notch solutions to clients.
                        Their expertise ensures the best software solutions, guaranteeing client satisfaction and success.</p>
                </div>


                <div className='flex md:flex-row flex-col justify-evenly md:my-5 my-20 items-center gap-4'>

                    <div className='bg-white rounded-lg h-[550px] w-[350px] hover:p-4 duration-500 hover:bg-orange-100 z-10'>
                        <img src={servicesImage3} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Forex Web App</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='h-[250px] w-full bg-[#fa9746] absolute brightness-100 '></div>

                    <div className='bg-white rounded-lg h-[550px] w-[350px] hover:p-4 duration-500 hover:bg-orange-100 z-10'>
                        <img src={servicesImage2} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Static Web</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg h-[550px] w-[350px] hover:p-4 duration-500 hover:bg-orange-100 z-10'>
                        <img src={servicesImage1} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Mobile App</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>


                </div>

            </div>

            <div className='flex md:flex-row flex-col my-[150px] gap-6 items-center'>

                <div className=' flex flex-col gap-9 md:w-1/2 w-full'>
                    <h1 className='text-6xl font-semibold text-[#b8d3f6] text-center'>
                        Large payments volume or unique business model?
                    </h1>
                    <div className='p-5 flex flex-col gap-6'>
                        <p className='text-[#ffff] text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et animi numquam corrupti omnis dolor, quisquam, maxime cum eum fuga odit officiis error aperiam cumque. Quae ab similique sed tempore nesciunt?</p>
                        <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg '>LEARN MORE</button>
                    </div>
                </div>

                <div className='flex flex-col gap-5 p-6'>
                    <div className='flex justify-between gap-5'>
                        <img src={SVG} className='w-[150px] p-3' />
                        <img src={SVG} className='w-[150px] p-3' />
                        {/* <img src={SVG} className='w-[150px] p-3' /> */}
                    </div>

                    <div className='flex justify-between gap-5'>
                        <img src={SVG} className='w-[150px] p-3' />
                        <img src={SVG} className='w-[150px] p-3' />
                        {/* <img src={SVG} className='w-[150px] p-3' /> */}
                    </div>
                    <div className='flex justify-between gap-5'>
                        <img src={SVG} className='w-[150px] p-3' />
                        <img src={SVG} className='w-[150px] p-3' />
                        {/* <img src={SVG} className='w-[150px] p-3' /> */}
                    </div>
                    <div className='flex justify-between gap-5'>
                        <img src={SVG} className='w-[150px] p-3' />
                        <img src={SVG} className='w-[150px] p-3' />
                        {/* <img src={SVG} className='w-[150px] p-3' /> */}
                    </div>

                </div>

            </div>

        </>
    )
}

export default Services;