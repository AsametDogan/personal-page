import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md"
import { BsClipboardCheck } from "react-icons/bs"
import { TfiEmail } from "react-icons/tfi"
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2"
import { EmailIcon, GitHubIcon, LinkedInIcon, ProfilePic } from '../media'



function ContactPage() {
    const [copiedText, setCopiedText] = useState("");



    const Value = (key, value) => {
        return (
            <div key={key} className='flex flex-row gap-2 justify-center items-center'>
                <span className='font-semibold'>{key}:</span>
                <div className='flex flex-row items-center gap-1 bg-gradient-to-r from-blueberrybackground via-white to-blueberrybackground px-2  py-1  rounded-lg border border-white select-all' type="text">
                    {value}
                </div>
            </div>
        )
    }
    const CopiableValue = (key, value) => {
        const handleClickCopy = () => {
            setCopiedText(value)
            navigator.clipboard.writeText(value);
        }
        return (
            <div key={key} className='flex flex-row gap-2 justify-center items-center'>
                <span className='font-semibold'>{key}:</span>
                <div className='flex flex-row items-center gap-1 bg-gradient-to-r from-blueberrybackground via-white to-blueberrybackground px-2  py-1  rounded-lg border border-white'>
                    <a href={"https://www." + value} target="_blank">{value}</a>
                    <button onClick={handleClickCopy} className='p-1 group'>{copiedText === value ? <BsClipboardCheck className='opacity-70 group-hover:scale-105 group-hover:opacity-90 ' /> : <MdContentCopy className='opacity-70 group-hover:scale-105 group-hover:opacity-90' />}</button>
                </div>
            </div>
        )
    }

    const datas = [
        { key: "Name", value: "Ebru Nur" },
        { key: "Surname", value: "Uslu" },
        { key: "Location", value: "Ankara/Türkiye" },
        { key: "University", value: "Gazi University" },
        { key: "Department", value: "Computer Engineering" },
    ]
    const copaibleDatas = [
        { key: "Mail", value: "ebruebg@hotmail.com" },
        { key: "GitHub", value: "github.com/Ebru-Nur" },
        { key: "LinkedIn", value: "linkedin.com/in/ebrunuruslu/" },
    ]



    return (
        <div className="flex flex-row sm:flex-col md:flex-col h-full w-full justify-start overflow-y-scroll overflow-x-hidden scrollbar-hide md:gap-2 sm:gap-1 p ">
            <div className='flex md:self-center    sm:self-center items-center ' >
                <img className=' w-full min-w-[250px] max-w-[450px] ' alt='profile' src={ProfilePic}></img>
            </div>
            <div className='flex flex-col items-center justify-between h-[85%] md:h-[90%] sm:h-[95%] self-center w-full py-3 '>
                <div className=' w-full px-12 lg:px-8 md:px-6 sm:px-2 text-4xl md:text-3xl sm:text-xl font-serif font-bold'>Contact Me</div>
                <div className=' flex flex-wrap justify-center items-center just-lg:gap-8 lg:gap-6 md:gap-4 sm:gap-2  w-full h-full px-4 md:px-3 sm:px-2 py-3 md:py-2 sm:py-1 '>
                    {datas.map((data, index) => (Value(data.key, data.value)))}
                    {copaibleDatas.map((data, index) => (CopiableValue(data.key, data.value)))}

                </div>
                <div className='flex flex-row  gap-2.5'>
                    <a href="" target="_blank" className='p-1 rounded-lg group' ><img className='w-6 h-6 group-hover:scale-105 group-hover:animate-bounce' alt='email' src={EmailIcon} /></a>
                    <a href="https://www.github.com/Ebru-Nur" target="_blank" className='p-1 rounded-lg group' ><img className='w-6 h-6 group-hover:scale-105 group-hover:animate-bounce' alt='github' src={GitHubIcon} /></a>
                    <a href="https://www.linkedin.com/in/ebrunuruslu/" target="_blank" className='p-1 rounded-lg group' ><img className='w-6 h-6 group-hover:scale-105 group-hover:animate-bounce' alt='linkedin' src={LinkedInIcon} /></a>
                </div>
            </div>
        </div>

    )
}

export default ContactPage