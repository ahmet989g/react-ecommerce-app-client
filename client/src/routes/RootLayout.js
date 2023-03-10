import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function RootLayout(){
    return(
        <>
            <Navbar/>
            <div id="content">
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout;