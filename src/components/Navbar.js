import React, { useState } from 'react'
import { VscCloudDownload, VscHome } from 'react-icons/vsc';
import { BsPinAngle } from 'react-icons/bs'
import { SiBlueprint } from 'react-icons/si'
import { FiMenu } from 'react-icons/fi'
import { RiContactsLine } from 'react-icons/ri'
import { CV } from "../media/index"
import { DrawerMenu } from './index'
import { Link } from 'react-router-dom';

function Navbar() {
    const [pinBoard, setPinBoard] = useState(false)
    const handlePinBoard = () => {
        setPinBoard(!pinBoard)
    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        console.log("first")
        fetch('ebru.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ebru.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='flex flex-row h-screen  items-center group bg-blueberrybase  '>
            <div className='flex flex-col h-full justify-between just-sm:px-2 sm:px-1 py-2.5 '>
                <div className=''>
                    <button onClick={handlePinBoard} className='flex items-center justify-center text-2xl text-blueberrylemon p-0.5 hover:bg-blueberryyellow hover:text-blueberrydark transition-all rounded-lg'>{pinBoard ? <BsPinAngle /> : <FiMenu />}  </button>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <Link to="/" id='home' className='flex justify-center items-center text-2xl text-blueberrylemon p-0.5 hover:bg-blueberryyellow hover:text-blueberrydark transition-all rounded-lg '><VscHome /></Link>
                    <Link id='projects' className='flex justify-center items-center text-2xl text-blueberrylemon p-0.5 hover:bg-blueberryyellow hover:text-blueberrydark transition-all rounded-lg ' ><SiBlueprint /></Link>
                    <Link to="contact" id='contact' className='flex justify-center items-center text-2xl text-blueberrylemon p-0.5 hover:bg-blueberryyellow hover:text-blueberrydark transition-all rounded-lg ' ><RiContactsLine /></Link>
                </div>
                <button onClick={onButtonClick} className='text-2xl text-blueberrylemon p-0.5 hover:bg-blueberryyellow hover:text-blueberrydark transition-all rounded-lg  '><VscCloudDownload /></button>
            </div>
            <div className={`bg-blueberrylight h-full ${pinBoard ? "w-14" : "w-[0px]"}  group-hover:w-14 flex flex-col items-center justify-between transition-all py-2.5 text-blueberryyellow`}>

                <div className={`${pinBoard ? "" : "opacity-0 invisible group-hover:animate-tooltip_show"} py-1 px-1`} >Pin</div>
                <div className='flex flex-col gap-1.5 translate-y-1.5'>
                    <Link to="/" htmlFor="home" className={`${pinBoard ? "" : "opacity-0 invisible group-hover:animate-tooltip_show"}  p-1`}>Home</Link>
                    <Link htmlFor="projects" className={`${pinBoard ? "" : "opacity-0 invisible group-hover:animate-tooltip_show"}  p-1`}>Projects</Link>
                    <Link to="contact" htmlFor="contact" className={`${pinBoard ? "" : "opacity-0 invisible group-hover:animate-tooltip_show"}  p-1`}>Contact</Link>
                </div>
                <button className={`${pinBoard ? "" : "opacity-0 invisible group-hover:animate-tooltip_show"}  px-1`}><span className='text-xs'>CV Download</span></button>
            </div>

        </div>
    )
}

export default Navbar