import Navbar from "@/Components/Navbar";
import { Helmet } from "react-helmet";
import Poppins from "../../../font/Poppins-ExtraBold.ttf";
import Mekkah from "../../../img-local/bg-mekkah.png"

function MainLayout() {
    const styles = {
        fontWeight: "900",
    };

    return (
        <>
            <Navbar />
            <span id="tagline" className="flex justify-between">
                <div>
                    <div
                        style={styles}
                        className={`text-red-400 text-xl font-${Poppins} uppercase mx-10 mt-10`}
                    >
                        Pt. surya amanah cendikia Ponorogo
                    </div>
                    {/* React Helmet */}
                    <Helmet>
                        <link
                            rel="stylesheet"
                            href="https://fonts.cdnfonts.com/css/jano-sans-pro"
                        />

                        <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                        />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossorigin
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                            rel="stylesheet"
                        />
                    </Helmet>
                    {/* End React Helmet */}
                    <div
                        className="text-indigo-950 text-7xl font-bold mx-9 mt-10"
                        style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                    >
                        Umroh Berkah
                    </div>
                    <div
                        style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                        className="text-indigo-950 text-5xl font-bold mx-9 mt-1"
                    >
                        Bulan Ramadhan{" "}
                    </div>
                    <div
                        style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                        className=" text-indigo-950 text-8xl font-bold mx-9 mt-1"
                    >
                        2024
                    </div>

                    {/* SubTitle */}
                    <div
                        className="text-gray-500 text-base break-all font-medium ml-9 mt-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        “Jarak Mekah tidak akan berubah kalau kita tidak
                    </div>
                    <span
                        className="text-gray-500 text-base break-all font-medium ml-9"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        melangkah, Niat yang kuat Insya Allah berangkat.”
                    </span>
                    {/* End SubTitle */}
                </div>
                <div className="mr-10">
                    <img width={500} height={500} srcSet={Mekkah}/>
                </div>
            </span>
        </>
    );
}

export default MainLayout;
