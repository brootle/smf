import MainStyles from "./Main.module.css"

import SidebarMenu from './Menus/SidebarMenu'
import HorizontalMenu from './Menus/HorizontalMenu'

import PageContent from './PageContent'

export default function Main() {
    return(       
        <div className={MainStyles.container}>
            <div className={MainStyles.left}>
                <SidebarMenu />
            </div>
            <div className={MainStyles.center}>
                <HorizontalMenu />
                <PageContent />
            </div>
            <div className={MainStyles.right}>
                RIGHT
            </div>
        </div>
    )
}