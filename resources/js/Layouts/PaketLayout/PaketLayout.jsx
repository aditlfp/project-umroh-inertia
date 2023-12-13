import ItemsPaket from "@/Components/ItemPaket/ItemsPaket";
import { Helmet } from "react-helmet";

function PaketLayout() {
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
            <div className="flex flex-col items-center justify-center my-10">
                <h1
                    className="text-gray-500 font-semibold text-xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                {/* Change This To Dinamic */}
                    Paket Ramadhan 2024
                {/* Change This To Dinamic */}
                </h1>

                <h2
                    style={{ fontFamily: "Volkhov, serif" }}
                    className="text-indigo-950 text-[50px] font-bold mt-4"
                >
                    Pilihan Terbaik Anda
                </h2>
            </div>
            <ItemsPaket />
        </>
    );
}

export default PaketLayout;
