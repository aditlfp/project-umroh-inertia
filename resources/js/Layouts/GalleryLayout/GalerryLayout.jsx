import ItemGalerry from "@/Components/ItemGalerry/ItemGalerry";
import { Helmet } from "react-helmet";

function GalerryLayout() {
    return (
        <>
            {/* Helmet */}
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
            {/* Helmet */}
            <div className="flex flex-col mx-9">
                <span
                    className="uppercase font-semibold text-gray-500 text-lg"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    aman & berpengalaman
                </span>
                <span
                    className="uppercase font-semibold text-indigo-950 text-6xl"
                    style={{ fontFamily: "Volkhov, sans-serif" }}
                >
                    Galeri
                </span>
            </div>
            <div className="flex mx-9 my-5">
              <ItemGalerry />
            </div>
        </>
    );
}

export default GalerryLayout;
