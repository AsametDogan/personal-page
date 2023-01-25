import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../media'

function MainPage() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/files/cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv.pdf';
                alink.click();
                console.log("first")
            })
        })
    }
    //<img className='max-h-screen opacity-90' alt='profile-picture' src={ProfilePic} />

    const content = "I am computer engineering student at Gazi University. Also I am member of board of Artifical Intelligent Gazi Student Chapter. As the Community of Gazi AI, we organize trainings, social activities, programs of seminar."+
    "\nI have taken Object Oriented Programming (OOP) with Java, Data Structures, C# Visual Programming lectures from the University."+
    "\nI am open to learning. I want to be improved myself about Datascience and Machinelearning. Therefore, I learnt python programming language to use it introduct to Datascience by myself. "+
    "\nI am looking for internship from a company which provide to improve myself about Artifical Inteligent or Data Science."
    return (
        <div className="flex flex-row sm:flex-col md:flex-col h-full w-full justify-start overflow-y-scroll overflow-x-hidden scrollbar-hide md:gap-2 sm:gap-1 ">
            <div className='flex md:self-center sm:self-center items-center  ' >
                <img className=' w-full min-w-[250px] max-w-[450px] ' alt='profile' src={ProfilePic}></img>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 md:gap-2 sm:gap-1'>
                <div className='max-w-[90%] md:max-w-[95%] sm:max-w-[95%]'>
                    <div className='text-4xl font-semibold font-serif px-2'>About Me</div>
                    <div className='w-full bg-gradient-to-t from-blueberrybackground via-white to-blueberrybackground text-justify p-6 md:p-4 sm:p-1.5 leading-relaxed whitespace-pre-line'>{content} </div>
                    <div className='px-2'><span className='text-xs tracking-wider opacity-80 font-light font-serif italic'>Open to Work / Internship</span></div>
                </div>
            </div>
        </div>
    )
}

export default MainPage