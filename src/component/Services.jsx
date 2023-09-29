import servicesImage3 from '../image/servicesImage3.png';
import servicesImage2 from '../image/servicesImage2.png';
import servicesImage1 from '../image/servicesImage1.png';


function Services() {
    return (
        <>

            <div className="bg-slate-200 p-3">
                <div className="flex flex-col items-center gap-10 my-4">
                    <h1 className="md:text-5xl text-3xl text-[#5595e8] font-bold ">Company Services</h1>
                    <p className="h-[100px] lg:w-1/2 w-[300px] text-xl text-center">We are excels in delivering top-notch solutions to clients.
                        Their expertise ensures the best software solutions, guaranteeing client satisfaction and success.</p>
                </div>


                <div className='flex lg:flex-row flex-col justify-evenly lg:my-5 my-20'>

                    <div className='bg-white rounded-lg h-[600px] w-[350px]'>
                        <img src={servicesImage3} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Forex Web App</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg h-[600px] w-[350px]'>
                        <img src={servicesImage2} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Static Web</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg h-[600px] w-[350px]'>
                        <img src={servicesImage1} className='w-[400px] p-10' />
                        <h1 className='text-center text-[#5595e8] font-bold text-2xl my-3'>Mobile App</h1>
                        <p className='p-2 text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className='flex justify-center my-5'>
                            <button className='bg-[#fa9746] p-2 w-40  text-xl font-bold text-white  hover:bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg'>LEARN MORE</button>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Services;