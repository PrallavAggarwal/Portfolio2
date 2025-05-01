import logo from '../assets/kevinRushLogo.png'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {

    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className='font-bold text-2xl'>Pr</span>
                {/* <img src={logo} alt="logo" className='mx-2 w-10' /> */}
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/prallav-aggarwal-8a5168221/" target='blank'><FaLinkedin /></a>
                <a href="https://github.com/PrallavAggarwal" target='blank'><FaGithub /></a>
                
                {/* <FaSquareXTwitter /> */}
                {/* <FaInstagram /> */}
            </div>
        </nav>
    )
}

export default Navbar;