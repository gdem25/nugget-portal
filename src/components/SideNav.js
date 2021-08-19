import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import  '../css/SideNav.css'

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
    },
    {
        title: "Administration",
        link: "/Admin"
    }
]

class SideNav extends React.Component {

renderMenuItem = () => {
    return SideNavData.map((item, index) => {
        return(
            <Menu.Item
                key={index}
                as={Link}
                to={item.link}
                name={item.title} 
            />
        )
    })
}


    render() {
        return(
            <Menu fluid vertical inverted  color='pink'  tabular style={{ height: '100vh' }}  >
                {this.renderMenuItem()}
            </Menu>
        )
    }
}

export default SideNav;
