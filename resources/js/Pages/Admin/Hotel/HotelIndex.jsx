import ItemHotel from "@/Components/ItemHotel/ItemHotel";
import Authenticated from "@/Layouts/AuthenticatedLayout";

function HotelIndex() {
    return (
        <>
            <Authenticated>
            <div className="flex flex-col gap-y-10 items-center">
                <span className="text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md">
                    Foto Hotel
                </span>
                <>
                    <ItemHotel />
                </>
                <div>
                    <button className="bg-[#C69749] p-3 text-white font-semibold rounded-md">
                        new data +
                    </button>
                </div>
            </div>
            </Authenticated>
        </>
    );
}

export default HotelIndex;
