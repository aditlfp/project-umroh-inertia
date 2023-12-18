function FooterAdmin() {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="text-white text-center mx-1 fixed bottom-0">
                <hr />
                <span className="bg-[#C69749] w-fit px-2">
                    copyright {year} sac-po.com
                </span>
                <hr />
            </footer>
        </>
    );
}

export default FooterAdmin;
