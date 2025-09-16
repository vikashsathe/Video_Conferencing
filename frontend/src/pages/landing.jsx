import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import LandingPageImg from '../assets/LandingPageImg.png'
import { useState } from "react";
import MenuIcon from '../assets/menu-3-line.svg'
import CloseIcon from '../assets/close-large-line.svg'

export default function LandingPage() {

    const router = useNavigate();
    const [mobileNav, setMobileNav] = useState(false)
    return (

        

        <div className="landingPageContainer h-[calc(100vh-40px)] w-full px-0 md:px-10" style={{ color: "#fff" }}>
            <nav className='flex justify-between mt-10 items-center py-2 md:py-[1.5rem] px-3 md:px-[3rem] rounded-xl' style={{boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)"}}> 
                <div className='navHeader'>
                    <h1 className="text-2xl md:text-4xl"><span style={{ color: "#FF9839" }}>Face</span>Link</h1>
                </div>
                <div className='navlist hidden md:inline-flex flex justify-center items-center gap-2 md:gap-8' style={{cursor:"pointer"}}>
                    <p className='' onClick={() => {
                        router("/aljk2399")
                    }}>Join as Guest</p>
                      <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p className=''>Login</p>
                    </div>
                    <p className='rounded-xl px-4 py-2' style={{background:"#D97500", border:"none"}} onClick={() => {
                        router("/auth")

                    }}>Register</p>
                  
                </div>
                <div
                 onClick={() => setMobileNav(true)}
                 className="md:hidden w-8 h-8 bg-gray-600">
                    <img src={MenuIcon} className="bg-none" alt="" />
                </div>
                    
                             {mobileNav ? 
                             <div
                             className="absolute w-80 h-screen border-l-1 border-[#D97500] top-0 right-0 z-10 bg-gray-500" style={{  background: "linear-gradient(125deg, #001144 0%, #0055FF 70%, #66CCFF 100%)"}}>
                                <div className="p-5">
                                <img
                                src={CloseIcon}
                                className="w-10 bg-zinc-700 rounded-sm p-2"
                                onClick={() => setMobileNav(false)}
                                />
                                <div className="flex flex-col gap-5 mt-5">
                                 <p className='' onClick={() => {
                        router("/aljk2399")
                    }}>Join as Guest</p>
                      <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p className=''>Login</p>
                    </div>
                    <p className='rounded-md px-4 py-2' style={{background:"#D97500", border:"none"}} onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    </div>
                                </div>
                             </div>
                              : null}
                        
                
    

            </nav>
            <div className="landingMainContainer flex flex-col row md:flex-row justify-center mt-20 items-center px-3 md:px-[3rem]">
             
                <div className='w-2/6 flex justify-center'>

                    <img className='rounded-3 md:h-[500px] md:rotate-0 rotate-90' src={LandingPageImg} alt=""/>
                    

                </div>
                   <div className='w-full md:w-3/6'>
                    <h1 className='text-start leading-[1.1] text-[2.9rem] md:text-[5.2rem]'><span style={{ color: "#FF9839" }}>Spend</span> Your Time With <span style={{color:"#FF2C2C"}}> Loved</span> Ones</h1>
                    <div role='button' className='px-10 py-1 md:px-25 md:py-3 mt-5 rounded-xl' style={{background:"#D97500", width:"fit-content"}}>
                        <Link to={"/auth"} className='text-decoration-none text-white text-xl'>Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}