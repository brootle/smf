import SidebarMenuStyles from "./SidebarMenu.module.css"

import { Link } from "react-router-dom";

export default function SidebarMenu() {

    const menuItemsList = [
        {
            name: "WOMEN'S FASHION LANE",
            link: '/women-fashion'
        },
        {
            name: "EDUCATION LANE",
            link: '/education'
        },    
        {
            name: "MEN'S FASHION LANE",
            link: '/men-fashion'
        },   
        {
            name: "HEALTH/FITNESS/NUTRITION",
            link: '/health'
        },     
        {
            name: "SMILINGFACES EXPOSE",
            link: '/expose'
        },  
        {
            name: "SMILINGFACESDATE",
            link: '/date'
        }, 
        {
            name: "NETWORK4SUCCESS",
            link: '/success'
        },                
    ]

    let mainMenuItems = menuItemsList.map( ({name, link }, index) => 
        <li key={index}>
            <Link to={link}>{name}</Link>
        </li>
    )

    return(       
        <div className={SidebarMenuStyles.container}>
            <ul>{mainMenuItems}</ul>
        </div>
    )
}