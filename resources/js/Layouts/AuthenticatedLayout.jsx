import AdminLayout from "@/Pages/Admin/AdminLayout";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <ToastContainer />
            <AdminLayout user={user}>{children}</AdminLayout>
        </>
    );
}
