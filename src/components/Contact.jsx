import { CONTACT } from "../constants"
import {motion} from 'framer-motion'
import toast from "react-hot-toast"

const Contact = ()=> {
    const copyContent = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('text copied')
            console.log('Content copied to clipboard');
          } catch (err) {
            toast.error('text not copied')
            console.error('Failed to copy: ', err);
          }
    }
    
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            className="my-10 text-center text-4xl">Get in touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="my-4 cursor-pointer" onClick={() => copyContent(CONTACT.phoneNo)}>{CONTACT.phoneNo}</motion.p>
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="my-4 underline cursor-pointer" onClick={() => copyContent(CONTACT.email)}>{CONTACT.email}</motion.p>
            </div>
        </div>
    )
}

export default Contact;