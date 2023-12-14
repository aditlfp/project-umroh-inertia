import { useState } from "react";
import Sidebar from "./SidebarLayout/Sidebar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Sidebar user={user}>

            </Sidebar>
        </>
    );
}
