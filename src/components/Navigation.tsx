import {useState} from "react";
import {navbarIcons} from "../utils/mock.ts";

export default function Navigation() {

    const [navbarItems, setNavbarItems] = useState(navbarIcons);

    return (
        <div className="flex flex-row">
            <div id="main-title">
                <h3>WATI</h3>
            </div>
            <div id="nav-item">
                <ul>
                    {navbarItems.map(item => <li>
                        <span>{item.icon}</span>{item.label}</li>)}
                </ul>
            </div>
            <div id="notifications-section">

            </div>
            <div id="advert-section">

            </div>
            <div id="profile-section">

            </div>
        </div>
    )
}