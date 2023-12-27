import ItemsPaket from "@/Components/ItemPaket/ItemsPaket";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function PaketLayout({ dataPaket, props }) {
    console.log("from layout", props);
    useEffect(() => {
        if (dataPaket) {
            // 👇 Will scroll smoothly to the top of the next section
            const nextSection = document.getElementById(`${dataPaket}`);
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            } else {
                // Handle the case where there is no next section
                console.warn("No next section found.");
            }
        }
    }, [dataPaket]);

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
            <div
                id="pilihan-paket"
                className="flex flex-col items-center justify-center my-10"
            >
                <h1
                    className="text-gray-500 font-semibold text-lg sm:text-xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    {/* Change This To Dinamic */}
                    Paket Ramadhan 2024
                    {/* Change This To Dinamic */}
                </h1>

                <h2
                    style={{ fontFamily: "Volkhov, serif" }}
                    className="text-indigo-950 text-[30px] sm:text-[50px] font-bold mt-4"
                >
                    Pilihan Terbaik Anda
                </h2>
            </div>
            <ItemsPaket datas={props} />
        </>
    );
}

export default PaketLayout;
