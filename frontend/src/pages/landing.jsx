import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import LandingPageImg from '../assets/LandingPageImg.png'
export default function LandingPage() {


    const router = useNavigate();
    return (

        

        <div className="landingPageContainer h-[calc(100vh-40px)] w-full px-10" style={{ color: "#fff" }}>
            <nav className='flex justify-between mt-10 items-center py-[1.5rem] px-[3rem] rounded-xl' style={{boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)"}}> 
                <div className='navHeader'>
                    <h1 className="text-4xl"><span style={{ color: "#FF9839" }}>Face</span>Link</h1>
                </div>
                <div className='navlist flex justify-center items-center gap-8' style={{cursor:"pointer"}}>
                    <p className='' onClick={() => {
                        router("/aljk23")
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
            </nav>
            <div className="landingMainContainer row flex justify-center mt-20 items-center px-[3rem]">
                <div className='w-3/6'>
                    <h1 className='text-start leading-[1.1]' style={{fontSize:"5.2rem"}}><span style={{ color: "#FF9839" }}>Spend</span> Your Time With <span style={{color:"#FF2C2C"}}> Loved</span> Ones</h1>

                    <p className='text-xl px-4 py-3 text-start' style={{color:"#6b6666ff"}}>Cover a distance by FaceLink Video Call</p>
                    <div role='button' className='px-25 py-3 mt-5 rounded-xl' style={{background:"#D97500", width:"fit-content"}}>
                        <Link to={"/auth"} className='text-decoration-none text-white text-xl'>Get Started</Link>
                    </div>
                </div>
                <div className='w-2/6 flex justify-end'>

                    <img className='rounded-3' src={LandingPageImg} alt="" style={{height:"500px"}} />
                    

                </div>
            </div>
        </div>
    )
}