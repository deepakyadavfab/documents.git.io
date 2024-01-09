import React from 'react'
import { FaFile } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:0o0,bounceDamping: 10}}
    className=' relative flex-shrink-0 w-40 h-60 rounded-[25px] bg-zinc-900/90 text-white  px-5 py-10 overflow-hidden'>
        <FaFile/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0    w-full  left-0'>
         <div className='flex items-center justify-between py-3 px-8   mb-1'>
            <h5>{data.filesize}</h5>
            <span className='w-4 h-4 bg-zinc-600 rounded-full items-center justify-center'>
               {data.close ?<IoIosClose/> : <MdOutlineFileDownload size=".em"/>} 
            
            </span>
        </div>
          
          {
            data.tag.isOpen && (
                <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex item-center justify-center`}>
                <h3 className='text-sm font-semibold'> {data.tag.tagTitle}</h3>
             </div>
            ) }

      
    </div>
    </motion.div>
  )
}

export default card
