
// import HomeLogo from '../assets/logo.png'
// import NewtLogo from '../assets/logo2.png'
import AgainLogo from '../assets/logo3.png'
import HerImage from '../assets/HeroLaptop-ae6f523d.webp'
import SecondHeroImage from '../assets/editor.svg'

const LandingPage = ()=>{
    return(
        <>
            <div className="w-screen h-screen bg-gradient-to-t to-[#04083a] via-[#243642] from-[#387478] "> 
                <nav className="w-screen h-10 p-4">
                    <div className="w-2/3 mx-auto flex justify-between">
                        <div className='flex gap-4 p-2 items-center justify-between w-[60%]'>
                            <div className='w-full h-full p-2 flex  text-white items-center text-xl font-semibold cursor-pointer'>
                               <img src={AgainLogo} className='w-16 h-16 ' ></img>
                               <h1 className='text-lg font-medium pt-2'>CODEX.<span className='text-sm font-thin'>Code</span></h1>
                            </div>
                            <div className="text-gray-300 text-lg flex gap-11">
                                <button className='hover:text-gray-100 hover:border-b-2 border-white/50 w-14'>Home</button>
                                <button className='hover:text-gray-100 hover:border-b-2 border-white/50 w-14'>Blog</button>
                                <button className='hover:text-gray-100 hover:border-b-2 border-white/50 w-14'>Docs</button>
                                <button className='hover:text-gray-100 hover:border-b-2 border-white/50 w-14'>Teams</button>
                            </div>
                        </div>
                        <div className="text-white  flex gap-8 w-[40%] justify-end py-7 px-4">
                            <button className='bg-blue-900 rounded-md w-24 hover:border-2 hover:border-white/50'>Login</button>
                            <button className='bg-blue-900 rounded-md w-24 border-2 border-white/50 hover:border-white'>Signup</button>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className='bg-blue-100 w-[800px] h-[300px] top-10 mt-16 mx-auto'>
                        <div>
                            <h1></h1>
                        </div>
                    </div>
                    <div className='w-1/2 h-[500px] bg-gradient-to-t to-[#0b2f46] from-[#529397]   mx-auto rounded-t-xl shadow-2xl shadow-gray-900 relative'>
                        <div className='relative w-[95%] h-[95%] top-6 mx-auto bg-gradient-to-t to-[#113952] from-[#529397]  rounded-t-xl shadow-2xl shadow-gray-900 '>
                            <div className='relative w-[95%] h-[95%] top-6 mx-auto rounded-t-xl shadow-2xl shadow-gray-900 '>
                                <img src={SecondHeroImage} className='w-[100%] h-[100%] mx-auto'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage