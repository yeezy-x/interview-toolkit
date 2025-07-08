import { useContext, useState } from 'react'
import {APP_FEATURES} from '../utils/data';
import { useNavigate } from 'react-router-dom';
import {LuSparkles} from 'react-icons/lu';
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { UserContext } from '../context/UserContext';
import { ProfileInfoCard } from '../components/Cards/ProfileInfoCard';
import logo from '../assets/Hero_IMG.png'
const LandingPage = () => {
    const {user}=useContext(UserContext);
    const navigate=useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');

    const handleCTA = () => {
        if(!user){
            setOpenAuthModal(true)
        }else{
            navigate('/dashboard')
        }
    };

    return (
        <div className='bg-[#FFFCEF]'>
            <div className='w-full min-h-full bg-[#FFFCEF]'>
                <div className='w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0'/>

                <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
                    <header className='flex justify-between items-center mb-16'>
                        <div className='text-xl text-black font-bold'>Interview Prep AI</div>
                        <div>Code Editor</div>
                        <div>Resume Matcher</div>
                        {user ? ( <ProfileInfoCard/>) : 
                        (<button className='bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm 
                        font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white
                        border border-white transition-colors cursor-pointer ' 
                            onClick={() => setOpenAuthModal(true)}>
                            Login / SignUp
                        </button>)}

                        
                    </header>

                    {/* Hero Section */}
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
                            <div className='flex items-center justify-left mb-2'>
                                <div className='flex items-center gap-2 text-[13px] text-amber-600 
                                font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>
                                <LuSparkles/> AI Powered</div>
                            </div>

                            <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>Ace Interviews with <br/>
                            <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,#FF9324_0%,#FCD760_100%)] bg-[length:200%_200%] bg-[position:0%_50%] animate-text-shine">AI-Powered</span> Learning
                            </h1>
                        </div>

                        <div className='w-full md:w-1/2'>
                            <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6'>
                                Get role-specific questions, expand answers when you need them, dive <br/>
                                deeper into concepts, and organize everything your way. From <br/>
                                preparation to mastery — your ultimate interview toolkit is here.
                            </p>

                            <button className=' bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer' onClick={handleCTA}>Get Started</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='w-full min-h-full relative z-10'>
                <div>
                    <section className='flex items-center justify-center -mt-36'>
                        <img src={logo} alt="Hero Image" className='w-[80vw] rounded-lg'/>
                    </section>
                </div>
            </div>
            
            <div className='w-full min-h-full bg-[#FFFCEF] mt-10'>
                <div className='container mx-auto px-4 pt-10 pb-20'>
                    <section className='mt-5'>
                        <h2 className='text-5xl text-black font-medium mb-12 leading-tight text-center'>
                            Features That Make You Shine
                        </h2>
                        <div className='flex flex-col items-center gap-8'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                                    {APP_FEATURES.slice(0,3).map( (feature) => (
                                        <div key={feature.id} className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'>
                                            <h3 className='text-base font-semibold mb-3'>
                                                {feature.title}
                                            </h3>
                                            <p className='text-gray-600'>{feature.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    {APP_FEATURES.slice(3).map( (feature) =>(
                                        <div key={feature.id} className='bg-[#FFFEF8] p-6 rounder-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'>
                                            <h3 className='text-base font-semibold mb-3'>{feature.title}</h3>
                                            <p className='text-gray-600'>{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className='mt-10 pt-8 pb-6 border-t bg-[#FFFCEF] border-gray-200'>
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-4">
                    <p className="text-3xl text-black font-medium mb-6 leading-tight">
                    Let’s crack those interviews together... <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,#FF9324_0%,#FCD760_100%)] bg-[length:200%_200%] bg-[position:0%_50%] animate-text-shine">Happy Coding 🚀</span>
                    </p>
                    <div className="flex gap-5 mt-2">
                        <a href="https://github.com/yourprofile" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-black transition">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter" className="text-gray-600 hover:text-blue-500 transition">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700 transition">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                    {/* Optional Copyright */}
                    <p className="text-xs text-gray-400 mt-3">&copy; {new Date().getFullYear()} InterviewPrepApp. All rights reserved.</p>
                </div>
        </div>

        <Modal isOpen={openAuthModal}
            onClose={()=>{
                setOpenAuthModal(false)
                setCurrentPage("login")
            }}
            hideHeader
        >
            <div>
                {currentPage==="login" && (
                    <Login setCurrentPage={setCurrentPage}/>
                )}
                {currentPage==="signup" && (
                    <SignUp setCurrentPage={setCurrentPage}/>
                )}
            </div>
        </Modal>
        </div>
    )
}

export default LandingPage