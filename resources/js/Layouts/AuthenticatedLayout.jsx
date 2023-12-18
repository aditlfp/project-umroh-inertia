import AdminLayout from "@/Pages/Admin/AdminLayout";
import { useState } from "react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <AdminLayout user={user}>{children}</AdminLayout>
        </>
    );
}
