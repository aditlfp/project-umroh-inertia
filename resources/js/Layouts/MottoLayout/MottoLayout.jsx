import MottoComponent from "@/Components/MottoComponent";
import { Helmet } from "react-helmet";

function MottoLayout() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                {/* Helmet */}
                <Helmet>
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
                    <link
                        href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                {/* Helmet */}
                <span
                    className="uppercase text-center text-gray-500 text-2xl font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    Motto
                </span>
                <h1
                    style={{ fontFamily: "Volkhov, serif" }}
                    className="capitalize text-center text-indigo-950 text-[50px] font-bold"
                >
                    Melayani dengan lebih baik
                </h1>
            </div>
            <MottoComponent />
        </>
    );
}

export default MottoLayout;
