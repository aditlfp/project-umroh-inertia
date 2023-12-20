import Sidebar from "@/Layouts/SidebarLayout/Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="flex h-full w-fit">
                <Sidebar>
                    <div className="flex p-4 w-fit">{children}</div>
                </Sidebar>
            </div>
        </>
    );
};

export default AdminLayout;
