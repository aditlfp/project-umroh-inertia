import { Helmet } from "react-helmet";

function FooterLayout() {
    const titleLink = () => {
        window.open("https://www.sac-po.com");
    };

    const Maps =
        "https://www.google.com/maps/place/PT.+SURYA+AMANAH+CENDIKIA/@-7.8641969,111.4922499,17z/data=!4m14!1m7!3m6!1s0x2e79a03442dc0001:0x23de62b66ccb6888!2sPT.+SURYA+AMANAH+CENDIKIA!8m2!3d-7.8642022!4d111.4948248!16s%2Fg%2F11t29fw5_n!3m5!1s0x2e79a03442dc0001:0x23de62b66ccb6888!8m2!3d-7.8642022!4d111.4948248!16s%2Fg%2F11t29fw5_n?hl=id&entry=ttu";

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <footer className="flex flex-col sm:flex-row mt-20">
                <div id="title" className="flex flex-col ml-10 sm:ml-16 my-10">
                    <span
                        onClick={titleLink}
                        className="hover:cursor-pointer font-semibold text-indigo-950 text-2xl sm:text-5xl mb-10"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        SAC-PO.COM
                    </span>
                    <span
                        className="flex flex-col text-gray-500 font-semibold sm:text-base text-xs"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        <p>Office :</p>
                        <p>Jl. Budi Utomo No. 10 Ronowijayan</p>
                        <p>Siman Ponorogo(UNMUH PONOROGO)</p>
                    </span>
                </div>
                <div id="link" className="my-10 flex">
                    {/* Comapny */}
                    <div id="company" className=" ml-10 sm:ml-24">
                        <span
                            className="text-zinc-950 text-md sm:text-lg font-bold leading-relaxed"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Company
                        </span>
                        <div
                            className="flex flex-col items-center mt-10 gap-y-4 text-gray-500 text-sm sm:text-md font-bold"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            <span>Profile</span>
                            <span>Informasi</span>
                            <span>Mobile</span>
                        </div>
                    </div>
                    {/* End Company */}

                    {/* Contact */}
                    <div id="company" className="ml-10 sm:ml-24">
                        <span
                            className="text-zinc-950 text-md sm:text-lg font-bold leading-relaxed"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Contact
                        </span>
                        <div
                            className="flex flex-col items-center mt-10 gap-y-4 text-gray-500 text-sm sm:text-md font-bold"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            <span>Website</span>
                            <span>Instagram</span>
                            <span>WhatsApp</span>
                        </div>
                    </div>
                    {/* End Contact */}

                    {/* More */}
                    <div id="company" className="ml-10 sm:ml-24">
                        <span
                            className="text-zinc-950 text-md sm:text-lg font-bold leading-relaxed"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            More
                        </span>
                        <div
                            className="flex flex-col items-center mt-10 gap-y-4 text-gray-500 text-sm sm:text-md font-bold"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            <span>Airline</span>
                        </div>
                    </div>
                    {/* End More */}

                    {/* Maps */}
                    <div className="ml-24 hidden sm:flex">
                        <iframe
                            title="Google Maps"
                            frameBorder={0}
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3832320621575!2d111.49224990000003!3d-7.864196899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a03442dc0001%3A0x23de62b66ccb6888!2sPT.%20SURYA%20AMANAH%20CENDIKIA!5e0!3m2!1sen!2sid!4v1643783179066!5m2!1sen!2sid"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* End Maps */}
                </div>
                {/* Maps */}
                <div className="flex justify-center sm:hidden mb-10">
                    <iframe
                        title="Google Maps"
                        frameBorder={0}
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3832320621575!2d111.49224990000003!3d-7.864196899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a03442dc0001%3A0x23de62b66ccb6888!2sPT.%20SURYA%20AMANAH%20CENDIKIA!5e0!3m2!1sen!2sid!4v1643783179066!5m2!1sen!2sid"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* End Maps */}
                <div className="text-center"></div>
            </footer>
        </>
    );
}

export default FooterLayout;
