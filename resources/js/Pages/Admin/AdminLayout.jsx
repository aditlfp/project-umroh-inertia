import Sidebar from "@/Layouts/SidebarLayout/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="flex h-screen w-fit">
                <Sidebar>
                    <div className="flex p-4 w-fit">{children}</div>
                </Sidebar>
            </div>
        </>
    );
};

export default AdminLayout;
