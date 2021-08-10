import React from 'react'
import {Link} from 'react-router-dom'
import "../css/SideNav.css"


const SideNavData = [
    {
        title: "Class Enrollment",
        link: "/ClassEnrollement"
    },
    {
        title: "Transcripts",
        link: "/Transcripts"
    }, 
    {
        title: "GPA Calculator",
        link: "/GpaCalculator"
    }
]


function SideNav() {
    return (
        <div className ="SideNav">
            <ul className = "SideNavList">
            {SideNavData.map((val,key)=>{
                return(
                    <li key = {key} className = "row-sidebar" >
                        <Link to = {val.link} style ={{color:'black'}} > {val.title} </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SideNav;
