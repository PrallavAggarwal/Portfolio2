import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import {FaNodejs} from 'react-icons/fa'
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(1.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className='text-7xl ' />
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className='text-7xl text-yellow-500'/>
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className='text-7xl text-blue-500'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGit className='text-7xl text-orange-500'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-blue-500'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className='text-7xl text-green-800'/>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies;